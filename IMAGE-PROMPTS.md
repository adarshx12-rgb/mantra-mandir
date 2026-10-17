# Deity artwork prompts (Higgsfield)

For the six deities still using the symbolic Om background. Each prompt is complete: paste it as-is.

## Settings
- Model: **GPT Image 2.5** · Resolution: **2k**
- `_web` prompts: aspect **16:9** · `_mob` prompts: aspect **9:16**
- Attach the listed reference image from `images/` so the brushwork and lighting match the existing art.

Save results in `images/` as `<name>_web.png` and `<name>_mob.png` (names: durga, lakshmi, hanuman, kali, ayyappa, murugan). Then add the names to `scripts/prepare-art.py`, set `art:` in the deity profiles in `data/mantras.mjs`, update the art count in `scripts/check-output.py`, and run `python scripts/prepare-art.py` and `node build.mjs`.

Check iconography before using: Durga's ten arms, Ayyappa's knee band, Murugan's vel, hands and weapons.

## Durga (reference: ganesha_web.png / ganesha_mob.png)

durga_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Durga with ten graceful arms seated calmly on a great golden-maned lion, placed in the right half of the frame. Red silk sari with heavy gold zari border, tall ornate golden crown, third eye, gentle compassionate face, one hand raised in blessing; the other hands hold a trishul, chakra, conch, sword, bow, lotus and mace. A dim stone temple hall at night with rows of small brass diyas and marigold garlands; incense smoke drifts through a single warm shaft of candlelight that catches the gold. The left side of the frame fades into deep wine-red shadow and soft mist, calm and open for a heading. Palette: deep crimson, wine, burnished gold, warm amber. Rich detail, serene and reverent, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

durga_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Durga with ten graceful arms seated calmly on a great golden-maned lion, full figure centred in the middle of a tall vertical frame. Red silk sari with heavy gold zari border, tall ornate golden crown, third eye, gentle compassionate face, one hand raised in blessing; the other hands hold a trishul, chakra, conch, sword, bow, lotus and mace. Above her, the upper fifth is soft dark temple ceiling with drifting incense; below, the lower third is a dark stone floor with faint glowing brass diyas and scattered marigolds, calm and open for text. Palette: deep crimson, wine, burnished gold, warm candlelight. Rich detail, serene and reverent, a pure painted image whose edges dissolve into darkness.
```

## Lakshmi (reference: ganesha_web.png / ganesha_mob.png)

lakshmi_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Lakshmi with four arms seated gracefully on a large open pink lotus floating on still dark water, placed in the right half of the frame. Red and gold silk sari, layered golden jewellery and crown, serene gentle smile; two hands hold pink lotuses, one is raised in blessing, one lets a soft stream of gold coins fall glinting into the water. Behind her in the misty night, two white elephants raise their trunks. Floating clay diyas scatter warm reflections across the water. The left side of the frame is calm dark water and plum mist, open for a heading. Palette: deep plum, dusky rose, soft pink lotus, rich gold, night-blue water. Rich detail, serene and auspicious, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

lakshmi_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Lakshmi with four arms seated gracefully on a large open pink lotus on still dark water, full figure centred in the middle of a tall vertical frame. Red and gold silk sari, layered golden jewellery and crown, serene gentle smile; two hands hold pink lotuses, one is raised in blessing, one lets a soft stream of gold coins fall into the water. Two white elephants rise faintly in the mist behind her. The upper fifth is dark plum night sky with soft haze; the lower third is calm dark water with a few floating diyas and their reflections, open for text. Palette: deep plum, dusky rose, pink lotus, rich gold. Rich detail, serene and auspicious, a pure painted image whose edges dissolve into darkness.
```

## Hanuman (reference: gayatri_web.png / gayatri_mob.png)

hanuman_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Hanuman seated in quiet devotion on a rocky mountain ledge at first light, placed in the right half of the frame. Strong calm form with a saffron-orange complexion, ornate golden crown, earrings and armlets, red cloth at the waist, hands folded in namaskar, eyes gently lowered in prayer; a heavy golden gada rests against his shoulder. Behind him, layers of misty mountain ridges recede into a pale saffron sunrise glow that rims his figure with warm light. The left side of the frame is dark rock and drifting smoky-blue mist, calm and open for a heading. Palette: burnt orange, saffron, ember gold, dark slate rock, smoky blue. Rich detail, steadfast and devoted, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

