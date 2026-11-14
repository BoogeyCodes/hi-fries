# Hi Fries — More Than Fries

A fully responsive restaurant website for **Hi Fries** (Parkview City, Lahore),
built with **React + Vite + Tailwind CSS**. Bold black & orange grunge identity,
professional food photography, animated hero, and a full ordering flow.

## Features

- Animated hero with floating food shot + price badge
- Scrolling deals marquee
- 4 combo deals (image cards) with add-to-cart
- Full menu with photo banners per category (Burgers, Pizza, Sandwiches, Pasta,
  Wraps, Fried Feast, Fries), live search + category filter
- Order cart with **WhatsApp checkout** (persists in localStorage)
- Item customization: add-ons (make-it-a-meal, extra cheese/sauce, fries, drink)
  + special instructions + quantity
- Scroll-reveal animations, back-to-top
- All content centralised in `src/data/menu.js`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Railway (Docker)
Connected to GitHub → **New Project → Deploy from GitHub repo → `hi-fries`**.
Railway auto-detects the `Dockerfile` (Vite build → static serve on `$PORT`).

### GitHub Pages sub-path
If deploying under `https://<user>.github.io/hi-fries/`, build with
`VITE_BASE_PATH=/hi-fries/ npm run build`.

## Editing content

Everything — items, prices, deals, add-ons, contact info — lives in
`src/data/menu.js`. Food images are in `public/images/food/` (professional stock
placeholders; swap for Hi Fries' own photos anytime, same filenames).

> Note: Pizza & Fries sections are placeholders pending the real menu/prices.
