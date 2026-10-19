import pages from "@/data/pages.json";
import { sellWatchContent } from "./sell-watch-content";
import { updateWatchValueArticle } from "./watch-value-content";

export type PageKey = keyof typeof pages;
export const slugs = Object.keys(pages).filter((key) => key !== "home");

export function getPage(key: string) {
  const page = (pages as Record<string, { title: string; html: string; source: string }>)[key];
  if (key === "luxury-watch-repair-preserving-value" && page) {
    return { ...page, html: updateWatchValueArticle(page.html) };
  }
  return key === "sell-your-luxury-watch" && page
    ? { ...page, title: "Sell Your Luxury Watch in Atlanta", html: page.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => sellWatchContent) }
    : page;
}
