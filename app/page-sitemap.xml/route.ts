import { articleDates, routes, siteUrl } from "../sitemap";

const xmlEscape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const pageRoutes = routes.filter((route) => !articleDates[route]);
  const body = pageRoutes.map((route) => `  <url>\n    <loc>${xmlEscape(`${siteUrl}${route}`)}</loc>\n    <lastmod>2026-08-25T00:00:00.000Z</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === "" ? "1.0" : "0.7"}</priority>\n  </url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
