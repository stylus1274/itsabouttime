import { SiteContent } from "@/components/SiteContent";
import { getPage } from "@/lib/content";
import { strengthenAtlantaRepairInternalLinks } from "@/lib/seo-fallback";

export default function HomePage() {
  const page = getPage("home");
  return <SiteContent title={page.title} html={strengthenAtlantaRepairInternalLinks("home", page.html)} />;
}
