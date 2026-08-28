import { siteUrl } from "../sitemap";

export function GET() {
  const updated = "2026-08-25T00:00:00.000Z";
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${siteUrl}/post-sitemap.xml</loc>\n    <lastmod>${updated}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${siteUrl}/page-sitemap.xml</loc>\n    <lastmod>${updated}</lastmod>\n  </sitemap>\n</sitemapindex>\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
