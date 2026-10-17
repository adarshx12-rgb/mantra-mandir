// Editorial navigation. Intentions describe devotional uses, not promised outcomes.
export const DEITIES = [
  { id: 'durga', name: 'Durga' },
  { id: 'shiva', name: 'Shiva' },
  { id: 'ganesh', name: 'Ganesh' },
  { id: 'saraswati', name: 'Saraswati' },
  { id: 'krishna', name: 'Krishna' },
  { id: 'lakshmi', name: 'Lakshmi' },
  { id: 'hanuman', name: 'Hanuman' },
  { id: 'gayatri', name: 'Gayatri' },
  { id: 'kali', name: 'Kali' },
  { id: 'ayyappa', name: 'Ayyappa' },
  { id: 'murugan', name: 'Murugan' },
];

export const INTENTIONS = [
  { id: 'strength', name: 'Strength & courage', description: 'Prayers for steadiness when life feels difficult.' },
  { id: 'learning', name: 'Wisdom & learning', description: 'Make space for study, understanding and clear thought.' },
  { id: 'peace', name: 'Peace of mind', description: 'A moment to slow down and return to your practice.' },
  { id: 'devotion', name: 'Devotion & gratitude', description: 'Express reverence, surrender and thankfulness.' },
  { id: 'beginnings', name: 'New beginnings', description: 'Begin a task or a new chapter with a prayer.' },
  { id: 'prosperity', name: 'Prosperity & abundance', description: 'Prayers for well-being, generosity and a flourishing home.' },
];

// Usual Gregorian windows, not a dated panchang. Some observances vary by region.
export const FESTIVALS = [
  { id: 'makaravilakku', name: 'Makaravilakku', month: 1, season: 'Mid-January · Makara Sankranti', deities: ['ayyappa'] },
  { id: 'thaipusam', name: 'Thaipusam', month: 1, season: 'January–February · Thai month', deities: ['murugan'] },
  { id: 'vasant-panchami', name: 'Vasant Panchami', month: 1, season: 'January–February', deities: ['saraswati'] },
  { id: 'maha-shivaratri', name: 'Maha Shivaratri', month: 2, season: 'February–March', deities: ['shiva'] },
  { id: 'holi', name: 'Holi', month: 3, season: 'February–March', deities: ['krishna'] },
  { id: 'chaitra-navratri', name: 'Chaitra Navratri', month: 3, season: 'March–April', deities: ['durga'] },
  { id: 'hanuman-jayanti', name: 'Hanuman Jayanti', month: 4, season: 'March–April · Chaitra observance', deities: ['hanuman'] },
  { id: 'akshaya-tritiya', name: 'Akshaya Tritiya', month: 4, season: 'April–May', deities: ['lakshmi'] },
  { id: 'gayatri-jayanti', name: 'Gayatri Jayanti', month: 6, season: 'May–June · Jyeshtha observance', deities: ['gayatri'] },
  { id: 'shravan', name: 'Shravan Mondays', month: 7, season: 'July–August', deities: ['shiva'] },
  { id: 'gayatri-shravana', name: 'Gayatri Jayanti (Shravana tradition)', month: 8, season: 'July–August · Shravana Purnima', deities: ['gayatri'] },
  { id: 'janmashtami', name: 'Krishna Janmashtami', month: 8, season: 'August–September', deities: ['krishna'] },
  { id: 'ganesh-chaturthi', name: 'Ganesh Chaturthi', month: 9, season: 'August–September', deities: ['ganesh'] },
  { id: 'sharad-navratri', name: 'Sharad Navratri & Durga Puja', month: 10, season: 'September–October', deities: ['durga', 'kali', 'saraswati'] },
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
