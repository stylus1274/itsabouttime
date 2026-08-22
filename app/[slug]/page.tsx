import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteContent } from "@/components/SiteContent";
import { getPage, slugs } from "@/lib/content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");

type Faq = readonly [name: string, answer: string];
type ArticleSeo = {
  title: string;
  headline: string;
  description: string;
  path: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  publishedTime: string;
  modifiedTime: string;
  section: string;
  keywords: string[];
  faqs: readonly Faq[];
};

const articleSeo: Record<string, ArticleSeo> = {
  "benrus-watches-its-about-time": {
    title: "Benrus Watches at It’s About Time | Johns Creek, GA",
    headline: "It’s About Time Inc. Now Carries Benrus Watches",
    description: "Explore the current Benrus collection in Johns Creek, GA. Compare the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief.",
    path: "/benrus-watches-its-about-time/",
    image: "/assets/articles/benrus-sky-chief.jpg",
    imageWidth: 1200,
    imageHeight: 2055,
    imageAlt: "Benrus Sky Chief chronograph at It’s About Time in Johns Creek",
    publishedTime: "2026-05-27T00:00:00-04:00",
    modifiedTime: "2026-08-04T14:46:06+00:00",
    section: "New Releases",
    keywords: ["Benrus watches", "Benrus retailer", "Benrus DTU-2A/P", "Benrus Sky Chief", "Johns Creek watches"],
    faqs: [
      ["Do you carry the full Benrus lineup?", "Yes. Every model in the current Benrus collection is available through our Johns Creek showroom, including the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief."],
      ["Can I buy a Benrus if I don’t live near Johns Creek?", "Yes. We work with customers nationally. Call us at 770-442-9854 to ask about a specific model or to arrange a purchase."],
      ["What happens if my Benrus needs service later?", "We handle Benrus service on-site. Our watchmakers are WOSTEP- and Swiss-certified and work with Swiss ETA movements daily."],
      ["Are Benrus watches actually Swiss made?", "Yes. All current Benrus watches are designed, engineered, and manufactured in La Chaux-de-Fonds, Switzerland. They use Swiss ETA movements and carry the Swiss Made designation on the dial."],
      ["Which Benrus model is the best entry point?", "The DTU-2A/P at $990 USD is the most accessible model in the lineup and has the deepest historical connection, built to the same MIL-W-3818B military specification Benrus fulfilled in 1962."],
      ["Can I see the movement on any of these watches?", "The #3061 BU and Sky Chief have sapphire exhibition casebacks. The DTU-2A/P, Type 1 Mil Spec, and DTU Shield have solid casebacks consistent with their military-specification heritage."]
    ]
  },
  "what-happens-inside-watch-dial-comes-off": {
    title: "What Happens When a Watch Dial Is Removed | IAT",
    headline: "What Happens Inside a Watch When the Dial Comes Off",
    description: "See what a watchmaker finds beneath a dial, why dial removal matters during service, and how proper tools protect the movement.",
    path: "/what-happens-inside-watch-dial-comes-off/",
    image: "/assets/articles/dial-removal-watch-movement.png",
    imageWidth: 1448,
    imageHeight: 1086,
    imageAlt: "Watch movement with the dial removed and motion works exposed",
    publishedTime: "2026-07-15T00:00:00-04:00",
    modifiedTime: "2026-08-04T13:10:09+00:00",
    section: "Watch Repair",
    keywords: ["watch dial removal", "watch movement service", "dial feet", "watch repair Johns Creek", "watch dial repair"],
    faqs: [
      ["Is removing a watch dial risky?", "Dial removal carries real risk when done improperly because it exposes the movement to dust, moisture, and physical contact. A trained watchmaker with proper tools in a clean environment minimizes those risks significantly."],
      ["Can I remove my own watch dial at home?", "It is technically possible on some watches, but not recommended. Without a controlled environment, hand-removal tools, and dial protectors, the risk of scratching the dial, bending hands, or introducing dust into the movement is high."],
      ["How do I know if my watch was reassembled correctly after service?", "At 12:00, all hands should point straight up without odd overlap. Advance the time through a full cycle and check for catching or dragging, then monitor timekeeping over the first several days."],
      ["Does a battery replacement require dial removal?", "No. A standard battery replacement accesses the movement from the case-back side and does not require removing the dial or hands. If a shop says dial removal is needed for a battery swap, there may be a separate issue to diagnose."],
      ["What is the difference between dial feet and dial screws?", "Dial feet are small metal pins on the back of the dial that fit into holes on the movement’s main plate. Dial screws, or sometimes a sliding lever, hold those feet in place and keep the dial precisely positioned."],
      ["Why does my watch keep stopping months after a service?", "Intermittent stopping after service can have several causes. One common one is dust contamination introduced while the dial or case back was open. Even a single fiber or particle can interfere with a gear tooth or balance-wheel pivot."]
    ]
  }
};

function makeArticleSchema(article: ArticleSeo) {
  const articleUrl = `${siteUrl}${article.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        headline: article.headline,
        description: article.description,
        image: [`${siteUrl}${article.image}`],
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime,
        author: { "@type": "Organization", name: "It’s About Time Inc." },
        publisher: {
          "@type": "Organization",
          name: "It’s About Time Inc.",
          logo: { "@type": "ImageObject", url: `${siteUrl}/assets/logo.png` }
        },
        articleSection: article.section,
        keywords: article.keywords,
        inLanguage: "en-US",
        url: articleUrl
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: article.faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      }
    ]
  };
}

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleSeo[slug];
  if (article) {
    return {
      title: { absolute: article.title },
      description: article.description,
      keywords: article.keywords,
      alternates: { canonical: article.path },
      robots: { index: true, follow: true },
      openGraph: {
        type: "article",
        url: article.path,
        siteName: "It’s About Time",
        title: article.title,
        description: article.description,
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        images: [{ url: article.image, width: article.imageWidth, height: article.imageHeight, alt: article.imageAlt }]
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        images: [article.image]
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
  const article = articleSeo[slug];

  return (
    <>
      <SiteContent title={page.title} html={page.html} />
      {article && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeArticleSchema(article)) }} />}
    </>
  );
}
