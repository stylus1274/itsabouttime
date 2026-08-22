import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime.vercel.app";

const routes = [
  "",
  "/watch-repairs",
  "/watch-sales",
  "/our-workshop",
  "/blog",
  "/benrus-legacy",
  "/benrus-ultra-deep",
  "/bulova-repair",
  "/dial-refinishing-vs-replacement",
  "/benrus-watches-its-about-time"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: route === "/benrus-watches-its-about-time" ? new Date("2026-05-27") : new Date(),
    changeFrequency: route === "/benrus-watches-its-about-time" ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/benrus-watches-its-about-time" ? 0.8 : 0.7
  }));
}
