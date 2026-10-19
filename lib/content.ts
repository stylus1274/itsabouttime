import pages from "@/data/pages.json";
import { sellWatchContent } from "./sell-watch-content";

export type PageKey = keyof typeof pages;
export const slugs = Object.keys(pages).filter((key) => key !== "home");

export function getPage(key: string) {
  const page = (pages as Record<string, { title: string; html: string; source: string }>)[key];
  return key === "sell-your-luxury-watch" && page
    ? { ...page, title: "Sell Your Luxury Watch in Atlanta", html: page.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => sellWatchContent) }
    : page;
}
