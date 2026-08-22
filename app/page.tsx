import { SiteContent } from "@/components/SiteContent";
import { getPage } from "@/lib/content";

export default function HomePage() {
  const page = getPage("home");
  return <SiteContent title={page.title} html={page.html} />;
}
