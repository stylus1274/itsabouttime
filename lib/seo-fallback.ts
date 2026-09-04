import type { Metadata } from "next";

export type ContentPage = {
  title: string;
  html: string;
  source: string;
};

type Faq = readonly [name: string, answer: string];

export type FallbackArticleSeo = {
  title: string;
  headline: string;
  description: string;
  path: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  publishedTime: string;
  modifiedTime: string;
  section: string;
  keywords: string[];
  faqs?: readonly Faq[];
};

type SourceImage = {
  src: string;
  alt: string;
};

const fallbackPageDescriptions: Record<string, string> = {
  "watch-repairs": "Professional watch repair in Johns Creek, including diagnostics, battery service, movement repair, restoration, and water-resistance testing.",
  "watch-sales": "Explore a curated selection of luxury and everyday watches at the It’s About Time showroom in Johns Creek, Georgia.",
  "our-workshop": "Meet the It’s About Time workshop team in Johns Creek and learn about our watch repair, restoration, and service process.",
  "blog": "Read watch repair guides, collecting insights, brand stories, and practical care notes from It’s About Time in Johns Creek."
};

function decodeHtml(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:x27|39);/gi, "'")
    .replace(/&#8217;/gi, "’")
    .replace(/&#8216;/gi, "‘")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function htmlToText(value: string) {
  return decodeHtml(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function articleOrMainHtml(html: string) {
  return /<article\b[^>]*>[\s\S]*?<\/article>/i.exec(html)?.[0] ?? html;
}

function truncateDescription(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 155) return normalized;
  const clipped = normalized.slice(0, 155).replace(/\s+\S*$/, "").replace(/[,:;\-\s]+$/, "");
  return `${clipped}…`;
}

function contentDescription(html: string, fallback: string) {
  const content = articleOrMainHtml(html);
  const paragraphs = [...content.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => htmlToText(match[1]))
    .filter((paragraph) => paragraph.length >= 70 && !/^written by\b/i.test(paragraph));
  return truncateDescription(paragraphs[0] ?? htmlToText(content) ?? fallback);
}

function sourceImage(html: string, fallbackAlt: string): SourceImage | undefined {
  const candidates = [...html.matchAll(/<img\b[^>]*>/gi)]
    .map((match) => {
      const tag = match[0];
      const src = /(?:^|\s)src=["']([^"']+)["']/i.exec(tag)?.[1] ?? /(?:^|\s)data-src=["']([^"']+)["']/i.exec(tag)?.[1] ?? "";
      const alt = decodeHtml(/(?:^|\s)alt=["']([^"']*)["']/i.exec(tag)?.[1] ?? fallbackAlt);
      return { src, alt };
    })
    .filter(({ src }) => src.startsWith("/assets/") && !/\/(?:logo|favicon|icon)/i.test(src));
  return candidates[0];
}

function pageTitle(value: string) {
  const normalized = decodeHtml(value).trim();
  return /\|\s*it[’']s about time\b/i.test(normalized) ? normalized : `${normalized} | It’s About Time`;
}

function publishedDate(html: string, fallback: string) {
  const text = htmlToText(html);
  const match = text.match(/\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+20\d{2}\b|\b20\d{2}-\d{2}-\d{2}\b/i);
  const parsed = match ? new Date(match[0]) : undefined;
  return parsed && !Number.isNaN(parsed.valueOf()) ? parsed.toISOString() : fallback;
}

export function makeFallbackArticleSeo(slug: string, page: ContentPage, modifiedTime: string): FallbackArticleSeo {
  const path = `/${slug}/`;
  const image = sourceImage(page.html, page.title);
  const cleanedTitle = decodeHtml(page.title).replace(/\s*\|\s*It’s About Time\s*$/i, "");
  return {
    title: pageTitle(page.title),
    headline: cleanedTitle,
    description: contentDescription(page.html, `Read ${cleanedTitle} from It’s About Time in Johns Creek, Georgia.`),
    path,
    image: image?.src,
    imageAlt: image?.alt ?? cleanedTitle,
    publishedTime: publishedDate(page.html, modifiedTime),
    modifiedTime,
    section: "Watch Journal",
    keywords: [cleanedTitle, "watch repair", "Johns Creek"]
  };
}

export function makeFallbackPageMetadata(slug: string, page: ContentPage): Metadata {
  const title = pageTitle(page.title);
  const description = fallbackPageDescriptions[slug] ?? contentDescription(page.html, `Learn more about ${page.title} at It’s About Time in Johns Creek, Georgia.`);
  const image = sourceImage(page.html, page.title);
  return {
    title: { absolute: title },
    description,
    keywords: [decodeHtml(page.title).replace(/\s*\|\s*It’s About Time\s*$/i, ""), "It’s About Time", "Johns Creek"],
    alternates: { canonical: `/${slug}/` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: `/${slug}/`,
      siteName: "It’s About Time",
      title,
      description,
      images: image ? [{ url: image.src, alt: image.alt }] : undefined
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image.src] : undefined
    }
  };
}

export function makeGenericPageSchema(siteUrl: string, slug: string, page: ContentPage) {
  const pageUrl = `${siteUrl}/${slug}/`;
  const image = sourceImage(page.html, page.title);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle(page.title),
        description: fallbackPageDescriptions[slug] ?? contentDescription(page.html, `Learn more about ${page.title} at It’s About Time in Johns Creek, Georgia.`),
        ...(image ? { primaryImageOfPage: `${siteUrl}${image.src}` } : {}),
        isPartOf: { "@id": `${siteUrl}/#website` }
      }
    ]
  };
}

