import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteContent } from "@/components/SiteContent";
import { getPage, slugs } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");
const articlePath = "/benrus-watches-its-about-time/";
const articleUrl = `${siteUrl}${articlePath}`;
const benrusArticleTitle = "Benrus Watches at It’s About Time | Johns Creek, GA";
const benrusArticleDescription = "Explore the current Benrus collection in Johns Creek, GA. Compare the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief.";
const heroImage = `${siteUrl}/assets/articles/benrus-sky-chief.jpg`;

const benrusFaqs = [
  ["Do you carry the full Benrus lineup?", "Yes. Every model in the current Benrus collection is available through our Johns Creek showroom, including the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief."],
  ["Can I buy a Benrus if I don’t live near Johns Creek?", "Yes. We work with customers nationally. Call us at 770-442-9854 to ask about a specific model or to arrange a purchase."],
  ["What happens if my Benrus needs service later?", "We handle Benrus service on-site. Our watchmakers are WOSTEP- and Swiss-certified and work with Swiss ETA movements daily."],
  ["Are Benrus watches actually Swiss made?", "Yes. All current Benrus watches are designed, engineered, and manufactured in La Chaux-de-Fonds, Switzerland. They use Swiss ETA movements and carry the Swiss Made designation on the dial."],
  ["Which Benrus model is the best entry point?", "The DTU-2A/P at $990 USD is the most accessible model in the lineup and has the deepest historical connection, built to the same MIL-W-3818B military specification Benrus fulfilled in 1962."],
  ["Can I see the movement on any of these watches?", "The #3061 BU and Sky Chief have sapphire exhibition casebacks. The DTU-2A/P, Type 1 Mil Spec, and DTU Shield have solid casebacks consistent with their military-specification heritage."]
];

const benrusArticleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      headline: "It’s About Time Inc. Now Carries Benrus Watches",
      description: benrusArticleDescription,
      image: [
        heroImage,
        `${siteUrl}/assets/articles/benrus-dtu-2ap.jpg`,
        `${siteUrl}/assets/articles/benrus-type-1-mil-spec.jpg`,
        `${siteUrl}/assets/articles/benrus-dtu-shield.jpg`,
        `${siteUrl}/assets/articles/benrus-3061-bu.jpg`
      ],
      datePublished: "2026-05-27T00:00:00-04:00",
      dateModified: "2026-08-04T14:46:06+00:00",
      author: { "@type": "Organization", name: "It’s About Time Inc." },
      publisher: {
        "@type": "Organization",
        name: "It’s About Time Inc.",
        logo: { "@type": "ImageObject", url: `${siteUrl}/assets/logo.png` }
      },
      articleSection: "New Releases",
      keywords: ["Benrus watches", "Benrus retailer", "Benrus DTU-2A/P", "Benrus Sky Chief", "Johns Creek watches"],
      inLanguage: "en-US",
      url: articleUrl
    },
    {
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      mainEntity: benrusFaqs.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text }
      }))
    }
  ]
};

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "benrus-watches-its-about-time") {
    return {
      title: { absolute: benrusArticleTitle },
      description: benrusArticleDescription,
      keywords: ["Benrus watches", "Benrus retailer", "Benrus Sky Chief", "Benrus DTU-2A/P", "Johns Creek watches"],
      alternates: { canonical: articlePath },
      robots: { index: true, follow: true },
      openGraph: {
        type: "article",
        url: articlePath,
        siteName: "It’s About Time",
        title: benrusArticleTitle,
        description: benrusArticleDescription,
        publishedTime: "2026-05-27T00:00:00-04:00",
        modifiedTime: "2026-08-04T14:46:06+00:00",
        images: [{ url: "/assets/articles/benrus-sky-chief.jpg", width: 1200, height: 2055, alt: "Benrus Sky Chief chronograph at It’s About Time in Johns Creek" }]
      },
      twitter: {
        card: "summary_large_image",
        title: benrusArticleTitle,
        description: benrusArticleDescription,
        images: ["/assets/articles/benrus-sky-chief.jpg"]
      }
    };
  }

  const page = getPage(slug);
  return page ? { title: page.title } : { title: "Page Not Found" };
}

export default async function ConvertedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  if (slug === "benrus-watches-its-about-time") {
    return (
      <>
        <SiteContent title={page.title} html={page.html} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(benrusArticleSchema) }} />
      </>
    );
  }

  return <SiteContent title={page.title} html={page.html} />;
}
