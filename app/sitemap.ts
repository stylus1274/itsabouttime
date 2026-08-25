import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");

const articleDates: Record<string, string> = {
  "/benrus-legacy/": "2026-08-25T00:00:00+00:00",
  "/benrus-ultra-deep/": "2026-08-25T00:00:00+00:00",
  "/bulova-repair/": "2026-08-25T00:00:00+00:00",
  "/benrus-dtu-2a-watch-review/": "2026-08-03T20:56:01+00:00",
  "/best-field-watches-everyday-wear/": "2026-08-03T20:55:21+00:00",
  "/best-seiko-watches-to-buy/": "2026-08-03T20:56:15+00:00",
  "/benrus-watches-its-about-time/": "2026-08-04T14:46:06+00:00",
  "/what-happens-inside-watch-dial-comes-off/": "2026-08-04T13:10:09+00:00",
  "/dial-refinishing-vs-dial-replacement/": "2026-08-04T13:06:41+00:00",
  "/best-38mm-watches/": "2026-08-03T22:13:26+00:00",
  "/distinctive-features-that-make-the-benrus-sky-chief-a-collectible/": "2026-08-25T00:00:00+00:00"
};

const defaultLastModified = new Date("2026-08-25T00:00:00+00:00");

const routes = [
  "",
  "/watch-repairs/",
  "/watch-sales/",
  "/our-workshop/",
  "/blog/",
  "/benrus-legacy/",
  "/benrus-ultra-deep/",
  "/bulova-repair/",
  "/dial-refinishing-vs-dial-replacement/",
  "/benrus-watches-its-about-time/",
  "/what-happens-inside-watch-dial-comes-off/",
  "/best-38mm-watches/",
  "/benrus-dtu-2a-watch-review/",
  "/best-field-watches-everyday-wear/",
  "/best-seiko-watches-to-buy/",
  "/distinctive-features-that-make-the-benrus-sky-chief-a-collectible/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(articleDates[route] ?? defaultLastModified),
    changeFrequency: articleDates[route] ? "monthly" : "weekly",
    priority: route === "" ? 1 : articleDates[route] ? 0.8 : 0.7
  }));
}
