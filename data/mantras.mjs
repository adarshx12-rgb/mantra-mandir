// All mantra content lives here. To add a mantra, add an object and run `node build.mjs`.
import { PDF_MANTRAS, PDF_URL } from './pdf-mantras.mjs';
import { POPULAR_MANTRAS } from './popular-mantras.mjs';
export const SITE = {
  name: 'Mantra Mandir',
  url: process.env.SITE_URL || 'https://example.com', // set SITE_URL when building for production
  tagline: 'Chant, read and listen to Hindu mantras in Sanskrit, English and Hinglish',
};

// Weekday (0 = Sunday) -> slug for the "Today's pick" badge on the home page
export const WEEK_PICKS = [
  'gayatri-mantra',
  'mahamrityunjay-mantra',
  'gayatri-mantra',
  'saraswati-mantra',
  'om-krishnaya-vasudevaya-haraye-paramatmane-mantra',
  'saraswati-mantra',
  'mahamrityunjay-mantra',
];

export const COMING_SOON = ['Hanuman Chalisa (full)'];

export const mantras = [
  {
    slug: 'gayatri-mantra',
    art: 'gayatri',
    sourceUrl: 'https://greenmesg.org/stotras/gayatri/gayatri_mantra.php',
    sourceNote: 'Rigveda 3.62.10, with the customary opening Om and the three vyahritis. Shown without Vedic accent marks.',
    short: 'Gayatri Mantra',
    h1: 'Gayatri Mantra',
    deity: 'Savitr · Goddess Gayatri',
    title: 'Gayatri Mantra – Lyrics in Sanskrit, English & Hinglish with Meaning & Audio',
    desc: 'Chant or read the Gayatri Mantra in Sanskrit, English and Hinglish. Listen to the audio, understand the meaning, and count your 108 chants with our mala counter.',
    tagline: 'The mantra of light. Begin your day by inviting clarity into your mind.',
    cardLine: 'Light & clarity',
    theme: { bg: '#100e0c', bg2: '#382518', accent: '#ef9b36', accent2: '#b98a45', text: '#eee4d0', glow: 'transparent' },
    imgAlt: 'Radiant golden sunrise with the divine Gayatri in glowing light',
    lines: [
      { sa: 'ॐ भूर्भुवः स्वः', en: 'Oṃ bhūr bhuvaḥ svaḥ', hi: 'Om bhoor bhuvah svah', englishMeaning: "Om. Earth, atmosphere and heaven." },
      { sa: 'तत्सवितुर्वरेण्यं', en: 'Tat savitur vareṇyaṃ', hi: 'Tat savitur varenyam', englishMeaning: "That worshipful radiance of Savitr," },
      { sa: 'भर्गो देवस्य धीमहि ।', en: 'Bhargo devasya dhīmahi', hi: 'Bhargo devasya dheemahi', englishMeaning: "the divine light on which we meditate;" },
      { sa: 'धियो यो नः प्रचोदयात् ॥', en: 'Dhiyo yo naḥ pracodayāt', hi: 'Dhiyo yo nah prachodayaat', englishMeaning: "may he inspire our understanding." },
    ],
    meaning: {
      sa: 'ॐ। पृथ्वी, अन्तरिक्ष और स्वर्ग। हम सविता देव के वरण करने योग्य दिव्य तेज का ध्यान करते हैं। वे हमारी बुद्धियों को प्रेरित करें।',
      en: 'Om. Earth, atmosphere and heaven. We meditate on the divine radiance of Savitr, worthy of reverence. May he inspire our understanding.',
      hi: 'Om. Prithvi, antariksh aur svarg. Hum Savita dev ke vandaneeya divya tej ka dhyaan karte hain. Ve hamaari buddhi ko prerit karein.',
    },
    intro: 'The Gayatri Mantra is one of the oldest and most revered mantras in Hinduism, found in the Rigveda (3.62.10). It is addressed to Savitr, the Sun as the source of light and wisdom, and is also worshipped as Goddess Gayatri. Devotees chant it at sunrise, noon and sunset to seek clarity, focus and a calm mind.',
    benefits: [
      'Believed to sharpen focus and bring mental clarity, which is why students chant it before study.',
      'A calming practice at sunrise: the steady rhythm helps quiet restless thoughts.',
      'Traditionally chanted as part of Sandhya Vandana, the daily prayer at dawn, noon and dusk.',
      'Often chanted for gratitude to the Sun and for inner light and wisdom.',
      'Suitable for everyone, from beginners to long-time practitioners.',
    ],
    howTo: [
      'Sit comfortably facing east if you can, spine upright, hands resting on your knees.',
      'Take three slow breaths. Start with a calm “Om”.',
      'Chant slowly and clearly. Use the Sanskrit, English or Hinglish tab, whichever feels easiest.',
      'Chant 3, 11, 21 or 108 times. Use the mala counter below to keep count.',
      'Finish with a few seconds of silence and gratitude.',
    ],
    bestTime: 'Sunrise or Brahma Muhurta (about 1.5 hours before sunrise). Also at noon and sunset.',
    faqs: [
      ['What is the Gayatri Mantra?', 'It is a Vedic mantra from the Rigveda dedicated to Savitr, the Sun deity, and revered as Goddess Gayatri. It is a prayer for wisdom and illumination of the intellect.'],
      ['What is the best time to chant the Gayatri Mantra?', 'Traditionally at sunrise (or Brahma Muhurta), noon and sunset. If these times are not possible, any calm moment of the day works.'],
      ['How many times should I chant the Gayatri Mantra?', 'The traditional count is 108 times (one mala). You may also chant 3, 11 or 21 times when short on time. Regularity matters more than the number.'],
      ['Can anyone chant the Gayatri Mantra?', 'Yes. It is a universal prayer for wisdom. Chant with respect, sincerity and clear pronunciation.'],
    ],
    audio: 'gayatri-mantra.mp3',
  },
  {
    slug: 'mahamrityunjay-mantra',
    art: 'shiv',
    sourceUrl: 'https://greenmesg.org/stotras/vedas/rigveda/mandala7/sukta59/rudra-om_tryambakam_yajamahe.php',
    sourceNote: 'Rigveda 7.59.12, with the customary opening Om. Mā amṛtāt means “not from immortality”. Shown without Vedic accent marks.',
    short: 'Mahamrityunjay Mantra',
    h1: 'Mahamrityunjay Mantra',
    deity: 'Lord Shiva',
    title: 'Mahamrityunjay Mantra – Lyrics in Sanskrit, English & Hinglish with Meaning & Audio',
    desc: 'Chant or read the Mahamrityunjay Mantra in Sanskrit, English and Hinglish. Listen to the audio, learn the meaning, and track your 108 chants.',
    tagline: 'A prayer to Shiva for liberation, courage and the well-being of those we love.',
    cardLine: 'Courage & liberation',
    theme: { bg: '#10162f', bg2: '#26334a', accent: '#bed9e8', accent2: '#d4773d', text: '#e8edf0', glow: 'transparent' },
    imgAlt: 'Lord Shiva meditating under a crescent moon in a misty night sky',
    lines: [
      { sa: 'ॐ त्र्यम्बकं यजामहे', en: 'Oṃ tryambakaṃ yajāmahe', hi: 'Om tryambakam yajaamahe', englishMeaning: "Om. We worship the three-eyed Lord." },
      { sa: 'सुगन्धिं पुष्टिवर्धनम् ।', en: 'Sugandhiṃ puṣṭivardhanam', hi: 'Sugandhim pushti-vardhanam', englishMeaning: "The fragrant one, who nourishes and sustains." },
      { sa: 'उर्वारुकमिव बन्धनान्', en: 'Urvārukam iva bandhanān', hi: 'Urvaarukam iva bandhanaan', englishMeaning: "As a ripe cucumber is freed from its vine," },
      { sa: 'मृत्योर्मुक्षीय मामृतात् ॥', en: 'Mṛtyor mukṣīya māmṛtāt', hi: 'Mrityor muksheeya maamritaat', englishMeaning: "may I be freed from death, but not from immortality." },
    ],
    meaning: {
      sa: 'हम तीन नेत्रों वाले भगवान शिव की पूजा करते हैं, जो सुगंधित हैं और सबका पोषण करने वाले हैं। जैसे पका हुआ खरबूज़ा बेल से अपने आप अलग हो जाता है, वैसे ही हमें मृत्यु के बंधन से मुक्त करें और अमृत (मोक्ष) से दूर न करें।',
      en: 'We worship the three-eyed Lord Shiva, who is fragrant and nourishes all beings. Like a ripe cucumber freed from its vine, may he liberate us from the bondage of death and not from immortality.',
      hi: 'Hum teen netron wale Bhagwan Shiv ki pooja karte hain, jo sugandhit hain aur sabka poshan karne wale hain. Jaise pakka hua kharbooja bel se apne aap alag ho jaata hai, waise hi hamein mrityu ke bandhan se mukt karein aur amrit (moksha) se door na karein.',
    },
    intro: 'The Mahamrityunjay Mantra, also called the Tryambakam Mantra or Rudra Mantra, is a powerful prayer to Lord Shiva found in the Rigveda (7.59.12) and the Yajurveda. Devotees chant it for protection, good health, peace of mind and freedom from fear, and for loved ones who are unwell.',
    benefits: [
      'Chanted for strength, courage and freedom from fear in difficult times.',
      'A traditional prayer for the health and well-being of family and loved ones.',
      'Believed to bring protection and a deep sense of calm.',
      'Often chanted on Mondays and during Maha Shivaratri and the month of Shravan.',
      'Supports a meditative, steady mind. The slow rhythm is soothing to chant.',
    ],
    howTo: [
      'Sit in a quiet place. Lighting a diya or incense is optional.',
      'Close your eyes and picture Lord Shiva in deep meditation.',
      'Chant slowly with focus. Use the tab that is easiest for you to read.',
      'Chant 108 times with a rudraksha mala, or use the mala counter below.',
      'End with a silent prayer for the well-being of all.',
    ],
    bestTime: 'Brahma Muhurta (early morning), Mondays, and evenings. Also on Maha Shivaratri.',
    faqs: [
      ['What is the Mahamrityunjay Mantra?', 'It is a Vedic mantra to Lord Shiva, found in the Rigveda and Yajurveda. It is also known as the Tryambakam Mantra and prays for protection and liberation from the fear of death.'],
      ['What are the benefits of the Mahamrityunjay Mantra?', 'Devotees believe it brings protection, calm, courage and well-being. It is chanted for the health of loved ones. It is a spiritual practice and not a substitute for medical care.'],
      ['How many times should I chant the Mahamrityunjay Mantra?', 'The traditional count is 108 times (one mala). Some devotees chant 11 or 21 times daily, or 1,25,000 times for special vows.'],
      ['Which day is best for the Mahamrityunjay Mantra?', 'Monday is dedicated to Lord Shiva and is a favourite day. Maha Shivaratri and the month of Shravan are especially auspicious. You can also chant it daily.'],
    ],
    audio: 'mahamrityunjay-mantra.mp3',
  },
  {
    slug: 'om-krishnaya-vasudevaya-haraye-paramatmane-mantra',
    art: 'krishna',
    displayTitle: 'Om Krishnaya Vasudevaya',
    sourceUrl: 'https://vedabase.io/en/library/sb/10/73/16/',
    sourceNote: 'Śrīmad Bhāgavatam 10.73.16. Om is a customary devotional prefix; it is not part of this verse in the cited edition.',
    short: 'Om Krishnaya Vasudevaya',
    h1: 'Om Krishnaya Vasudevaya Haraye Paramatmane Mantra',
    deity: 'Lord Krishna · Vasudeva',
    title: 'Om Krishnaya Vasudevaya Haraye Paramatmane Mantra – Lyrics, Meaning & Audio',
    desc: 'Chant or read Om Krishnaya Vasudevaya Haraye Paramatmane in Sanskrit, English and Hinglish. Listen to the audio, learn the meaning, and track 108 chants.',
    tagline: 'Salutations to Krishna, the indwelling Lord. A prayer of devotion and surrender.',
    cardLine: 'Devotion & peace',
    theme: { bg: '#101e38', bg2: '#263c55', accent: '#d8ad58', accent2: '#628cb5', text: '#eee4d0', glow: 'transparent' },
    imgAlt: 'Lord Krishna playing the flute beside a moonlit river, wearing golden-yellow silk',
    lines: [
      { sa: 'ॐ कृष्णाय वासुदेवाय', en: 'Oṃ kṛṣṇāya vāsudevāya', hi: 'Om Krishnaaya Vaasudevaaya', englishMeaning: "Om. To Krishna, the son of Vasudeva," },
      { sa: 'हरये परमात्मने ।', en: 'Haraye paramātmane', hi: 'Haraye paramaatmane', englishMeaning: "to Hari, the Supreme Self," },
      { sa: 'प्रणतक्लेशनाशाय', en: 'Praṇata-kleśa-nāśāya', hi: 'Pranata-klesha-naashaaya', englishMeaning: "who removes the suffering of those who bow to him;" },
      { sa: 'गोविन्दाय नमो नमः ॥', en: 'Govindāya namo namaḥ', hi: 'Govindaaya namo namah', englishMeaning: "to Govinda, I bow again and again." },
    ],
    meaning: {
      sa: 'वसुदेव-पुत्र श्रीकृष्ण, हरि, परमात्मा को नमस्कार है, जो शरण में आए हुए भक्तों के क्लेश नष्ट करने वाले हैं। उन गोविन्द को बारंबार नमन है।',
      en: 'Salutations to Krishna, the son of Vasudeva; to Hari, the Supreme Soul, who destroys the sorrows of those who surrender to him. Salutations again and again to Govinda.',
      hi: 'Vasudev-putra Shri Krishna, Hari, Paramatma ko namaskar hai, jo sharan mein aaye bhakton ke klesh nasht karne wale hain. Un Govind ko baar-baar naman hai.',
    },
    intro: 'Om Krishnaya Vasudevaya Haraye Paramatmane is a beloved Vaishnava prayer to Lord Krishna, also known as Vasudeva, Hari and Govinda. Its closing lines ask the Lord to remove the sorrows of those who surrender to him. Devotees chant it for peace of mind, devotion and relief from worry.',
    benefits: [
      'A gentle surrender prayer that is easy to chant when the mind feels heavy.',
      'Chanted for peace, comfort and release from worry and sorrow.',
      'Builds a feeling of devotion (bhakti) through repetition of Krishna’s names.',
      'Popular on Thursdays, Ekadashi and during Janmashtami.',
      'Short and rhythmic, so it is easy for beginners and children to learn.',
    ],
    howTo: [
      'Sit calmly. A picture or idol of Krishna in front of you is helpful.',
      'Offer a moment of gratitude. Take a few slow breaths.',
      'Chant with feeling. Let the meaning guide your heart.',
      'Chant 11, 21 or 108 times. Use the mala counter below to keep count.',
      'Close by bowing your head and offering the chanting to Krishna.',
    ],
    bestTime: 'Morning and evening. Thursdays, Ekadashi and Janmashtami are especially loved.',
    faqs: [
      ['What is the meaning of Om Krishnaya Vasudevaya Haraye Paramatmane?', 'It means “Salutations to Krishna, son of Vasudeva, to Hari the Supreme Soul, who removes the sorrows of those who surrender; salutations again and again to Govinda.”'],
      ['How many times should I chant the Krishna mantra?', 'Chant 108 times (one mala) for a full practice. 11 or 21 times is also fine for a short daily chant.'],
      ['When is the best time to chant this mantra?', 'Early morning and evening are good. Thursday, Ekadashi and Janmashtami are especially auspicious. Any calm moment works too.'],
      ['Can I chant it without a guru or mala?', 'Yes. You can chant with sincerity from anywhere. A mala helps keep count, and the counter on this page does the same.'],
    ],
    audio: 'om-krishnaya-vasudevaya-haraye-paramatmane.mp3',
  },
  {
    slug: 'saraswati-mantra',
    art: 'saraswati',
    sourceUrl: 'https://shlokam.org/shloka/yaakundhendhu-thushara-hara.htm',
    sourceNote: 'Saraswati Vandana (Yā kundendu), a traditional prayer. This version uses pūjitā (“worshipped”); vanditā (“praised”) is also commonly recited. Roman transliteration preserves Sanskrit vowel lengths.',
    short: 'Saraswati Mantra',
    h1: 'Saraswati Mantra',
    deity: 'Goddess Saraswati',
    title: 'Saraswati Mantra – Ya Kundendu Lyrics in Sanskrit, English & Hinglish with Audio',
    desc: 'Chant or read the Saraswati Mantra (Ya Kundendu Tusharahara Dhavala) in Sanskrit, English and Hinglish. Listen to the audio, learn the meaning, and track your chants.',
    tagline: 'For knowledge, speech and music. Chant before you learn.',
    cardLine: 'Knowledge & wisdom',
    theme: { bg: '#103a3c', bg2: '#224e4d', accent: '#eee4d0', accent2: '#c18e7c', text: '#f0eadd', glow: 'transparent' },
    imgAlt: 'Goddess Saraswati in white on a lotus with a veena and swan in a serene teal glow',
    lines: [
      { sa: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता', en: 'Yā kundendu-tuṣāra-hāra-dhavalā yā śubhra-vastrāvṛtā', hi: 'Yaa kundendu-tushaara-haara-dhavalaa yaa shubhra-vastraavritaa', englishMeaning: "She who is white as jasmine, the moon and a garland of snow, clothed in pure white;" },
      { sa: 'या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना ।', en: 'Yā vīṇā-vara-daṇḍa-maṇḍita-karā yā śveta-padmāsanā', hi: 'Yaa veenaa-vara-danda-mandita-karaa yaa shveta-padmaasanaa', englishMeaning: "whose hands hold the beautiful neck of the veena, who sits on a white lotus;" },
      { sa: 'या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा पूजिता', en: 'Yā brahmācyuta-śaṅkara-prabhṛtibhir devaiḥ sadā pūjitā', hi: 'Yaa brahmaachyuta-shankara-prabhritibhir devaih sadaa poojitaa', englishMeaning: "who is always worshipped by Brahma, Vishnu, Shiva and the other gods;" },
      { sa: 'सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥', en: 'Sā māṃ pātu sarasvatī bhagavatī niḥśeṣa-jāḍyāpahā', hi: 'Saa maam paatu sarasvatee bhagavatee nihshesha-jaadyaapahaa', englishMeaning: "may that Goddess Saraswati, who dispels all dullness, protect me." },
    ],
    meaning: {
      sa: 'जो कुन्द के फूल, चन्द्रमा और हिम के हार के समान श्वेत हैं, शुभ्र वस्त्र धारण करती हैं, जिनके हाथ सुन्दर वीणा के दण्ड से सुशोभित हैं, जो श्वेत कमल पर विराजमान हैं और ब्रह्मा, विष्णु, शिव आदि देवताओं द्वारा सदा पूजित हैं, वे समस्त जड़ता को दूर करने वाली भगवती सरस्वती मेरी रक्षा करें।',
      en: 'May Saraswati, who dispels all dullness, protect me. Radiant as jasmine, moonlight and a garland of snow, she wears white and sits upon a white lotus. Her hands hold the beautiful neck of the veena. Brahma, Vishnu, Shiva and the other gods worship her continually.',
      hi: 'Kund ke phool, chaand aur him ke haar jaisi shvet Saraswati, shvet vastra pehenti hain aur shvet kamal par viraajti hain. Unke haath sundar veenaa ke dand se sushobhit hain. Brahma, Vishnu, Shiv aur anya devtaa unki sadaa poojaa karte hain. Sab jadtaa door karne waali Bhagavatee meri rakshaa karein.',
    },
    bonus: {
      label: 'Short Saraswati mantra',
      sourceUrl: 'https://www.drikpanchang.com/vedic-mantra/goddesses/saraswati/mantra/saraswati-moola-mantra.html?lang=en',
      lines: [{ sa: 'ॐ ऐं सरस्वत्यै नमः ॥', en: 'Oṃ aiṃ sarasvatyai namaḥ', hi: 'Om aim Sarasvatyai namah', englishMeaning: "Om, aim. Salutations to Goddess Saraswati." }],
      meaning: {
        sa: 'देवी सरस्वती को नमस्कार। “ऐं” उनका बीज मंत्र है, जो ज्ञान और वाणी से जुड़ा है।',
        en: 'Salutations to Goddess Saraswati. “Aim” is her seed (beej) syllable, associated with knowledge and speech.',
        hi: 'Devi Saraswati ko namaskar. “Aim” unka beej mantra hai, jo gyaan aur vaani se juda hai.',
      },
    },
    intro: 'The Saraswati Mantra honours Goddess Saraswati, the deity of knowledge, music, speech and the arts. The verse on this page, “Ya Kundendu Tusharahara Dhavala”, is the Saraswati Vandana, recited by students, teachers and artists, especially on Vasant Panchami and before starting to study.',
    benefits: [
      'Chanted by students before study and exams for focus and a calm mind.',
      'A traditional prayer for knowledge, wisdom and clear speech.',
      'Loved by musicians, writers and artists seeking inspiration.',
      'Central to Vasant Panchami and Saraswati Puja.',
      'The short beej mantra is easy to chant daily, even when you have little time.',
    ],
    howTo: [
      'Sit in a clean, quiet place with your books or instrument in front of you if you wish.',
      'Fold your hands and bring Goddess Saraswati to mind, in white, seated on a lotus.',
      'Chant the verse slowly. Use any script tab that is comfortable.',
      'On busy days, chant the short beej mantra “Om Aim Saraswatyai Namah” 11 or 108 times.',
      'End by bowing and starting your studies or practice with a calm mind.',
    ],
    bestTime: 'Morning before study or practice. Vasant Panchami and Wednesdays are especially loved.',
    faqs: [
      ['What is the Saraswati Mantra?', 'The most well-known is the Saraswati Vandana “Ya Kundendu Tusharahara Dhavala”. A popular short mantra is “Om Aim Saraswatyai Namah”. Both are prayers to Goddess Saraswati for knowledge.'],
      ['When should students chant the Saraswati Mantra?', 'Chant it in the morning before study and before exams. Vasant Panchami is the most auspicious day, but daily chanting is encouraged.'],
      ['What does “Aim” mean in the Saraswati beej mantra?', '“Aim” (ऐं) is the seed syllable (beej) of Goddess Saraswati, traditionally associated with knowledge, speech and creativity.'],
      ['How many times should I chant the Saraswati Mantra?', 'Chant the verse once to three times, or the beej mantra 11, 21 or 108 times. Sincerity and regularity matter most.'],
    ],
    audio: 'saraswati-mantra.mp3',
  },
];

// Preserve the existing URLs and their normalized readings; add the book as a
// corroborating source rather than duplicating Gayatri and Saraswati Vandana.
for (const [slug, page, note] of [
  ['gayatri-mantra', 11, 'The same prayer appears under Gaayatrii mantra in Collection of Mantras, PDF page 11. The site retains its normalized Sanskrit spelling.'],
  ['saraswati-mantra', 4, 'Also in Collection of Mantras, PDF page 4. The PDF reads śubhravastrānvitā; this page retains the common śubhravastrāvṛtā version.'],
]) {
  const mantra = mantras.find(m => m.slug === slug);
  mantra.additionalSource = { url: `${PDF_URL}#page=${page}`, note };
}

const profiles = {
  shiva: { name: 'Lord Shiva', art: 'shiv', theme: mantras[1].theme, imgAlt: mantras[1].imgAlt },
  saraswati: { name: 'Goddess Saraswati', art: 'saraswati', theme: mantras[3].theme, imgAlt: mantras[3].imgAlt },
  krishna: { name: 'Lord Krishna', art: 'krishna', theme: mantras[2].theme, imgAlt: mantras[2].imgAlt },
  ganesh: { name: 'Lord Ganesh', art: 'ganesha', theme: { bg: '#19100e', bg2: '#402b24', accent: '#d9b27c', accent2: '#bb8e7c', text: '#eee4d0', glow: 'transparent' }, imgAlt: 'Lord Ganesha seated beside a lotus pond in warm golden light' },
  durga: { name: 'Goddess Durga', art: null, theme: { bg: '#241015', bg2: '#612633', accent: '#e4b875', accent2: '#cb7966', text: '#f5e7d8', glow: 'transparent' } },
  lakshmi: { name: 'Goddess Lakshmi', art: null, theme: { bg: '#28171f', bg2: '#613949', accent: '#e8c58a', accent2: '#cc9694', text: '#f5e7dc', glow: 'transparent' } },
  hanuman: { name: 'Lord Hanuman', art: null, theme: { bg: '#23130e', bg2: '#60331c', accent: '#e8b875', accent2: '#db8450', text: '#f5e6d6', glow: 'transparent' } },
  kali: { name: 'Goddess Kali', art: null, theme: { bg: '#0d0d18', bg2: '#3d1424', accent: '#e9917f', accent2: '#c8414b', text: '#f3e6e2', glow: 'transparent' } },
  ayyappa: { name: 'Lord Ayyappa', art: null, theme: { bg: '#120f0c', bg2: '#3d2a14', accent: '#f0a640', accent2: '#c96f2c', text: '#f4e8d8', glow: 'transparent' } },
  murugan: { name: 'Lord Murugan', art: null, theme: { bg: '#071a1c', bg2: '#0f4a46', accent: '#e8c06a', accent2: '#d0563e', text: '#eef0e6', glow: 'transparent' } },
  gayatri: { name: 'Goddess Gayatri', art: 'gayatri', theme: mantras[0].theme, imgAlt: mantras[0].imgAlt },
};

const simpleRoman = text => text.replace(/ā/g, 'aa').replace(/ī/g, 'ee').replace(/ū/g, 'oo')
  .replace(/[śṣ]/g, 'sh').replace(/Ś/g, 'Sh').replace(/ṛ/g, 'ri')
  .replace(/[ṅñṇ]/g, 'n').replace(/ṭ/g, 't').replace(/ḍ/g, 'd')
  .replace(/ṃ/g, 'm').replace(/ḥ/g, 'h').replace(/c/g, 'ch').replace(/’/g, '');

// Expands a compact entry (PDF or popular) into the full page model.
function expand(entry, { sourceUrl, sourceNote, faq }) {
  const profile = profiles[entry.deityId];
  const lines = entry.lines.map(([sa, en, englishMeaning, hi]) => ({ sa, en, hi: hi || simpleRoman(en), englishMeaning }));
  const name = entry.displayTitle || entry.short;
  mantras.push({
    ...entry, ...profile, deity: profile.name, h1: name,
    title: `${name} – Sanskrit, Meaning & Chanting | ${SITE.name}`,
    desc: `Read ${name} for ${profile.name} in Sanskrit, Roman transliteration and Hinglish, with English meanings beside each line and a saved chant counter.`,
    cardLine: entry.intentions.includes('strength') ? 'Strength & courage' : entry.intentions.includes('prosperity') ? 'Prosperity & devotion' : entry.intentions.includes('learning') ? 'Wisdom & learning' : entry.intentions.includes('beginnings') ? 'New beginnings' : 'Devotion & peace',
    imgAlt: profile.imgAlt || '',
    lines,
    meaning: { sa: entry.meaningHi, en: lines.map(l => l.englishMeaning).join(' '), hi: entry.meaningHinglish },
    sourceUrl,
    sourceNote: `${sourceNote} English meanings are paraphrases; punctuation and Devanagari spelling are normalized.`,
    benefits: [entry.tagline, 'Repeated recitation can be used as a practice of attention and devotion.'],
    howTo: ['Read each line together with its meaning before beginning.', 'Recite the complete prayer slowly, following the script you prefer.', 'Use the counter after each complete recitation. Choose a comfortable number of repetitions.'],
    bestTime: entry.bestTime || 'Any quiet moment you can set aside for attentive prayer. Browse the festival collection for associated occasions.',
    faqs: [
      faq,
      ['What does one count represent?', 'One count represents one complete recitation of the prayer displayed on this page. You can choose a short practice or count 108 repetitions.'],
    ],
    audio: `${entry.slug}.mp3`,
  });
}

for (const entry of PDF_MANTRAS) expand(entry, {
  sourceUrl: `${PDF_URL}#page=${entry.page}`,
  sourceNote: `Collection of Mantras, PDF page ${entry.page}, ${entry.section}. ${entry.note}`,
  faq: [`Where is ${entry.short} found in this collection?`, `It appears on PDF page ${entry.page} under ${entry.section}. ${entry.note}`],
});

for (const entry of POPULAR_MANTRAS) expand(entry, {
  sourceNote: entry.note,
  faq: [`Where does ${entry.short} come from?`, entry.note],
});
