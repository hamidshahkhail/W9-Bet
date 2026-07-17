# W9 Bet Game (Next.js)

A fast, SEO-friendly site for W9 Bet Game APK information—**server-first** pages, minimal CSS, and optimized images.

## No Node? Use the static version

Open **`public/legacy/index.html`** in a browser, or:

```bash
cd public/legacy
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Run the Next.js app

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If the dev server shows 500 / missing chunk errors

Stop **all** `next dev` processes, then:

```bash
npm run dev:fresh
```

(Optional) use port 3000: `npm run dev -- --port 3000`

---

## Environment

Copy `.env.example` to `.env.local` and set:

- **`NEXT_PUBLIC_SITE_URL`** – your live origin (no trailing slash), e.g. `https://w9betgame.com.pk`  
  Used for **metadata base**, **sitemap**, and **robots**.

On **Vercel**, add the same variable under Project → Settings → Environment Variables for Production (and Preview if you want correct canonical URLs on preview deployments).

---

## Deploy (Vercel from GitHub)

1. Push this repo to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework: **Next.js** (auto-detected). Build: `npm run build`, Output: default.
4. Set **`NEXT_PUBLIC_SITE_URL`** to your production domain (e.g. `https://your-project.vercel.app` or your custom domain).
5. Deploy.

---

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server (file watcher uses polling to reduce `EMFILE` issues on macOS) |
| `npm run dev:fresh` | Deletes `.next` then starts dev (fixes corrupted dev cache) |
| `npm run build` | Production build |
| `npm start` | Run production server after `build` |
| `npm run lint` | ESLint (`next/core-web-vitals`) |

---

## Optimizations

- **`next/image`** for hero, header logo, and screenshot carousel (responsive `sizes`, LCP `priority` where needed).
- **`metadataBase`**, **Open Graph**, **viewport / theme-color**, **robots.txt** and **sitemap.xml** (App Router).
- **`poweredByHeader: false`**, **`compress: true`** in `next.config.js`.
- **ESLint** configured so `npm run lint` runs non-interactively.

---

## Project structure

- `app/` – App Router pages, `layout.tsx`, `globals.css`, `robots.txt/route.ts`, `sitemap.ts`, sitemap XML routes
- `components/` – `ScreenshotsCarousel.tsx` (client), `site/Header.tsx`, `site/Footer.tsx`
- `lib/site.ts` – canonical `SITE_URL`
- `public/images/` – WebP screenshots and branding assets
