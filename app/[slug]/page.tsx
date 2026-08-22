import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BenrusArticle } from "@/components/BenrusArticle";
import { SiteContent } from "@/components/SiteContent";
import { getPage, slugs } from "@/lib/content";

const articleSlugs = ["benrus-watches-its-about-time"];
const benrusArticleTitle = "It’s About Time Inc. Now Carries Benrus Watches";
const benrusArticleDescription = "Discover the current Benrus watch collection, including the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief, available in Johns Creek.";

export function generateStaticParams() {
  return [...slugs, ...articleSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "benrus-watches-its-about-time") {
    return { title: benrusArticleTitle, description: benrusArticleDescription };
  }

  const page = getPage(slug);
  return page ? { title: page.title } : { title: "Page Not Found" };
}

export default async function ConvertedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "benrus-watches-its-about-time") return <BenrusArticle />;

  const page = getPage(slug);
  if (!page) notFound();
  return <SiteContent title={page.title} html={page.html} />;
}
