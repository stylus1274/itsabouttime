import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "IAT New Site", template: "%s | IAT" },
  description: "Independent watch repair, restoration, and sales.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
