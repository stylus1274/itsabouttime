import pages from "@/data/pages.json";

export type PageKey = keyof typeof pages;
export const slugs = Object.keys(pages).filter((key) => key !== "home");

export function getPage(key: string) {
  return (pages as Record<string, { title: string; html: string; source: string }>)[key];
}
