import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/watch-repairs.html", destination: "/watch-repairs", permanent: true },
      { source: "/watch-sales.html", destination: "/watch-sales", permanent: true },
      { source: "/our-workshop.html", destination: "/our-workshop", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/benrus-legacy.html", destination: "/benrus-legacy", permanent: true },
      { source: "/benrus-ultra-deep.html", destination: "/benrus-ultra-deep", permanent: true },
      { source: "/bulova-repair.html", destination: "/bulova-repair", permanent: true },
      { source: "/dial-refinishing-vs-replacement.html", destination: "/dial-refinishing-vs-dial-replacement", permanent: true },
      { source: "/dial-refinishing-vs-replacement", destination: "/dial-refinishing-vs-dial-replacement", permanent: true },
      { source: "/dial-refinishing-vs-replacement/", destination: "/dial-refinishing-vs-dial-replacement", permanent: true }
    ];
  }
};

export default nextConfig;
