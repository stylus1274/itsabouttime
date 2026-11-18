import pages from "@/data/pages.json";
import { citizenBatterySlug, makeCitizenBatteryPage, addCitizenBatteryBlogFeature, connectCitizenBatteryArticle } from "./citizen-eco-drive-content";
import { refreshGshockRepair, connectGshockTroubleshooting } from "./gshock-repair-refresh";
import { refreshLuminoxRepair, addLuminoxRepairLinks } from "./luminox-repair-refresh";
import { sellWatchContent } from "./sell-watch-content";
import { updateWatchValueArticle } from "./watch-value-content";
import { addCrystalServiceLinks } from "./crystal-internal-links";
import { refreshVintageRepairArticle } from "./vintage-repair-refresh";
import { addInheritedWatchBlogFeature, inheritedWatchSlug, makeInheritedWatchPage } from "./inherited-watch-content";

export type PageKey = keyof typeof pages;
export const slugs = [...Object.keys(pages).filter((key) => key !== "home"), inheritedWatchSlug, citizenBatterySlug];

export function getPage(key: string) {
  if (key === citizenBatterySlug) return makeCitizenBatteryPage(pages["expert-luxury-watch-repair-and-restoration-for-vintage-timepieces"].html);
  if (key === inheritedWatchSlug) return makeInheritedWatchPage(pages["expert-luxury-watch-repair-and-restoration-for-vintage-timepieces"].html);
  const page = (pages as Record<string, { title: string; html: string; source: string }>)[key];
  if (key === "g-shock-watch-repair" && page) return { ...page, html: refreshGshockRepair(page.html) };
  if (key === "g-shock-watch-repair-common-problems-fixes" && page) return { ...page, html: connectGshockTroubleshooting(page.html) };
  if (key === "luminox-watch-repair" && page) return { ...page, html: refreshLuminoxRepair(page.html) };
  if (key === "blog" && page) return { ...page, html: addCitizenBatteryBlogFeature(addInheritedWatchBlogFeature(page.html)) };
  if (key.startsWith("citizen-watches-repair-") || key === "why-citizen-eco-drive-watches-are-the-perfect-everyday-timepiece") {
    if (page) return { ...page, html: connectCitizenBatteryArticle(key, page.html) };
  }
  if (key === "expert-luxury-watch-repair-and-restoration-for-vintage-timepieces" && page) {
    return { ...page, html: refreshVintageRepairArticle(page.html) };
  }
  if (key === "luxury-watch-repair-preserving-value" && page) {
    return { ...page, html: updateWatchValueArticle(page.html) };
  }
  return key === "sell-your-luxury-watch" && page
    ? { ...page, title: "Sell Your Luxury Watch in Atlanta", html: page.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => sellWatchContent) }
    : page ? { ...page, html: addLuminoxRepairLinks(key, addCrystalServiceLinks(key, page.html)) } : page;
}