hanuman_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Hanuman seated in quiet devotion on a rocky mountain ledge at first light, full figure centred in the middle of a tall vertical frame. Strong calm form with a saffron-orange complexion, ornate golden crown and armlets, red cloth at the waist, hands folded in namaskar, eyes gently lowered; a heavy golden gada rests against his shoulder. A pale saffron sunrise glows behind him and rims his figure with warm light. The upper fifth is dim dawn sky with soft haze; the lower third is dark rock falling away into smoky-blue mist, open for text. Palette: burnt orange, saffron, ember gold, slate, smoky blue. Rich detail, steadfast and devoted, a pure painted image whose edges dissolve into darkness.
```

## Kali (reference: shiv_web.png / shiv_mob.png)

kali_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Kali standing tall in a dark forest clearing at night under a new-moon sky, placed in the right half of the frame. Deep blue-black skin, four arms, long wild black hair streaming in the wind, three eyes, an intense yet protective and motherly expression. One hand holds a curved golden-hilted sword; the others show the blessing and fearlessness mudras. A garland of red hibiscus flowers, golden ornaments and a crown. Small fires and oil lamps glow among the trees, casting ember-red light on her figure. The left side of the frame is dark forest and deep midnight mist, calm and open for a heading. Palette: midnight blue-black, deep crimson, ember red, touches of gold. Rich detail, powerful and reverent, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

kali_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Goddess Kali standing tall in a dark forest clearing at night, full figure centred in the middle of a tall vertical frame. Deep blue-black skin, four arms, long wild black hair streaming upward, three eyes, an intense yet protective and motherly expression. One hand holds a curved golden-hilted sword; the others show the blessing and fearlessness mudras. A garland of red hibiscus flowers, golden ornaments and crown. The upper fifth is a dark starry new-moon sky; the lower third is dark forest ground with small glowing lamps and ember light, open for text. Palette: midnight blue-black, deep crimson, ember red, gold. Rich detail, powerful and reverent, a pure painted image whose edges dissolve into darkness.
```

## Ayyappa (reference: shiv_web.png / shiv_mob.png)
Composition: Manikandan riding the tiger through a moonlit forest, a dynamic diagonal in place of the earlier seated shrine scene.

ayyappa_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Ayyappa as the young prince Manikandan, calm and fearless, riding a great striped tiger that strides out of a dense moonlit forest of the Western Ghats, placed in the right half of the frame and moving towards the viewer on a gentle diagonal. Dark skin, serene face, golden crown, earrings and armlets, a saffron cloth at the waist, a bow resting across his back, one hand raised in blessing. Moonlight breaks through tall trees and silvers the tiger's fur, while a warm golden glow surrounds Ayyappa. Ferns and mist swirl at the tiger's paws. The left side of the frame is deep forest shadow and drifting blue mist, calm and open for a heading. Palette: deep saffron and gold on the figure, tiger amber, moonlit silver, dark forest green, indigo night. Rich detail, majestic and serene, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

ayyappa_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Ayyappa as the young prince Manikandan, calm and fearless, riding a great striped tiger that strides out of a dense moonlit forest straight towards the viewer, full figures centred in the middle of a tall vertical frame. Dark skin, serene face, golden crown and armlets, a saffron cloth at the waist, a bow across his back, one hand raised in blessing. A warm golden glow surrounds Ayyappa while moonlight silvers the tiger's fur. The upper fifth is tall dark tree trunks and a glimpse of moonlit sky; the lower third is misty forest floor with ferns, open for text. Palette: saffron and gold, tiger amber, moonlit silver, dark forest green. Rich detail, majestic and serene, a pure painted image whose edges dissolve into darkness.
```

## Murugan (reference: saraswati_web.png / saraswati_mob.png)
Composition: Murugan seated on his peacock on the shore at Tiruchendur at dawn, sea and temple behind, in place of the earlier standing hilltop scene.

murugan_web (16:9)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Murugan as a radiant young god seated gracefully on his great peacock, whose long tail sweeps out behind him in deep teal, green and gold eyes, placed in the right half of the frame. Gentle smile, golden crown and ornaments, red and gold silk dhoti, his tall golden vel with a leaf-shaped blade held upright beside him, the other hand raised in blessing. They rest on dark rocks at the edge of the sea at dawn; soft waves break below, and the gopuram of the Tiruchendur shore temple rises in the misty distance as the first sunlight touches the horizon and rims his figure in gold. The left side of the frame is calm teal sea and dawn haze, open for a heading. Palette: deep teal, peacock green, sea blue, red and gold accents, soft dawn light. Rich detail, youthful and serene, cinematic landscape composition, a pure painted image whose edges dissolve into darkness.
```

murugan_mob (9:16)
```
Match the painting style, lighting and texture of the reference image, with a new subject. Dark devotional oil painting on canvas, old-master chiaroscuro, visible painterly brushwork. Lord Murugan as a radiant young god seated gracefully on his great peacock, its long tail falling in a teal, green and gold cascade below him, centred in the middle of a tall vertical frame. Gentle smile, golden crown and ornaments, red and gold silk dhoti, his tall golden vel with a leaf-shaped blade held upright, the other hand raised in blessing. The upper fifth is pale dawn sky with the distant gopuram of the Tiruchendur shore temple; the lower third is dark rocks and soft breaking waves fading into teal mist, open for text. Palette: deep teal, peacock green, sea blue, red and gold, dawn light. Rich detail, youthful and serene, a pure painted image whose edges dissolve into darkness.
```
