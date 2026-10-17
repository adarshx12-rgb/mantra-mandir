"""Create delivery-size WebP copies; never modify owner-supplied originals."""
from pathlib import Path
from io import BytesIO
from PIL import Image, ImageOps

out = Path('assets/art')
out.mkdir(parents=True, exist_ok=True)
for deity in ('ganesha', 'gayatri', 'shiv', 'krishna', 'saraswati'):
    for variant, bounds in (('web', (1600, 1000)), ('mob', (760, 1344))):
        source = Path('images') / f'{deity}_{variant}.png'
        im = ImageOps.contain(Image.open(source).convert('RGB'), bounds)
        for quality in range(84, 19, -4):
            buf = BytesIO()
            im.save(buf, format='WEBP', quality=quality, method=6)
            if buf.tell() <= 80000:
                break
        if buf.tell() > 80000:
            raise RuntimeError(f'{source} exceeds the image budget')
        target = out / f'{deity}_{variant}.webp'
        target.write_bytes(buf.getvalue())
        print(f'{target}: {buf.tell():,} bytes, quality {quality}')
