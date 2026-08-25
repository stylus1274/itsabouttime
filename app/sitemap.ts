import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");

const articleDates: Record<string, string> = {
  "/benrus-legacy/": "2026-08-25T00:00:00+00:00",
  "/benrus-ultra-deep/": "2026-08-25T00:00:00+00:00",
  "/bulova-repair/": "2026-08-25T00:00:00+00:00",
  "/spot-fake-luxury-watch/": "2026-08-03T20:53:21+00:00",
  "/the-difference-between-entry-level-and-high-end-luxury-watches/": "2026-08-03T20:52:40+00:00",
  "/hamilton-watch-repair/": "2026-07-07T17:37:30+00:00",
  "/watch-battery-replacement-in-atlanta/": "2026-04-08T17:36:57+00:00",
  "/vintage-watch-crystal-replacement-value/": "2026-03-26T19:14:01+00:00",
  "/why-taking-rolex-to-unauthorized-jeweler-costs-more/": "2026-08-03T20:54:41+00:00",
  "/watch-pressure-test/": "2026-08-03T20:54:29+00:00",
  "/how-to-ship-watch-for-repair/": "2026-08-03T20:53:59+00:00",
  "/foggy-watch-face-causes/": "2026-08-03T20:53:48+00:00",
  "/top-10-luxury-watch-brands-2026/": "2026-08-03T20:53:36+00:00",
  "/10-luxury-dive-watches-everyday-wear/": "2026-08-03T20:55:06+00:00",
  "/cartier-watch-battery-replacement/": "2026-08-03T20:54:53+00:00",
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
  "/spot-fake-luxury-watch/",
  "/the-difference-between-entry-level-and-high-end-luxury-watches/",
  "/hamilton-watch-repair/",
  "/watch-battery-replacement-in-atlanta/",
  "/vintage-watch-crystal-replacement-value/",
  "/why-taking-rolex-to-unauthorized-jeweler-costs-more/",
  "/watch-pressure-test/",
  "/how-to-ship-watch-for-repair/",
  "/foggy-watch-face-causes/",
  "/top-10-luxury-watch-brands-2026/",
  "/10-luxury-dive-watches-everyday-wear/",
  "/cartier-watch-battery-replacement/",
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
