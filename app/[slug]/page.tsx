import { notFound } from "next/navigation";
import { SiteContent } from "@/components/SiteContent";
import { getPage, slugs } from "@/lib/content";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ConvertedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <SiteContent title={page.title} html={page.html} />;
}
