# Brand assets

Master logo artwork as supplied. These files are **not** served — they live
here so the originals stay versioned without shipping ~1 MB to every deploy.

| File | Use |
| --- | --- |
| `teras-logo-horizontal.png` | Horizontal lock-up, dark artwork (light backgrounds) |
| `teras-logo-horizontal-white.png` | Horizontal lock-up, white artwork (dark backgrounds) |
| `teras-logo-vertical.png` | Stacked lock-up, dark artwork |
| `teras-logo-vertical-white.png` | Stacked lock-up, white artwork |

In the site itself the logo is vector, traced from this artwork:

- `components/logo.tsx` — `<LogoMark />` (the "T" monogram) and
  `<LogoWordmark />` (the "TERAS" wordmark). Both paint in `currentColor`.
- `public/teras-logo.svg` — the horizontal lock-up as a single file, for
  places that need a URL (email signatures, third-party listings).
- `public/icon.svg`, `public/icon-*-32x32.png`, `public/apple-icon.png` —
  favicons: the monogram reversed out of a brand-navy tile.
