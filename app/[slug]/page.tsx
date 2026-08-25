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
  faqs?: readonly Faq[];
};

const articleSeo: Record<string, ArticleSeo> = {
  "benrus-legacy": {
    title: "Benrus Watches: History, Collecting & Repair | It’s About Time",
    headline: "Exploring the Legacy and Craftsmanship of Benrus Watches",
    description: "Explore Benrus watch history, military models, collecting guidance, and specialist repair in Johns Creek, Georgia.",
    path: "/benrus-legacy/",
    image: "/assets/benrus-military.jpg",
    imageWidth: 1915,
    imageHeight: 821,
    imageAlt: "WWII soldier with a field radio beside a vintage Benrus military field watch",
    publishedTime: "2026-08-22T00:00:00-04:00",
    modifiedTime: "2026-08-25T00:00:00-04:00",
    section: "Watch Brands",
    keywords: ["Benrus watches", "vintage Benrus", "Benrus military watches", "Benrus watch repair", "Johns Creek watch repair"],
    faqs: [
      ["What is the history of Benrus watches?", "Benrus was founded in 1921 by Benjamin Lazrus in New York City and grew into one of the top American watch brands by the 1950s. The company supplied field and dive watches to the U.S. military through several decades before falling quiet in the mid-1970s. The name has since been revived under new ownership."],
      ["Are Benrus watches worth anything today?", "Everyday vintage models often trade between roughly $300 and $1,500, while original military-issue pieces, especially the Type I and Type II dive watches, can command significantly more at auction. Condition, originality, and provenance drive the value."],
      ["How do I identify a vintage Benrus watch model?", "Start with the case back, which usually carries a model reference number you can match against collector catalogs and databases. Dial layout, case shape, and movement caliber help confirm it."],
      ["How do I find replacement parts or get a Benrus watch repaired?", "Because many parts are no longer manufactured, vintage Benrus repair calls for a watchmaker experienced with older movements who can source period-correct components or carefully fabricate them. A qualified independent workshop is usually the best first step." ]
    ]
  },
  "benrus-ultra-deep": {
    title: "Benrus Ultra-Deep Dive Watch | It’s About Time",
    headline: "Benrus Ultra-Deep Dive Watch",
    description: "Explore the Benrus Ultra-Deep dive watch, including its technical details, condition review, and availability at our Johns Creek showroom.",
    path: "/benrus-ultra-deep/",
    image: "/assets/benrus-ultra-deep.png",
    imageWidth: 1440,
    imageHeight: 1440,
    imageAlt: "Benrus Ultra-Deep dive watch with black dial and steel bracelet",
    publishedTime: "2026-08-22T00:00:00-04:00",
    modifiedTime: "2026-08-25T00:00:00-04:00",
    section: "Watch Brands",
    keywords: ["Benrus Ultra-Deep", "Benrus dive watch", "vintage dive watch", "Benrus watches", "Johns Creek watch showroom"]
  },
  "bulova-repair": {
    title: "Bulova Watch Repair in Johns Creek, GA | It’s About Time",
    headline: "5 Signs Your Bulova Watch Needs Repair",
    description: "Learn the warning signs your Bulova watch needs repair and get expert battery, pressure-testing, and movement service in Johns Creek, GA.",
    path: "/bulova-repair/",
    image: "/assets/blog-bulova-skeleton.png",
    imageWidth: 2048,
    imageHeight: 1152,
    imageAlt: "Bulova rose-gold skeleton automatic watch",
    publishedTime: "2026-08-22T00:00:00-04:00",
    modifiedTime: "2026-08-25T00:00:00-04:00",
    section: "Watch Repair",
    keywords: ["Bulova watch repair", "Bulova repair Johns Creek", "Bulova battery replacement", "watch pressure testing", "watch repair Georgia"],
    faqs: [
      ["How often should I service my Bulova watch?", "Mechanical Bulova watches generally benefit from a full service every 3 to 5 years, including cleaning, fresh lubrication, and movement adjustment. Quartz models need less frequent attention but should have the battery replaced every 1 to 2 years."],
      ["Does a battery replacement void my watch's water resistance?", "Not on its own, but opening the case does reset water resistance to unknown until it is pressure tested again. A proper battery service should include a fresh gasket and a test."],
      ["Can I repair my Bulova watch at home?", "Basic tasks like swapping a leather strap or cleaning the case exterior are fine at home. Anything involving the movement, crystal, crown, or case seals should go to a professional."],
      ["How much does Bulova watch repair cost?", "A battery replacement typically runs $20 to $50. Crystal replacement and seal work generally fall in the $75 to $150 range. A complete movement overhaul can range from $200 to $500 or more depending on complexity."],
      ["What happens if my watch fails a pressure test?", "A failed test usually means a worn gasket or seal, an easy and inexpensive fix if caught early. A watchmaker should quote replacement before doing any work and check for internal moisture at the same time."]
    ]
  },
  "benrus-dtu-2a-watch-review": {
    title: "Benrus DTU-2A/P Field Watch Review | It’s About Time",
    headline: "Benrus DTU-2A/P: The Vietnam-Era Field Watch That Earned Its Place in 2026",
    description: "Read our Benrus DTU-2A/P review, covering its military history, 34mm field-watch proportions, ETA movement, specifications, and collector appeal.",
    path: "/benrus-dtu-2a-watch-review/",
    image: "/assets/articles/benrus-dtu-2ap-lifestyle.jpg",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Benrus DTU-2A/P military field watch on a brown bund strap",
    publishedTime: "2026-06-18T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:56:01+00:00",
    section: "Field Watches",
    keywords: ["Benrus DTU-2A/P review", "Benrus field watch", "Vietnam-era field watch", "ETA 2671", "Benrus watches Johns Creek"],
    faqs: [
      ["What does DTU-2A/P stand for?", "DTU-2A/P stands for Department Technical Unit, 2nd Amendment, Army/Personnel. It is the U.S. military designation for the field-watch specification issued under MIL-W-3818B in 1962, which Benrus fulfilled for soldiers serving in Vietnam."],
      ["Is the Benrus DTU-2A/P a good everyday watch?", "Yes. Its 34mm case, automatic movement, 100-meter water resistance and tool-watch construction make it a capable daily wearer. Buyers who need a larger case or a date display may prefer another model, but the DTU-2A/P is designed for practical, unobtrusive use."],
      ["How does the DTU-2A/P compare to the Hamilton Khaki Field?", "Both have field-watch heritage. The Hamilton Khaki Field Mechanical generally offers a longer power reserve at a lower price, while the Benrus carries a more specific documented military history and adds a sapphire crystal with anti-reflective coating."],
      ["Can I get the DTU-2A/P serviced locally?", "Yes. The ETA 2671 is a well-supported Swiss caliber with broad parts availability. It’s About Time Inc. handles contemporary and vintage watch service and can advise on service intervals and movement maintenance."],
      ["Where can I buy the Benrus DTU-2A/P in Atlanta?", "It’s About Time Inc. carries Benrus watches including the DTU-2A/P. Visit the Johns Creek showroom to see it in person or contact the team about current availability."]
    ]
  },
  "10-luxury-dive-watches-everyday-wear": {
    title: "Best Luxury Dive Watches (That Aren’t the Submariner) | It’s About Time",
    headline: "10 Luxury Dive Watches for Everyday Wear (That Aren’t the Submariner)",
    description: "The Submariner is great, but serious collectors know there is more. Explore 10 distinctive luxury dive watches worth wearing every day in 2026.",
    path: "/10-luxury-dive-watches-everyday-wear/",
    image: "/assets/articles/dive-iwc-aquatimer-hero.png",
    imageWidth: 1445,
    imageHeight: 912,
    imageAlt: "IWC Aquatimer Automatic luxury dive watch on a wrist",
    publishedTime: "2026-05-05T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:55:06+00:00",
    section: "Dive Watches",
    keywords: ["luxury dive watches", "best dive watches 2026", "IWC Aquatimer", "Oris Aquis Calibre 400", "Grand Seiko dive watch"],
    faqs: [
      ["What makes a luxury dive watch suitable for everyday wear?", "Everyday wearability comes from more than a depth rating. Look for a manageable case size, reasonable thickness, strong legibility, a useful movement reserve and a bracelet or strap that sits comfortably for long periods."],
      ["Do luxury dive watches need pressure testing?", "Yes. Water resistance can decline over time as seals age, and pressure testing is especially important after any case opening for service, a battery or a crystal replacement."],
      ["Is ISO 6425 certification important?", "ISO 6425 indicates a watch has met formal dive-watch requirements, including water resistance, bezel functionality, legibility and resistance to shock and magnetism. It is a useful standard, though personal wearability still depends on dimensions and fit."],
      ["Which dive watch on this list has the longest power reserve?", "The Breitling Superocean Heritage B31 offers a 100-hour reserve. The Oris Calibre 400 follows with five days, while the Rado Powermatic 80 offers about 80 hours."],
      ["Can a watchmaker service a luxury dive watch locally?", "It’s About Time Inc. provides professional watch repair and service in Johns Creek. Contact the workshop to discuss a specific brand, movement and water-resistance test requirement."]
    ]
  },
  "cartier-watch-battery-replacement": {
    title: "Cartier Watch Battery Replacement | Johns Creek, GA | It’s About Time",
    headline: "Cartier Watch Battery Replacement by Certified Watchmakers",
    description: "Cartier battery replacement at It’s About Time Inc. WOSTEP-certified watchmakers, in-house service, gasket inspection, and pressure testing. Walk-ins welcome.",
    path: "/cartier-watch-battery-replacement/",
    image: "/assets/articles/cartier-battery-replacement-hero.png",
    imageWidth: 1024,
    imageHeight: 765,
    imageAlt: "Cartier watches prepared for professional battery replacement service",
    publishedTime: "2026-08-03T20:54:53+00:00",
    modifiedTime: "2026-08-03T20:54:53+00:00",
    section: "Watch Service",
    keywords: ["Cartier watch battery replacement", "Cartier battery service Johns Creek", "Cartier watch repair", "watch pressure testing", "WOSTEP certified watchmaker"],
    faqs: [
      ["Can a dead battery damage a Cartier watch?", "Yes. If an old battery is left in too long and leaks, it can damage the movement and turn a routine service into a more serious repair. If your Cartier has stopped, have it inspected promptly."],
      ["How long does a Cartier battery replacement take?", "Turnaround depends on the model and what inspection reveals. The workshop will provide a clear timeframe after evaluating the watch and its service needs."],
      ["Can I mail my Cartier watch in for battery replacement?", "Yes. Customers who cannot visit Johns Creek can discuss mail-in service with the workshop. All work is handled in-house using the same care as an in-store service."],
      ["Can any watch shop replace a Cartier battery?", "Not every shop should. Cartier watches require careful case handling, the correct tools and attention to the gasket and seal. A watch-focused repair shop is generally a safer choice than a general jewelry counter or mall kiosk."],
      ["How much does Cartier watch battery replacement cost?", "Cost depends on the model, gasket condition and whether pressure testing or additional service is required. The workshop provides a clear price before work begins."],
      ["Does a Cartier watch need pressure testing after a battery replacement?", "If the watch is water resistant or exposed to moisture, pressure testing is recommended after the case has been opened. The gasket may need inspection or replacement at the same time."]
    ]
  },
  "best-field-watches-everyday-wear": {
    title: "Best Field Watches for Everyday Wear | It’s About Time",
    headline: "Best Field Watches for Everyday Wear",
    description: "Explore the best field watches for everyday wear, with practical buying guidance on case size, movements, water resistance, and standout options at every budget.",
    path: "/best-field-watches-everyday-wear/",
    image: "/assets/articles/hamilton-khaki-field-mechanical-watch.webp",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Hamilton Khaki Field Mechanical watch with green NATO-style strap",
    publishedTime: "2026-05-15T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:55:21+00:00",
    section: "Field Watches",
    keywords: ["best field watches", "field watches for everyday wear", "Hamilton Khaki Field", "Benrus DTU-2A/P", "field watch guide"],
    faqs: [
      ["What makes a watch a field watch?", "A field watch is defined by a highly legible dial built for quick reading in any light. Large Arabic numerals, minimal clutter, luminous hands and markers, and a compact case all trace back to military timepieces designed for soldiers who needed the time at a glance."],
      ["Are field watches good for everyday wear?", "Yes. Field watches are among the most versatile categories for daily use. Their clean design works with business casual, outdoor activity and everything in between, while their durable construction holds up to regular wear."],
      ["What is the difference between a field watch and a dive watch?", "A field watch prioritizes legibility and a slim, wearable case. A dive watch focuses on underwater use with rotating bezels, screw-down crowns and higher water resistance. Both can be rugged, but a field watch is the more versatile daily choice for many people."],
      ["Should I get an automatic or quartz field watch?", "Quartz is the better choice for low maintenance and consistent accuracy with minimal attention. Automatics need regular wear or a winder to stay running, but many buyers value their mechanical craftsmanship enough to accept that tradeoff."],
      ["How often does a field watch need service?", "Most automatic field watches benefit from service every three to five years as a general guideline, although interval needs vary by movement and usage. Check the documentation for your specific model and consult a qualified watchmaker when in doubt."],
      ["Does It’s About Time Inc. service field watches?", "Yes. It’s About Time Inc. services field watches from several manufacturers, including Hamilton, Seiko and Citizen. Contact the team or visit the workshop to discuss a particular model."]
    ]
  },
  "best-seiko-watches-to-buy": {
    title: "Best Seiko Watches to Buy in 2026 | It’s About Time",
    headline: "Best Seiko Watches to Buy in 2026: From $179 to $1,000 and Beyond",
    description: "From the $179 Seiko 5 to the Alpinist and Grand Seiko, explore the best Seiko watches in 2026 by price and purpose at It’s About Time.",
    path: "/best-seiko-watches-to-buy/",
    image: "/assets/articles/seiko-prospex-alpinist-buying-guide.webp",
    imageWidth: 1200,
    imageHeight: 600,
    imageAlt: "Seiko Prospex Alpinist SPB121J1 field watch with internal compass bezel",
    publishedTime: "2026-07-02T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:56:15+00:00",
    section: "Luxury Watches",
    keywords: ["best Seiko watches", "Seiko watches 2026", "Seiko Prospex Alpinist", "Seiko 5 Sports", "Seiko dealer Johns Creek"],
    faqs: [
      ["Are Seiko watches worth buying?", "Yes. Seiko manufactures its own movements, which gives it a quality-control and serviceability advantage over competitors at similar price points. Its in-house production, broad price range and strong enthusiast community make Seiko a defensible purchase at many budgets."],
      ["What is the best Seiko watch for the money?", "For many buyers, the Seiko Prospex Alpinist SPB121J1 represents the strongest value because it combines 200 meters of water resistance, an internal compass bezel and the 6R35 movement with a 70-hour power reserve for around $750. At lower price points, the Seiko 5 Sports SRPD51 is a standard recommendation at approximately $179."],
      ["How long do Seiko movements last?", "Seiko automatic movements, particularly the 4R and 6R calibers, are known for long service intervals and broad parts availability. With proper care and periodic service, often every three to five years for a daily wearer, a Seiko movement can last decades."],
      ["Can I get my Seiko serviced locally in Atlanta?", "Yes. It’s About Time Inc. provides Seiko watch repair and service at its Johns Creek location. Our watchmakers work with the full range of Seiko calibers, from the entry-level 4R series to higher-specification 6R movements."],
      ["Is Seiko an authorized dealer brand at It’s About Time Inc.?", "Yes. It’s About Time Inc. is an authorized Seiko dealer serving the Atlanta metro area from its Johns Creek showroom. Purchasing through an authorized dealer helps ensure a valid warranty and properly sourced product."],
      ["What is the difference between Seiko and Grand Seiko?", "Grand Seiko is Seiko’s high-end luxury division, operating largely as its own brand with distinct movements and pricing that begins around $2,000 and extends far higher. Its finishing standards, including Zaratsu polishing on cases and hands, compete with the best Swiss manufacturers."]
    ]
  },
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
  },
  "dial-refinishing-vs-dial-replacement": {
    title: "Dial Refinishing vs. Replacement | Johns Creek Watch Repair",
    headline: "Dial Refinishing vs. Dial Replacement: How to Know Which One Your Watch Needs",
    description: "Learn when a watch dial should be refinished, replaced, or preserved, including the impact of water damage, originality, and collectible value.",
    path: "/dial-refinishing-vs-dial-replacement/",
    image: "/assets/articles/dial-refinishing-comparison.png",
    imageWidth: 1200,
    imageHeight: 675,
    imageAlt: "Watchmaker comparing a patina-aged Omega dial with a factory-fresh replacement dial",
    publishedTime: "2026-07-07T00:00:00-04:00",
    modifiedTime: "2026-08-04T13:06:41+00:00",
    section: "Watch Repair",
    keywords: ["dial refinishing", "dial replacement", "watch dial repair", "vintage watch dial", "Johns Creek watch repair"],
    faqs: [
      ["What is the difference between dial refinishing and dial replacement?", "Refinishing restores the existing dial surface; replacement removes it and installs a new component. The right option depends on the type and extent of damage."],
      ["Does refinishing a watch dial reduce its value?", "It can, especially on vintage or collectible watches where the original dial is a major driver of value. For modern daily-wear watches, a well-done refinishing job can improve appearance and usability."],
      ["Can water-damaged watch dials be refinished?", "Sometimes, but only when damage is limited to surface discoloration. Severe oxidation, pitting, or corrosion into the base metal usually requires dial replacement."],
      ["Should I refinish the dial on my vintage watch?", "In most collector-market contexts, no. Original dials, even those showing age and patina, are typically the most valued component of a vintage watch."],
      ["How long does dial refinishing or replacement take?", "Refinishing often takes two to four weeks, while replacement timing depends on parts availability and manufacturer lead times."],
      ["Can any watchmaker refinish a dial?", "No. Dial refinishing is a distinct specialty requiring specific equipment, printing plates, paint formulations, and font libraries beyond standard movement repair tools."]
    ]
  },
  "best-38mm-watches": {
    title: "10 Best 38mm Watches for Every Style and Budget | IAT",
    headline: "10 Best 38mm Watches for Every Style and Budget",
    description: "Compare ten current 38mm watches by price, movement, fit, water resistance, and purpose, from accessible automatics to luxury chronographs.",
    path: "/best-38mm-watches/",
    image: "/assets/articles/best-38mm-hamilton-khaki-field.png",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Hamilton Khaki Field 38mm watch on a textured outdoor surface",
    publishedTime: "2026-08-03T00:00:00-04:00",
    modifiedTime: "2026-08-03T22:13:26+00:00",
    section: "Watch Brands",
    keywords: ["best 38mm watches", "38mm watch", "Hamilton Khaki Field 38mm", "Omega Aqua Terra 38mm", "compact watches"],
    faqs: [
      ["Is 38mm a good watch size?", "A 38mm case is a versatile watch size for many wrists because it balances visible wrist presence with manageable proportions."],
      ["What wrist size fits a 38mm watch?", "A 38mm watch often fits wrists between about 6 and 7.5 inches, but lug-to-lug length and wrist shape matter more than circumference alone."],
      ["Do 38mm watches look too small on men?", "A 38mm watch does not automatically look too small because case shape, dial opening, and lug length influence visual presence."],
      ["Are 38mm watches suitable for women?", "A 38mm watch can be an excellent choice for women who prefer a noticeable sports or everyday watch."],
      ["Which 38mm watch is best for daily wear?", "The Omega Aqua Terra is a strong luxury all-purpose option; the Seiko SRPK29 is an accessible choice, and the Certina DS Action Diver suits swimming and durability priorities."],
      ["What should I check before buying a 38mm watch?", "Check lug-to-lug length, thickness, weight, movement, water resistance, and bracelet or strap fit before buying."]
    ]
  },
  "distinctive-features-that-make-the-benrus-sky-chief-a-collectible": {
    title: "Benrus Sky Chief Features: A Collector’s Guide | IAT",
    headline: "5 Distinctive Features That Make the Benrus Sky Chief a Collector’s Treasure",
    description: "Explore the Swiss movements, aviation-inspired design, collector value, and authenticity checks that define the vintage Benrus Sky Chief.",
    path: "/distinctive-features-that-make-the-benrus-sky-chief-a-collectible/",
    image: "/assets/articles/benrus-sky-chief-collector-hero.jpg",
    imageWidth: 2560,
    imageHeight: 1440,
    imageAlt: "Benrus Sky Chief watch on a leather folio with vintage aviation documents",
    publishedTime: "2026-07-22T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:56:38+00:00",
    section: "Benrus",
    keywords: ["Benrus Sky Chief", "vintage Benrus watches", "Benrus Sky Chief value", "Benrus Swiss movement", "collectible watches"],
    faqs: [
      ["What movement does the Benrus Sky Chief use?", "The Benrus Sky Chief commonly uses Swiss-made movements from A. Schild or FHF, typically configured with 17 jewels."],
      ["How much is a Benrus Sky Chief worth today?", "A Benrus Sky Chief typically sells for between $150 and $600 at auction, depending on condition, dial originality, case material, and whether the movement is running."],
      ["What are the dial variants of the Benrus Sky Chief?", "The Sky Chief has multiple dial configurations across its production run, including variations in numeral styles, marker shapes, and dial colors."],
      ["How do I identify an authentic Benrus Sky Chief?", "Examine the caseback for reference numbers and material markings, request movement photos, and compare the caliber number with a reputable movement database."
      ]
    ]
  }
};

function makeArticleSchema(article: ArticleSeo) {
  const articleUrl = `${siteUrl}${article.path}`;
  const graph: Array<Record<string, unknown>> = [
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
    }
  ];

  if (article.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      mainEntity: article.faqs.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text }
      }))
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
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
