import { articleDates, routes, siteUrl } from "../sitemap";

const xmlEscape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const articleRoutes = routes.filter((route) => Boolean(articleDates[route]));
  const body = articleRoutes.map((route) => `  <url>\n    <loc>${xmlEscape(`${siteUrl}${route}`)}</loc>\n    <lastmod>${new Date(articleDates[route]).toISOString()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
