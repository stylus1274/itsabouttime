import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteContent } from "@/components/SiteContent";
import { getPage } from "@/lib/content";
import { buildFaqDetailHtml, faqEntries } from "@/lib/faq-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttimeinc.com").replace(/\/$/, "");

export async function generateStaticParams() {
  return faqEntries.filter((entry) => entry.status === "published").map((entry) => ({ faqSlug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ faqSlug: string }> }): Promise<Metadata> {
  const { faqSlug } = await params;
  const entry = faqEntries.find((item) => item.slug === faqSlug && item.status === "published");
  if (!entry) return { title: "FAQ Not Found" };
  return {
    title: { absolute: `${entry.question} | It’s About Time` },
    description: entry.shortAnswer.slice(0, 155),
    alternates: { canonical: `/faqs/${entry.slug}/` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: `/faqs/${entry.slug}/`,
      siteName: "It’s About Time",
      title: entry.question,
      description: entry.shortAnswer
    }
  };
}

export default async function FaqDetailPage({ params }: { params: Promise<{ faqSlug: string }> }) {
  const { faqSlug } = await params;
  const entry = faqEntries.find((item) => item.slug === faqSlug && item.status === "published");
  if (!entry) notFound();

  const shell = getPage("watch-services");
  if (!shell) notFound();
  const html = shell.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => buildFaqDetailHtml(entry));
  const pageUrl = `${siteUrl}/faqs/${entry.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        name: entry.question,
        mainEntity: [
          {
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: { "@type": "Answer", text: entry.shortAnswer }
          }
        ],
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "FAQs", item: `${siteUrl}/faqs/` },
          { "@type": "ListItem", position: 3, name: entry.question, item: pageUrl }
        ]
      }
    ]
  };

  return (
    <>
      <SiteContent title={entry.question} html={html} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
