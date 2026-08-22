# IAT Watch Site — Next.js Conversion

This project converts the supplied static HTML archive into a **Next.js 16 App Router** website while preserving the supplied page content, styling, local assets, navigation, reveal animations, and live-chat behavior.

## Included routes

| Original HTML file | Next.js route |
| --- | --- |
| `index.html` | `/` |
| `watch-repairs.html` | `/watch-repairs` |
| `watch-sales.html` | `/watch-sales` |
| `our-workshop.html` | `/our-workshop` |
| `blog.html` | `/blog` |
| `benrus-legacy.html` | `/benrus-legacy` |
| `benrus-ultra-deep.html` | `/benrus-ultra-deep` |
| `bulova-repair.html` | `/bulova-repair` |
| `dial-refinishing-vs-replacement.html` | `/dial-refinishing-vs-replacement` |

The previous `.html` URLs are redirected to their corresponding Next.js routes.

## Run locally

```bash
pnpm install
pnpm dev
```

Then visit `http://localhost:3000`.

## Build for production

```bash
pnpm build
pnpm start
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router pages and route handling |
| `components/SiteContent.tsx` | Shared client-side rendering, reveal animation, and chat behavior |
| `data/pages.json` | Converted source HTML, normalized for Next.js routes and assets |
| `public/assets/` | The supplied image and logo assets |
| `next.config.ts` | Compatibility redirects from the former `.html` URLs |

The source markup is stored as page data so the conversion preserves the supplied visual design precisely. The shared interactive behavior has been moved into the reusable `SiteContent` React component.
