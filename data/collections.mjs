// Editorial navigation. Intentions describe devotional uses, not promised outcomes.
export const DEITIES = [
  { id: 'durga', name: 'Durga' },
  { id: 'shiva', name: 'Shiva' },
  { id: 'ganesh', name: 'Ganesh' },
  { id: 'saraswati', name: 'Saraswati' },
  { id: 'krishna', name: 'Krishna' },
  { id: 'vishnu', name: 'Vishnu' },
  { id: 'rama', name: 'Rama' },
  { id: 'annapurna', name: 'Annapurna' },
  { id: 'lakshmi', name: 'Lakshmi' },
  { id: 'hanuman', name: 'Hanuman' },
  { id: 'gayatri', name: 'Gayatri' },
  { id: 'kali', name: 'Kali' },
  { id: 'ayyappa', name: 'Ayyappa' },
  { id: 'murugan', name: 'Murugan' },
].sort((a, b) => a.name.localeCompare(b.name, 'en'));

export const INTENTIONS = [
  { id: 'strength', name: 'Strength & courage', description: 'Prayers for steadiness when life feels difficult.' },
  { id: 'learning', name: 'Wisdom & learning', description: 'Make space for study, understanding and clear thought.' },
  { id: 'peace', name: 'Peace of mind', description: 'A moment to slow down and return to your practice.' },
  { id: 'devotion', name: 'Devotion & gratitude', description: 'Express reverence, surrender and thankfulness.' },
  { id: 'beginnings', name: 'New beginnings', description: 'Begin a task or a new chapter with a prayer.' },
  { id: 'prosperity', name: 'Prosperity & abundance', description: 'Prayers for well-being, generosity and a flourishing home.' },
  { id: 'nourishment', name: 'Food & nourishment', description: 'Prayers for daily nourishment and gratitude for food.' },
  { id: 'wellbeing', name: 'Health & well-being', description: 'Devotional support and comfort during illness and recovery.' },
  { id: 'confidence', name: 'Confidence & clear speech', description: 'Prayers for courage, confidence and thoughtful expression.' },
  { id: 'exams', name: 'Study & exams', description: 'Begin study and exam preparation with focus and devotion.' },
  { id: 'protection', name: 'Protection & reassurance', description: 'Prayers for reassurance when facing uncertainty or danger.' },
  { id: 'sleep', name: 'Restful sleep', description: 'Close the day with quiet remembrance and a bedtime prayer.' },
  { id: 'marriage', name: 'Marriage & companionship', description: 'Prayers for a loving partnership grounded in mutual respect.' },
];

// Prayers listed first, in this order, for both Navratris; the deities' other prayers follow.
const NAVRATRI = ['aigiri-nandini', 'ya-devi-sarvabhuteshu', 'sarva-mangala-mangalye', 'devi-kavach-navadurga', 'shree-suktam', 'devi-gayatri-mantra', 'durga-saptashloki', 'argala-stotram', 'devi-stuti'];

// Usual Gregorian windows, not a dated panchang. Some observances vary by region.
// `featured` slugs come first and may belong to other deities (e.g. Shree Suktam).
export const FESTIVALS = [
  { id: 'makaravilakku', name: 'Makaravilakku', month: 1, season: 'Mid-January · Makara Sankranti', deities: ['ayyappa'] },
  { id: 'thaipusam', name: 'Thaipusam', month: 1, season: 'January–February · Thai month', deities: ['murugan'] },
  { id: 'vasant-panchami', name: 'Vasant Panchami', month: 1, season: 'January–February', deities: ['saraswati'] },
  { id: 'maha-shivaratri', name: 'Maha Shivaratri', month: 2, season: 'February–March', deities: ['shiva'] },
  { id: 'holi', name: 'Holi', month: 3, season: 'February–March', deities: ['krishna'] },
  { id: 'chaitra-navratri', name: 'Chaitra Navratri', month: 3, season: 'March–April', deities: ['durga'], featured: NAVRATRI },
  { id: 'hanuman-jayanti', name: 'Hanuman Jayanti', month: 4, season: 'March–April · Chaitra observance', deities: ['hanuman'] },
  { id: 'akshaya-tritiya', name: 'Akshaya Tritiya', month: 4, season: 'April–May', deities: ['lakshmi'] },
  { id: 'gayatri-jayanti', name: 'Gayatri Jayanti', month: 6, season: 'May–June · Jyeshtha observance', deities: ['gayatri'] },
  { id: 'shravan', name: 'Shravan Mondays', month: 7, season: 'July–August', deities: ['shiva'] },
  { id: 'gayatri-shravana', name: 'Gayatri Jayanti (Shravana tradition)', month: 8, season: 'July–August · Shravana Purnima', deities: ['gayatri'] },
  { id: 'janmashtami', name: 'Krishna Janmashtami', month: 8, season: 'August–September', deities: ['krishna'] },
  { id: 'ganesh-chaturthi', name: 'Ganesh Chaturthi', month: 9, season: 'August–September', deities: ['ganesh'] },
  { id: 'sharad-navratri', name: 'Sharad Navratri & Durga Puja', month: 10, season: 'September–October', deities: ['durga', 'kali', 'saraswati'], featured: NAVRATRI },
  { id: 'diwali', name: 'Diwali & Lakshmi Puja', month: 11, season: 'October–November', deities: ['lakshmi', 'ganesh'] },
  { id: 'kali-puja', name: 'Kali Puja', month: 11, season: 'October–November · Diwali new moon', deities: ['kali'] },
  { id: 'skanda-sashti', name: 'Skanda Sashti', month: 11, season: 'October–November', deities: ['murugan'] },
  { id: 'mandala-season', name: 'Sabarimala Mandala Season', month: 12, season: 'November–December · 41-day vow', deities: ['ayyappa'] },
  { id: 'gita-jayanti', name: 'Gita Jayanti', month: 12, season: 'November–December', deities: ['krishna'] },
];

export const MANTRA_COLLECTIONS = {
  'gayatri-mantra': { deityId: 'gayatri', intentions: ['learning', 'peace', 'devotion'] },
  'mahamrityunjay-mantra': { deityId: 'shiva', intentions: ['strength', 'peace', 'devotion'] },
  'om-krishnaya-vasudevaya-haraye-paramatmane-mantra': { deityId: 'krishna', intentions: ['peace', 'devotion'] },
  'saraswati-mantra': { deityId: 'saraswati', intentions: ['learning', 'beginnings', 'devotion'] },
};

export const collectionFor = m => MANTRA_COLLECTIONS[m.slug] || { deityId: m.deityId, intentions: m.intentions || [] };

export const festivalMantras = (festival, mantras) => {
  const featured = (festival.featured || []).map(slug => mantras.find(m => m.slug === slug));
  return [...featured, ...mantras.filter(m => !featured.includes(m) && festival.deities.includes(collectionFor(m).deityId))];
};
