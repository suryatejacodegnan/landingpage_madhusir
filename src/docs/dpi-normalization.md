## DPI/Zoom Normalization Guide

Purpose: Make the UI look consistent across devices with different OS scale factors and browser zoom levels by normalizing the root font-size.

What this solution includes

- Pure CSS media queries (dppx, dpi, -webkit DPR) to set :root font-size.
- Optional JS fallback using window.devicePixelRatio for environments where CSS media queries are unreliable.
- Integration points so it works out-of-the-box in React + Tailwind projects.

1. CSS (global) – add to a global CSS loaded after framework styles
   Place in a global stylesheet (e.g., src/Layout/Layout.css) that is imported after index.css.

```css
:root {
  font-size: 100%;
  --bg-size: auto;
}

/* DPI/Zoom normalization – cover dppx, dpi, and -webkit DPR */
@media (min-resolution: 1.1dppx),
  (min-resolution: 106dpi),
  (-webkit-min-device-pixel-ratio: 1.1) {
  :root {
    font-size: 90%;
  }
}
@media (min-resolution: 1.25dppx),
  (min-resolution: 120dpi),
  (-webkit-min-device-pixel-ratio: 1.25) {
  :root {
    font-size: 85%;
  }
}
@media (min-resolution: 1.33dppx),
  (min-resolution: 128dpi),
  (-webkit-min-device-pixel-ratio: 1.33) {
  :root {
    font-size: 85%;
  }
}
@media (min-resolution: 1.4dppx),
  (min-resolution: 134dpi),
  (-webkit-min-device-pixel-ratio: 1.4) {
  :root {
    font-size: 82.5%;
  }
}
@media (min-resolution: 1.5dppx),
  (min-resolution: 144dpi),
  (-webkit-min-device-pixel-ratio: 1.5) {
  :root {
    font-size: 70%;
  }
}
```

Notes

- Do NOT wrap these rules in Tailwind's @layer; keep them as plain CSS so ordering doesn't suppress them.
- Keep Tailwind @tailwind directives only in index.css.

2. JS fallback (optional) – normalize by devicePixelRatio
   Create src/utils/normalizeDPR.js:

```js
export function normalizeRootFontByDPR() {
  try {
    const dpr = window.devicePixelRatio || 1;
    let size = 100;
    if (dpr >= 1.5) size = 70;
    else if (dpr >= 1.4) size = 82.5;
    else if (dpr >= 1.33) size = 85;
    else if (dpr >= 1.25) size = 85;
    else if (dpr >= 1.1) size = 90;
    document.documentElement.style.fontSize = size + '%';
  } catch (_) {}
}

export function attachDPRResizeListener() {
  const handler = () => normalizeRootFontByDPR();
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}
```

3. Integration – call on app start
   In src/main.jsx:

```js
import {
  normalizeRootFontByDPR,
  attachDPRResizeListener,
} from './utils/normalizeDPR.js';

normalizeRootFontByDPR();
attachDPRResizeListener();
```

Tuning

- Adjust the percentage values per breakpoint to fit your design scale.
- If your design uses rem, this approach scales the whole app consistently.

Caveats

- Some browsers treat page zoom and OS scaling differently. Combining CSS media queries with the JS fallback covers most real-world cases.
- If a specific kiosk/device has custom zoom policies, consider locking zoom or overriding the thresholds for that profile.

Reuse checklist

- Import the global CSS file after your framework/base styles.
- Copy src/utils/normalizeDPR.js and wire calls in your app entry.
- Verify on devices set to 100%, 125%, 150% OS scaling and at 100% browser zoom.
