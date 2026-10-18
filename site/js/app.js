(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var K = 'mm1', S = {};
  try { S = JSON.parse(localStorage.getItem(K)) || {}; } catch (e) {}
  S.counts = S.counts || {}; S.malas = S.malas || {}; S.streak = S.streak || 0; S.total = S.total || 0;
  var save = function () { try { localStorage.setItem(K, JSON.stringify(S)); } catch (e) {} };
  var ymd = function (d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
  var yest = function () { var d = new Date(); d.setDate(d.getDate() - 1); return ymd(d); };
  var body = document.body, slug = body.dataset.slug;

  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.h); toast.h = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  // Cookie consent: Google Analytics loads only after Accept (window.mmAnalytics in the page head).
  var consent = $('#consent'), choice = null;
  try { choice = localStorage.getItem('mmconsent'); } catch (e) {}
  function openConsent() { if (consent) { consent.hidden = false; $('[data-consent="granted"]', consent).focus(); } }
  if (consent && !choice) consent.hidden = false;
  $$('[data-consent]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.dataset.consent;
      try { localStorage.setItem('mmconsent', v); } catch (e) {}
      consent.hidden = true;
      if (v === 'granted') { if (window.mmAnalytics) window.mmAnalytics(); return; }
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      document.cookie.split(';').forEach(function (c) {
        var n = c.split('=')[0].trim();
        if (n.indexOf('_ga') === 0) ['', '; domain=.' + location.hostname, '; domain=' + location.hostname].forEach(function (d) {
          document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      });
    });
  });
  $$('[data-consent-open]').forEach(function (b) { b.addEventListener('click', openConsent); });

  function showStreak() {
    var e = $('#streak'); if (!e) return;
    var alive = S.last === ymd(new Date()) || S.last === yest();
    e.textContent = S.streak && alive ? S.streak + (S.streak === 1 ? ' day of practice' : ' days of practice') : '';
    e.hidden = !e.textContent;
  }

  function bump() {
    var t = ymd(new Date());
    if (S.last === t) return;
    S.streak = S.last === yest() ? S.streak + 1 : 1;
    S.last = t;
    if (S.streak > 1) toast(S.streak + ' consecutive days of practice');
  }

  showStreak();

  var siteMenu = $('.site-menu');
  if (siteMenu) {
    document.addEventListener('click', function (e) { if (!siteMenu.contains(e.target)) siteMenu.open = false; });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteMenu.open) { siteMenu.open = false; $('summary', siteMenu).focus(); }
    });
  }

  /* ---------- home ---------- */
  var greet = $('#greet');
  if (greet) {
    var h = new Date().getHours();
    greet.textContent = h < 4 ? 'Shubh ratri' : h < 11 ? 'Shubh prabhat' : h < 16 ? 'Namaste' : h < 20 ? 'Shubh sandhya' : 'Shubh ratri';
  }
  var picks = $('#picks');
  if (picks) {
    var p = JSON.parse(picks.textContent)[new Date().getDay()];
    var card = $('.mc[data-slug="' + p + '"]');
    if (card) { card.classList.add('pick'); var b = document.createElement('span'); b.className = 'pickbadge'; b.textContent = "Today's pick"; card.appendChild(b); }
  }
  var cont = $('#cont');
  if (cont && S.lastSlug) {
    $('#resume-link').href = S.lastSlug + '/';
    $('b', cont).textContent = S.lastName;
    $('#resume-count').textContent = (S.counts[S.lastSlug] || 0) + ' of 108 chants saved';
    cont.hidden = false;
    $('#clear-practice').addEventListener('click', function () {
      delete S.counts[S.lastSlug]; delete S.malas[S.lastSlug];
      delete S.lastSlug; delete S.lastName;
      save(); cont.hidden = true;
      var firstTab = $('[data-browse]'); if (firstTab) firstTab.focus();
      toast('Saved count and malas cleared for this prayer.');
    });
  }

  /* ---------- mantra page ---------- */
  var browseTabs = $$('[data-browse]');
  function browse(id, focus) {
    if (!browseTabs.some(function (t) { return t.dataset.browse === id; })) return;
    browseTabs.forEach(function (t) {
      var active = t.dataset.browse === id;
      t.setAttribute('aria-selected', active); t.tabIndex = active ? 0 : -1;
      if (active && focus) t.focus();
    });
    $$('.collection-panel').forEach(function (p) { p.classList.toggle('on', p.id === 'collection-' + id); });
  }
  browseTabs.forEach(function (t, i) {
    t.addEventListener('click', function () { browse(t.dataset.browse); });
    t.addEventListener('keydown', function (e) {
      var index = e.key === 'ArrowRight' ? (i + 1) % browseTabs.length : e.key === 'ArrowLeft' ? (i + browseTabs.length - 1) % browseTabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? browseTabs.length - 1 : -1;
      if (index < 0) return;
      e.preventDefault(); browse(browseTabs[index].dataset.browse, true);
    });
  });
  function revealCollectionHash() {
    var view = location.hash.indexOf('#deity-') === 0 ? 'deities' : location.hash.indexOf('#festival-') === 0 ? 'festivals' : location.hash.indexOf('#intention-') === 0 ? 'intentions' : null;
    if (view) {
      browse(view);
      var target = document.getElementById(location.hash.slice(1));
      if (target) { target.scrollIntoView({ block: 'center' }); openCollection(target); }
    }
  }
  // With JS, a card opens its prayers in a small modal instead of expanding in place.
  var dialog = $('#collection-dialog');
  function openCollection(tile) {
    if (!dialog || !dialog.showModal) { tile.open = true; return; }
    tile.open = false;
    dialog.setAttribute('style', tile.getAttribute('style'));
    $('#collection-dialog-title').textContent = $('summary h3', tile).textContent;
    $('#collection-dialog-meta').textContent = tile.dataset.meta;
    var img = $('summary img', tile);
    $('.cd-banner', dialog).style.backgroundImage = img ? 'url("' + img.getAttribute('src') + '")' : '';
    $('.cd-body', dialog).innerHTML = $('.collection-tile-links', tile).innerHTML;
    if (!dialog.open) dialog.showModal();
  }
  $$('.collection-tile > summary').forEach(function (summary) {
    summary.addEventListener('click', function (e) { e.preventDefault(); openCollection(summary.parentNode); });
  });
  if (dialog) {
    $('.cd-close', dialog).addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }
  if (browseTabs.length) { revealCollectionHash(); window.addEventListener('hashchange', revealCollectionHash); }
  if (!slug) return;
  S.lastSlug = slug; S.lastName = body.dataset.name; save();

  // script tabs
  var tabs = $$('.tab'), panes = $$('.pane');
  function setLang(l) {
    if (['sa', 'en', 'hi'].indexOf(l) === -1) l = 'sa';
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.lang === l); t.tabIndex = t.dataset.lang === l ? 0 : -1; });
    panes.forEach(function (p) { p.classList.toggle('on', p.dataset.lang === l); });
    try { localStorage.setItem('mmlang', l); } catch (e) {}
  }
  var lang = 'sa'; try { lang = localStorage.getItem('mmlang') || 'sa'; } catch (e) {}
  setLang(lang);
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { setLang(t.dataset.lang); });
    t.addEventListener('keydown', function (e) {
      var index = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
      if (index < 0) return;
      e.preventDefault(); setLang(tabs[index].dataset.lang); tabs[index].focus();
    });
  });

  // mala
  var dots = [], svg = $('#dots');
  var N = 108, NS = 'http://www.w3.org/2000/svg';
  for (var i = 0; i < N; i++) {
    var a = -Math.PI / 2 + i * 2 * Math.PI / N, c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', (120 + 108 * Math.cos(a)).toFixed(1)); c.setAttribute('cy', (120 + 108 * Math.sin(a)).toFixed(1));
    c.setAttribute('r', i % 27 === 0 ? 4.6 : 3.1); c.setAttribute('class', 'dot');
    svg.appendChild(c); dots.push(c);
  }
  var ring = $('.ring');
  function paint(n) {
    dots.forEach(function (d, i) { d.classList.toggle('on', i < n); });
    $('#count').textContent = n;
    var m = S.malas[slug] || 0;
    $('#malas').textContent = m ? m + (m === 1 ? ' mala' : ' malas') + ' completed' : '';
  }
  paint(S.counts[slug] || 0);
  var completionTimer;
  function chant() {
    clearTimeout(completionTimer);
    var n = (S.counts[slug] || 0) + 1;
    S.total++; bump();
    if (navigator.vibrate) navigator.vibrate(12);
    ring.classList.remove('pop'); void ring.offsetWidth; ring.classList.add('pop');
    if (n >= N) {
      S.counts[slug] = 0; S.malas[slug] = (S.malas[slug] || 0) + 1; save();
      paint(N);
      $('#done').textContent = '108 chants complete. Your mala is saved.';
      completionTimer = setTimeout(function () { paint(S.counts[slug] || 0); }, 2600);
    } else {
      S.counts[slug] = n; save(); paint(n); $('#done').textContent = '';
    }
    showStreak();
  }
  $('#chant').addEventListener('click', chant);
  $('#reset').addEventListener('click', function () { clearTimeout(completionTimer); S.counts[slug] = 0; save(); paint(0); $('#done').textContent = ''; });

  // share
  var wa = $('#wa'); if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(body.dataset.name + ' – chant & read: ' + location.href);
})();
