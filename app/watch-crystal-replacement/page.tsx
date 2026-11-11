import type { Metadata } from "next";
import { SiteContent } from "@/components/SiteContent";
import { getPage } from "@/lib/content";
import { watchCrystalContent } from "@/lib/watch-crystal-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttimeinc.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Watch Crystal Replacement Johns Creek, GA",
  description: "Replace cracked, scratched, or damaged watch crystals in Johns Creek. Sapphire, mineral, and acrylic crystal service available.",
  alternates: { canonical: "/watch-crystal-replacement/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Watch Crystal Replacement in Johns Creek, GA",
    description: "Professional sapphire, mineral, and acrylic watch crystal replacement from a Johns Creek watch repair workshop.",
    url: "/watch-crystal-replacement/",
    type: "website",
    images: [
      {
        url: "/assets/articles/source-hero-understanding-dial-crown-and-crystal-repairs.jpg",
        alt: "Watch undergoing professional crystal and case repair"
      }
    ]
  }
};

const faqItems = [
  {
    question: "Can a scratched sapphire watch crystal be repaired?",
    answer: "A true scratch in sapphire is difficult to remove safely and often makes replacement the more practical option. The exact recommendation depends on the depth of the damage, the watch, and the crystal construction."
  },
  {
    question: "How much does watch crystal replacement cost?",
    answer: "Watch crystal replacement cost depends on the crystal material, watch brand, case construction, parts availability, and sealing requirements. The watch should be inspected before an accurate estimate is given."
  },
  {
    question: "Can you replace a cracked watch crystal?",
    answer: "Yes, cracked watch crystals can often be replaced when the correct part is available and the surrounding case can support a proper fit. The watch should also be checked for damage caused by the impact or by moisture entering through the crack."
  },
  {
    question: "How long does watch crystal replacement take?",
    answer: "Turnaround time depends on the watch and whether the correct crystal is already available. Brand-specific, vintage, or unusual crystals may require additional sourcing time."
  },
  {
    question: "Does a new crystal restore water resistance?",
    answer: "No, a new crystal does not automatically restore the watch's original water resistance. The sealing system needs to be assembled correctly and tested when water resistance is an important part of the watch's use."
  },
  {
    question: "Can you replace crystals on vintage watches?",
    answer: "Yes, vintage watch crystals can often be replaced, but originality and period-correct fit should be considered first. The safest choice depends on the watch's age, condition, material, collector value, and available parts."
  }
];

export default function WatchCrystalReplacementPage() {
  const shell = getPage("watch-services");
  const html = shell
    ? shell.html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => watchCrystalContent)
    : watchCrystalContent;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Watch Crystal Replacement",
    serviceType: "Watch crystal replacement and repair",
    url: `${siteUrl}/watch-crystal-replacement/`,
    areaServed: [
      { "@type": "City", name: "Johns Creek" },
      { "@type": "City", name: "Alpharetta" },
      { "@type": "City", name: "Suwanee" },
      { "@type": "City", name: "Roswell" },
      { "@type": "City", name: "Cumming" },
      { "@type": "City", name: "Peachtree Corners" },
      { "@type": "City", name: "Atlanta" }
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Its About Time Inc.",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johns Creek",
        addressRegion: "GA",
        addressCountry: "US"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Watch Services", item: `${siteUrl}/watch-services/` },
      { "@type": "ListItem", position: 3, name: "Watch Crystal Replacement", item: `${siteUrl}/watch-crystal-replacement/` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteContent title="Watch Crystal Replacement in Johns Creek, GA" html={html} />
    </>
  );
}
