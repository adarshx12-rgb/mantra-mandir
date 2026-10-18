// Public contact address; routing enabled by the owner.
export const CONTACT = { email: 'hello@mantramandir.com', active: true };
export const INFO_PAGES = [
  {
    slug: 'about-us', title: 'About Us', type: 'AboutPage',
    desc: 'Learn about Mantra Mandir, its devotional sources, meanings and simple tools for daily chanting.',
    sections: [
      ['A place for daily practice', 'Mantra Mandir brings Hindu mantras, shlokas and stotras together with Sanskrit text, Roman transliteration, Hinglish reading aids and meanings. Our aim is to help you read attentively and build a manageable devotional routine.'],
      ['Tools that stay simple', 'Browse by deity, festival or intention and use the manual 108-bead counter to follow your recitations. No account or subscription is required. Your saved practice stays in your browser.'],
      ['Sources and editorial approach', 'The collection draws on published devotional sources and the books and teachings of pandits and spiritual teachers. Source notes identify references and variations where available. Meanings are editorial explanations; excerpts are labelled. This does not mean the website has been independently reviewed or endorsed by the authors of those sources.'],
      ['Respect for different traditions', 'Wording, pronunciation and practice may vary between traditions. Follow your teacher’s guidance where appropriate. Devotional themes describe the purpose of a prayer, not guaranteed results.'],
      ['Help improve the collection', 'We welcome corrections to Sanskrit, transliteration, meanings and source references. Visit Contact Us for our email address and the details to include with a correction.'],
    ],
  },
  {
    slug: 'privacy-policy', title: 'Privacy Policy', type: 'WebPage',
    desc: 'How Mantra Mandir handles browser storage, saved chant counts, Google Analytics, external links and contact information.',
    sections: [
      ['What this policy covers', 'This policy describes the current Mantra Mandir website. The site has no user accounts, payment processing, contact form or application backend. We do not add advertising pixels. The site uses Google Analytics, described below.'],
      ['Saved practice on your device', 'The site uses browser local storage. The mm1 entry stores prayer counts, completed malas, practice streaks, total repetitions, the last practice date and the last prayer visited. The mmlang entry stores your selected script. The application does not upload these values to us. They remain until removed by you or your browser.'],
      ['Your storage choices', 'The cross button on the homepage clears the displayed prayer’s saved count and malas and dismisses its reminder. Reset count on a prayer page clears only that prayer’s current count. To remove all saved practice and script preferences, clear this website’s data through your browser settings. Blocking browser storage prevents reliable saving but still allows reading.'],
      ['Website delivery and technical information', 'Your browser sends technical information such as your IP address, requested URL and browser headers to the hosting or network provider when loading the website. Providers may process access and security logs to deliver and protect the service. These are separate from the local prayer counter. We do not specify a provider log-retention period here because it depends on the hosting configuration.'],
      ['Google Analytics', 'We use Google Analytics 4 to understand how visitors use the website, such as which pages are viewed, how visitors arrive, the type of device and browser, and approximate location. Google Analytics loads only if you choose Accept in the cookie banner. It then sets first-party cookies (named _ga and _ga_ followed by an identifier) and sends this usage information to Google. We use it only in aggregate to improve the site; we do not use it to identify you, and your saved chant counts are not sent. Google processes this information under its own privacy policy (https://policies.google.com/privacy). If you choose Decline, Google Analytics does not load. You can change your choice at any time with Cookie settings at the bottom of each page. See the Cookie Policy for the cookie names and how long they last. You can also block these cookies in your browser settings or install the Google Analytics opt-out browser add-on (https://tools.google.com/dlpage/gaoptout).'],
      ['External services and links', 'Source links open third-party websites whose privacy practices may differ. The WhatsApp share link opens WhatsApp only when you choose it and includes the prayer name and page URL. It does not include your saved chant counts.'],
      ['Contact information', 'Information you voluntarily send by email, such as your email address and message, is used to respond to your request. Messages pass through our email routing and mailbox providers. Please avoid sending sensitive personal information. See Contact Us for our email address.'],
      ['Changes to this policy', 'We will update this page when the site’s data practices change. The date shown on this page identifies the latest revision.'],
    ],
  },
  {
    slug: 'cookie-policy', title: 'Cookie Policy', type: 'WebPage',
    desc: 'Which cookies and browser storage Mantra Mandir uses, why, how long they last and how to control them.',
    sections: [
      ['What cookies are', 'Cookies are small text files a website stores in your browser. Browser local storage works in a similar way but stays on your device and is not sent with each request. This page explains both as used on mantramandir.com.'],
      ['Analytics cookies', 'We use Google Analytics 4 to count visits and understand which pages are useful. It loads only after you choose Accept in the cookie banner, and then sets two first-party cookies: _ga, which distinguishes visitors, and _ga_ followed by an identifier, which keeps session state. Both normally expire after two years. The information is sent to Google and viewed by us only as aggregate reports. Google’s privacy policy is at policies.google.com/privacy.'],
      ['Browser storage for your practice', 'The mm1 local storage entry keeps your chant counts, completed malas, streak and last prayer visited, the mmlang entry remembers your selected script, and the mmconsent entry remembers whether you accepted or declined analytics cookies. These are needed for the counter and script choice to work, stay on your device and are never sent to us or to Google Analytics.'],
      ['Cookies we do not use', 'We do not use advertising, retargeting or social media tracking cookies, and the site has no accounts or login cookies.'],
      ['Controlling cookies', 'Use Cookie settings at the bottom of any page to accept or decline analytics cookies; declining stops Google Analytics and removes its cookies from this site. You can also block or delete cookies and site data in your browser settings; the prayers remain readable, though saved progress will not persist if storage is blocked. To stop Google Analytics on every website, install the Google Analytics opt-out browser add-on from tools.google.com/dlpage/gaoptout.'],
      ['Changes and questions', 'We will update this page if the cookies we use change; the date at the top shows the latest revision. See the Privacy Policy for more about how information is handled, or Contact Us with questions.'],
    ],
  },
  {
    slug: 'terms-and-conditions', title: 'Terms & Conditions', type: 'WebPage',
    desc: 'Terms for using Mantra Mandir’s devotional texts, explanations and browser-based chanting tools.',
    sections: [
      ['Using the website', 'Mantra Mandir provides devotional reading and practice tools. Please use the site lawfully and respectfully. Do not interfere with its operation, attempt unauthorised access or misrepresent an affiliation with the site.'],
      ['Content and practice guidance', 'Texts, translations and instructions are provided for devotional and informational use. We aim for accuracy but cannot promise that every transcription, explanation or reference is free of error. Traditions and editions can differ. Consult the cited sources and a knowledgeable teacher when you need guidance.'],
      ['No guaranteed outcomes', 'Prayer descriptions do not promise medical, financial, academic or personal outcomes. Devotional practice is not a substitute for appropriate professional advice or treatment.'],
      ['Saved progress and availability', 'The counter stores progress in your browser when storage is available. We do not provide an account backup or cross-device synchronisation. Clearing browser data, changing devices or browser restrictions may remove saved progress. Site availability and uninterrupted access are not guaranteed.'],
      ['Content rights', 'Ancient prayer texts, modern translations, editorial explanations and artwork may have different ownership and reuse conditions. Access to this website does not grant a blanket licence to reproduce all its material. Respect applicable rights and the terms of linked sources; contact us about permissions.'],
      ['Links and third-party services', 'External references are provided for context. We do not control third-party websites, their availability or their policies. Your use of those services is subject to their terms.'],
      ['Updates and questions', 'These terms may change as the service develops. The revision date appears on this page. Nothing here is intended to exclude rights that cannot lawfully be excluded. Visit Contact Us for our email address.'],
    ],
  },
  {
    slug: 'contact-us', title: 'Contact Us', type: 'ContactPage',
    desc: 'Contact Mantra Mandir for text corrections, website issues, attribution and permissions questions.',
    sections: [
      ['Get in touch', 'Email us using the address below for corrections, feedback and questions about Mantra Mandir. Include the relevant page link so we can understand your request.'],
      ['Suggest a correction', 'For a text or meaning correction, include the prayer name, page URL, the line in question and a reliable source for the suggested change. This helps us compare editions and understand the issue.'],
      ['Report a website issue', 'Include the page URL, your browser and device, and a brief description of what happened. Do not include passwords or sensitive personal information.'],
      ['Permissions and other enquiries', 'For artwork, attribution or reuse questions, identify the specific material and describe your request. Send your enquiry to the email address below.'],
    ],
  },
];
