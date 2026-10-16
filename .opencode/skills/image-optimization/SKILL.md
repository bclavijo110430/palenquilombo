---
name: image-optimization
description: Convert JPEG/PNG photographs and artwork to optimized WebP for this site using ImageMagick (magick), pick sizes/quality, name files, and consume them with astro:assets. Use when adding photos, logos, posters, or Open Graph images to the Palenquilombo landing page.
license: MIT
metadata:
  author: palenquilombo
  version: '1.0'
---

# Image optimization (WebP)

Goal: keep the site fast for photos and artwork. All raster images shipped to the
browser are **WebP**, served responsively through `astro:assets`.

Tooling available in this environment:
- `magick` / `convert` (ImageMagick, WebP enabled) — for converting assets.
- `ffmpeg` — for extracting video poster frames.
- `sharp` — installed as a dependency; Astro uses it to re-encode responsive sizes.

## Where files go

- Source art destined for `<Image>` / `<Picture>`: `src/assets/photos/`.
- Static files that must keep an exact name/URL (favicons, OG image, video posters,
  video files): `public/`.
- Keep the untouched originals in `fotos/` — never overwrite them.

## Conversion recipes

Photos (camera / WhatsApp images), cap long edge at 1600px, quality 82:

```bash
magick "fotos/INPUT.jpeg" -auto-orient -resize '1600x1600>' -strip -quality 82 src/assets/photos/NAME.webp
```

Artwork (logo, poster, shirt mockup) — higher quality, no aggressive resize:

```bash
magick "fotos/ART.jpeg" -auto-orient -resize '1600x1600>' -strip -quality 88 src/assets/photos/NAME.webp
```

Circular brand badge (200px, transparent corners):

```bash
magick "src/assets/photos/logo.webp" -crop 900x900+62+120 +repage -resize 200x200 \
  \( +clone -alpha extract -draw 'fill black polygon 0,0 0,200 200,200 200,0 fill white circle 100,100 100,0' \
     \( +clone -flip \) -compose Multiply -composite \( +clone -flop \) -compose Multiply -composite \) \
  -alpha off -compose CopyOpacity -composite public/logo-badge.png
```

Favicons / app icons from the logo:

```bash
magick src/assets/photos/logo.webp -resize 96x96  -gravity center -background none      -extent 96x96  public/favicon-96.png
magick src/assets/photos/logo.webp -resize 180x180 -gravity center -background '#17130f' -extent 180x180 public/apple-touch-icon.png
```

Open Graph image (1200x630, centered crop):

```bash
magick src/assets/photos/poster.webp -resize '1200x630^' -gravity center -extent 1200x630 -strip -quality 84 public/og-default.webp
```

Video poster frame (WebP):

```bash
ffmpeg -y -ss 2 -i public/videos/showcase-01.mp4 -frames:v 1 \
  -vf "scale='min(1280,iw)':-2" -quality 80 public/videos/showcase-01-poster.webp
```

## Consuming in Astro

Every image shown in the page should use `astro:assets` so Astro generates a
responsive `srcset` and correct intrinsic dimensions:

```astro
---
import { Image } from 'astro:assets';
import photo from '../assets/photos/entreno-01.webp';
---
<Image src={photo} alt="…" widths={[360, 640, 900]} sizes="(min-width: 900px) 30vw, 92vw" loading="lazy" />
```

Rules:
- Always provide meaningful `alt` (empty `alt=""` only for decorative images).
- `loading="lazy"` everywhere except the hero image (use `loading="eager"` +
  `fetchpriority="high"`).
- Prefer `widths` + `sizes` over a single fixed width for full-bleed or grid media.
- Naming: `entreno-01.webp`, `logo.webp`, `poster.webp`, `camiseta.webp`,
  `og-default.webp`, `showcase-0N-poster.webp` — lowercase, hyphenated, numbered.

## Verify

After adding/replacing assets run `pnpm build` and confirm the image step finishes
with no `MissingSharp` warnings and that generated sizes are reasonably small.
