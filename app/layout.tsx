import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://itsabouttime-psi.vercel.app").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "It’s About Time", template: "%s | It’s About Time" },
  description: "Independent watch repair, restoration, and sales in Johns Creek, Georgia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
