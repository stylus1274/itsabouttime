import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JewelryStore",
      "@id": `${siteUrl}/#organization`,
      name: "It’s About Time Inc.",
      url: `${siteUrl}/`,
      image: `${siteUrl}/assets/hero-watch.webp`,
      telephone: "+1-770-442-9854",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11300 Medlock Bridge Rd, Suite 300",
        addressLocality: "Johns Creek",
        addressRegion: "GA",
        postalCode: "30097",
        addressCountry: "US"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "It’s About Time",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "It’s About Time", template: "%s | It’s About Time" },
  description: "Independent watch repair, restoration, and sales in Johns Creek, Georgia.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "It’s About Time",
    title: "It’s About Time",
    description: "Independent watch repair, restoration, and sales in Johns Creek, Georgia.",
    images: [{ url: "/assets/hero-watch.webp", alt: "It’s About Time watch showroom" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "It’s About Time",
    description: "Independent watch repair, restoration, and sales in Johns Creek, Georgia.",
    images: ["/assets/hero-watch.webp"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