export function normalizeSeoHeadings(slug: string, html: string) {
  const formHeadings: Record<string, string> = {
    "watch-repairs": "Watch Repair Form",
    "repair-form": "Sell Your Luxury Watch",
    "watch-submission-form": "Sell Your Watch"
  };
  const formHeading = formHeadings[slug];
  if (formHeading) {
    const label = slug === "watch-repairs" ? "Start a watch repair" : formHeading;
    return html
      .replace('<section id="top" aria-label="Start a watch repair"', `<section id="top" aria-label="${label}"`)
      .replace('<div style="min-height:600px;border:1px solid #E4E0D9;', `<h1 style="margin:0 0 22px;font-family:'Cormorant Garamond',serif;font-weight:600;font-size:clamp(34px,4vw,48px);line-height:1.08;color:#1A1A1A;">${formHeading}</h1><div style="min-height:600px;border:1px solid #E4E0D9;`);
  }

  if (["nomos-watch-repair-johns-creek", "authorized-tag-heuer-repair", "tag-heuer-watch-service-atlanta"].includes(slug)) {
    let h1Count = 0;
    return html.replace(/<h1(\b[^>]*)>([\s\S]*?)<\/h1>/gi, (match, attributes, content) => {
      h1Count += 1;
      return h1Count === 2 ? `<h2${attributes}>${content}</h2>` : match;
    });
  }

  return html;
}

export const dedicatedSchemaSlugs = new Set([
  "contact", "repair-form", "watch-submission-form", "disclaimer", "privacy-policy", "refund_returns", "workshop", "rolex-repair-atlanta", "rolex-bracelet-stretch-repair", "watch-blogs",
  "atlanta-watch-service-center-workshop-duluth", "expert-rolex-watch-repair-buford", "watch-battery-replacement-in-suwanee-ga",
  "panerai-certified-watchmakers", "rado-authorized-workshop-and-watchmakers", "baume-and-mercier-watches",
  "luxury-watch-strap-band-replacement", "watch-band-repair", "watch-band-replacement",
  "watch-battery-replacement-atlanta", "watch-battery-replacement-buford", "watch-battery-replacement-in-alpharetta",
  "watch-repair-atlanta", "watch-repair-in-dunwoody", "watch-repair-buford", "watch-repair-alpharetta", "watch-repair-buckhead", "watch-repair-suwanee", "watch-repair-peachtree-corners", "watch-repair-cumming", "watch-repair-chamblee", "watch-repair-brookhaven",
  "omega-watch-repair-atlanta", "omega-watch-repair-peachtree-corners", "omega-watch-repair-alpharetta",
  "expert-cartier-watch-repair-in-atlanta", "cartier-watch-repair-cumming", "cartier-watch-battery-replacement",
  "hamilton-watch-repair-athens", "hamilton-watch-repair-atlanta", "hamilton-watch-repair-suwanee",
  "tag-heuer-watch-repair-landing", "tag-heuer-watch-repair-atlanta", "tag-heuer-watch-repair-nashville",
  "breitling-watch-repair-athens", "breitling-watch-repair-atlanta", "nomos-watch-repair-atlanta",
  "brands-we-carry", "buy-premium-watches-at-special-price", "sell-your-luxury-watch",
  "hamilton-watches-authorized-dealer", "luminox-watches-authorized-dealer", "seiko-watches-authorized-dealer", "citizen-watches", "boluva-watches-authorized-dealer", "g-shock-watches-authorized-dealer",
  "hamilton-watches-at-its-about-time-inc-authorized-dealer-in-atlanta", "luminox-watches-at-its-about-time-inc-authorized-dealer-atlanta", "seiko-watches-at-its-about-time-inc-authorized-dealer-atlanta",
  "citizen-watches-at-its-about-time-inc-authorized-dealer-atlanta", "citizen-watches-at-its-about-time-inc-authorized-dealer-cumming", "citizen-watches-at-its-about-time-inc-authorized-dealer-roswell"
]);
