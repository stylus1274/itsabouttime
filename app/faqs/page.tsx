import type { Metadata } from "next";
import { SiteContent } from "@/components/SiteContent";
import { getPage } from "@/lib/content";
import { buildFaqHubHtml } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: { absolute: "Watch Repair & Ownership FAQs | It’s About Time" },
  description: "Get clear answers about watch repair, batteries, mechanical service, water resistance, bracelets, Rolex, Omega, vintage watches, and ownership.",
  alternates: { canonical: "/faqs/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/faqs/",
    siteName: "It’s About Time",
    title: "Watch Repair & Ownership FAQs | It’s About Time",
    description: "Browse practical watch repair and ownership answers from the It’s About Time team in Johns Creek."
  }
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttimeinc.com").replace(/\/$/, "");

export default function FaqHubPage() {
  const shell = getPage("watch-services");
  if (!shell) return null;
  const html = shell.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => buildFaqHubHtml());
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/faqs/#webpage`,
        url: `${siteUrl}/faqs/`,
        name: "Watch Repair & Ownership FAQs",
        description: "A categorized library of watch repair, service, care, and ownership questions from It’s About Time Inc.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/faqs/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "FAQs", item: `${siteUrl}/faqs/` }
        ]
      }
    ]
  };

  return (
    <>
      <SiteContent title="Watch Repair & Ownership FAQs" html={html} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
