import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SiteContent, type ArticleCta } from "@/components/SiteContent";
import articleCtas from "@/data/article-ctas.json";
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
  "luxury-watch-collecting-for-beginners-2026": { title: "A Beginner’s Guide to Collecting Luxury Watches in 2026 | It’s About Time", headline: "A Beginner’s Guide to Collecting Luxury Watches in 2026", description: "Start collecting luxury watches in 2026 with practical guidance on brands, movements, authenticity, storage, and building a timeless collection.", path: "/luxury-watch-collecting-for-beginners-2026/", image: "/assets/articles/batch3-beginners-hero.png", imageWidth: 1536, imageHeight: 1024, imageAlt: "Man reaching for a luxury watch", publishedTime: "2026-02-11T00:00:00-04:00", modifiedTime: "2026-02-11T15:16:41+00:00", section: "Luxury Watches", keywords: ["luxury watch collecting", "beginner luxury watches"] },
  "ultimate-guide-to-luxury-watches-2026": { title: "The Ultimate Guide to Luxury Watches 2026 | It’s About Time", headline: "The Ultimate Guide to Luxury Watches: Everything You Need to Know in 2026", description: "Discover luxury watch history, craftsmanship, leading brands, investment considerations, and practical buying guidance for 2026.", path: "/ultimate-guide-to-luxury-watches-2026/", image: "/assets/articles/batch3-ultimate-hero.jpg", imageWidth: 1526, imageHeight: 897, imageAlt: "Rolex luxury watch collection", publishedTime: "2026-02-05T13:29:05+00:00", modifiedTime: "2026-02-05T22:45:14+00:00", section: "Luxury Watches", keywords: ["luxury watches 2026", "luxury watch guide"] },
  "watch-battery-replacement-johns-creek-ga": { title: "Watch Battery Replacement Johns Creek | It’s About Time", headline: "Watch Battery Replacement in Johns Creek You Can Trust", description: "Quick, professional watch battery replacement in Johns Creek, GA for luxury and everyday watches. Walk-ins welcome.", path: "/watch-battery-replacement-johns-creek-ga/", image: "/assets/articles/batch3-johns-creek-hero.jpg", imageWidth: 2000, imageHeight: 750, imageAlt: "Professional watch repair in Johns Creek", publishedTime: "2025-09-08T00:00:00-04:00", modifiedTime: "2026-02-03T14:45:36+00:00", section: "Battery Replacement", keywords: ["watch battery replacement Johns Creek", "watch repair Johns Creek"] },
  "common-cartier-watch-problems-and-when-to-seek-professional-repair": { title: "Common Cartier Watch Problems and Repair | It’s About Time", headline: "Common Cartier Watch Problems and When to Seek Professional Repair", description: "Learn common Cartier movement, crown, crystal, bracelet, and water-resistance problems and when specialist watch repair is needed.", path: "/common-cartier-watch-problems-and-when-to-seek-professional-repair/", image: "/assets/articles/batch3-cartier-problems-hero.jpg", imageWidth: 1200, imageHeight: 804, imageAlt: "Cartier automatic watch requiring specialist service", publishedTime: "2026-01-29T12:16:38+00:00", modifiedTime: "2026-01-29T12:27:11+00:00", section: "Cartier Repair", keywords: ["Cartier watch repair", "Cartier watch problems"] },
  "cartier-watch-repair-complete-faq-guide": { title: "Cartier Watch Repair FAQ Guide | It’s About Time", headline: "Cartier Watch Repair: Complete FAQ Guide", description: "Get answers about Cartier watch repair costs, timelines, common issues, battery service, water resistance, and professional care.", path: "/cartier-watch-repair-complete-faq-guide/", image: "/assets/articles/batch3-cartier-faq-hero.jpg", imageWidth: 1024, imageHeight: 682, imageAlt: "Cartier gold and rose-gold watches", publishedTime: "2026-01-27T00:00:00-04:00", modifiedTime: "2026-01-27T22:08:26+00:00", section: "Cartier Repair", keywords: ["Cartier watch repair FAQ", "Cartier repair costs"] },
  "spot-fake-luxury-watch": {
    title: "How to Spot a Fake Luxury Watch | It’s About Time",
    headline: "How to Spot a Fake Luxury Watch: A Detailed Guide for Buyers",
    description: "Learn how to tell if a luxury watch is fake. Check logos, materials, movements, serial numbers, seller credibility, and pricing before buying.",
    path: "/spot-fake-luxury-watch/",
    image: "/assets/articles/batch2-spot-fake-hero.jpg",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Seller holding a luxury watch in gloved hands",
    publishedTime: "2026-03-08T16:40:35+00:00",
    modifiedTime: "2026-08-03T20:53:21+00:00",
    section: "Luxury Watch Authentication",
    keywords: ["spot fake luxury watch", "luxury watch authentication", "fake Rolex signs", "watch serial number verification", "buy authentic luxury watch"],
    faqs: [["How can I tell if a luxury watch is fake?", "Check precision of branding, materials, craftsmanship, movement behavior, serial information, and market price together. Professional authentication is the most reliable verification."], ["Are fake luxury watches illegal?", "Manufacturing and selling counterfeits violates intellectual-property laws in many jurisdictions. Buyers can face financial loss, customs seizure, and insurance complications."], ["Can a fake look exactly like a real watch?", "Some replicas can look convincing in photographs, but professional inspection of construction, materials and the movement can reveal differences."], ["What should I do after accidentally buying a fake?", "Preserve all documentation, obtain professional authentication, contact the seller for a refund, and use the relevant marketplace or payment dispute process."]]
  },
  "the-difference-between-entry-level-and-high-end-luxury-watches": {
    title: "Entry-Level vs. High-End Luxury Watches | It’s About Time",
    headline: "The Difference Between Entry-Level and High-End Luxury Watches",
    description: "Understand the differences between entry-level and high-end luxury watches, including movements, materials, finishing, complications, value, and ownership.",
    path: "/the-difference-between-entry-level-and-high-end-luxury-watches/",
    image: "/assets/articles/batch2-entry-luxury-hero.jpg",
    imageWidth: 1000,
    imageHeight: 565,
    imageAlt: "Citizen Attesa chronograph showing luxury-watch finishing",
    publishedTime: "2026-03-03T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:52:40+00:00",
    section: "Luxury Watches",
    keywords: ["entry level luxury watches", "high end luxury watches", "luxury watch movements", "luxury watch buying guide", "high horology"],
    faqs: [["What is an entry-level luxury watch?", "It is a watch from a respected manufacturer that offers quality finishing and dependable mechanical or quartz movement at a more accessible price point."], ["Why do high-end luxury watches cost more?", "They require more manual labor, rarer materials, complex movements, limited production, and specialist finishing."], ["Do luxury watches hold value?", "Value retention is brand-, model-, condition-, and market-dependent. High-end pieces from established houses often show stronger collector demand, while entry-level pieces are commonly valued for daily utility."], ["How often should a luxury watch be serviced?", "Intervals vary by brand and use, but many mechanical watches benefit from professional service roughly every five to seven years."]]
  },
  "hamilton-watch-repair": {
    title: "Hamilton Watch Repair | It’s About Time",
    headline: "Hamilton Watch Repair: Restoring Swiss-American Excellence",
    description: "Trust It’s About Time Inc. for expert Hamilton watch repair, maintenance, water-resistance checks, and professional service that protects precision and craftsmanship.",
    path: "/hamilton-watch-repair/",
    image: "/assets/articles/batch2-hamilton-hero.jpg",
    imageWidth: 2000,
    imageHeight: 750,
    imageAlt: "Hamilton watch prepared for professional repair",
    publishedTime: "2024-05-15T00:00:00-04:00",
    modifiedTime: "2026-07-07T17:37:30+00:00",
    section: "Watch Repair",
    keywords: ["Hamilton watch repair", "Hamilton watch service", "Hamilton automatic repair", "Hamilton pressure test", "Hamilton repair Johns Creek"],
    faqs: [["Can Hamilton automatic watches be serviced?", "Yes. A qualified watchmaker can diagnose movement condition, clean and lubricate the caliber, replace worn components where appropriate, and test operation after service."], ["How often should a Hamilton watch be serviced?", "Interval needs depend on the model and wear pattern. Mechanical watches are commonly evaluated every several years or sooner if accuracy, reserve, winding, or moisture issues arise."], ["Can a water-resistant Hamilton be pressure tested?", "Yes, when the model and condition are appropriate. Pressure testing verifies whether the seals are still protecting the case after service or before water exposure."]]
  },
  "watch-battery-replacement-in-atlanta": {
    title: "Watch Battery Replacement in Atlanta | It’s About Time",
    headline: "Watch Battery Replacement in Atlanta",
    description: "Watch battery replacement in Atlanta with professional diagnosis, gasket inspection, resealing, and water-resistance testing for luxury and everyday watches.",
    path: "/watch-battery-replacement-in-atlanta/",
    image: "/assets/articles/batch2-battery-atlanta-hero.jpg",
    imageWidth: 2400,
    imageHeight: 1602,
    imageAlt: "Technician performing professional watch battery replacement",
    publishedTime: "2025-05-18T00:00:00-04:00",
    modifiedTime: "2026-04-08T17:36:57+00:00",
    section: "Battery Replacement",
    keywords: ["watch battery replacement Atlanta", "watch battery service", "water resistant watch battery", "watch pressure test", "luxury watch battery replacement"],
    faqs: [["How long does a battery replacement take?", "Many standard battery services can be completed promptly, while luxury or water-resistant models may take longer because inspection, resealing, and pressure testing require additional care."], ["What types of watches can be serviced?", "The workshop handles a broad range of quartz watches, including luxury, vintage, solar, kinetic, and more complex models, subject to inspection and parts availability."], ["Is DIY battery replacement safe?", "DIY service can damage a case, seal, or movement. Professional service is preferable for valuable, water-resistant, or complicated watches."], ["How do I know a new battery is needed?", "Stopped hands, incorrect time, moisture under the crystal, or unusual ticking behavior are common reasons to arrange a diagnostic and battery service."]]
  },
  "vintage-watch-crystal-replacement-value": {
    title: "Does Crystal Replacement Affect Luxury Watch Value? | It’s About Time",
    headline: "Does Crystal Replacement Affect Luxury Watch Investment Value?",
    description: "Learn how vintage watch crystal replacement can affect investment value, when OEM parts preserve value, and when aftermarket replacements create collector concerns.",
    path: "/vintage-watch-crystal-replacement-value/",
    image: "/assets/articles/batch2-vintage-crystal-hero.jpg",
    imageWidth: 1441,
    imageHeight: 747,
    imageAlt: "Broken vintage Rolex watch crystal requiring professional replacement",
    publishedTime: "2026-02-16T00:00:00-04:00",
    modifiedTime: "2026-03-26T19:14:01+00:00",
    section: "Vintage Watches",
    keywords: ["vintage watch crystal replacement", "watch crystal investment value", "OEM watch crystal", "vintage Rolex crystal", "luxury watch restoration"],
    faqs: [["How much value can a luxury watch lose with crystal replacement?", "The impact varies with rarity, model, condition, material, and documentation. Poorly specified or undocumented aftermarket work usually creates more concern than a correct, documented replacement."], ["Should I replace a cracked crystal on a vintage Rolex?", "Replace it when damage threatens the movement or water resistance, preferably with a correct OEM or period-appropriate part and complete records."], ["Can aftermarket crystals maintain value?", "High-quality aftermarket parts may minimize the effect when OEM options are unavailable, but OEM or correct original-specification parts remain preferable for collectible watches."], ["Is sapphire replacement worthwhile on vintage watches?", "It is generally not the first choice for collectible vintage pieces if sapphire was not original. It can be more acceptable on modern tool watches where durability is the priority."]]
  },
  "why-taking-rolex-to-unauthorized-jeweler-costs-more": {
    title: "Why Unauthorized Rolex Repair Can Cost More | It’s About Time",
    headline: "Why Taking Your Rolex to an Unauthorized Jeweler Can Cost You More in the Long Run",
    description: "Unauthorized Rolex repair can cause irreversible damage and reduce resale value. Learn what specialist service includes and why it can save money long term.",
    path: "/why-taking-rolex-to-unauthorized-jeweler-costs-more/",
    image: "/assets/articles/batch-rolex-authorized-service.jpg",
    imageWidth: 1559,
    imageHeight: 801,
    imageAlt: "Rolex watch prepared for professional authorized service",
    publishedTime: "2026-04-15T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:54:41+00:00",
    section: "Rolex Service",
    keywords: ["Rolex repair", "unauthorized Rolex repair", "Rolex service specialist", "Rolex pressure testing", "Rolex repair Johns Creek"],
    faqs: [["Why should I avoid unauthorized jewelers for Rolex repairs?", "They may lack the brand-specific training, tools, and access to suitable parts required for proper service. Incorrect reassembly, lubrication or non-genuine components can lead to expensive damage and reduced reliability."], ["Does proper Rolex servicing protect long-term value?", "Correct servicing helps maintain mechanical integrity, accuracy and a documented ownership history, all of which support long-term ownership and resale value."], ["How often should I service my Rolex?", "Service intervals vary by model, condition and use. Rolex commonly recommends a service interval of roughly five to ten years; a watchmaker can advise based on the specific piece."], ["Can I walk in for a consultation?", "Yes. Walk-ins are welcome Monday through Saturday at the Johns Creek workshop."]]
  },
  "watch-pressure-test": {
    title: "Watch Pressure Test: What It Is and When You Need One | It’s About Time",
    headline: "What Is a Pressure Test on a Watch (and When You Need One)?",
    description: "A watch pressure test checks whether your seals are intact and can keep water out. Learn when testing is needed after service or before water exposure.",
    path: "/watch-pressure-test/",
    image: "/assets/articles/batch-pressure-testing-machine.jpg",
    imageWidth: 1376,
    imageHeight: 768,
    imageAlt: "Watch undergoing a professional pressure test in a testing machine",
    publishedTime: "2026-04-05T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:54:29+00:00",
    section: "Watch Care",
    keywords: ["watch pressure test", "water resistance test", "watch gasket test", "dive watch pressure test", "watch repair Johns Creek"],
    faqs: [["Does a pressure test need an authorized service center?", "Not necessarily, but the technician must have appropriate calibrated equipment and know how to act on the result."], ["Can any watch be pressure tested?", "Most watches with water-resistance ratings can be tested. Very low-rated dress watches are sometimes excluded."], ["How often should I test a dive watch?", "Once a year is a common recommendation for watches worn regularly in water."], ["Does a pressure test include the crown?", "Yes. The crown and sealing tube are evaluated along with the rest of the case."]]
  },
  "how-to-ship-watch-for-repair": {
    title: "How to Ship a Watch for Repair Safely | It’s About Time",
    headline: "How to Ship a Watch for Repair: A Step-by-Step Guide for Safe and Secure Shipping",
    description: "Learn how to pack, insure, and ship a watch safely for repair. Follow a clear process for secure mail-in watch service with confidence.",
    path: "/how-to-ship-watch-for-repair/",
    image: "/assets/articles/batch-how-to-ship-watch.jpg",
    imageWidth: 1200,
    imageHeight: 612,
    imageAlt: "Watch owner holding a gold watch before shipping it for repair",
    publishedTime: "2026-03-22T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:53:59+00:00",
    section: "Watch Repair",
    keywords: ["ship watch for repair", "mail-in watch repair", "how to pack a watch", "watch shipping insurance", "secure watch repair shipping"],
    faqs: [["Is it safe to ship a luxury watch?", "Yes, when you double-box, choose a reputable carrier, insure the watch appropriately, and use tracking with signature confirmation."], ["Should I ship the original box?", "Only if a workshop specifically requests it or it contains essential documentation. In most cases, ship the watch only."], ["How long does shipping take?", "Express services often take one to two business days, while Registered Mail can take longer but provides a stronger custody record."], ["Can you service my watch?", "It’s About Time Inc. services many major brands. Contact the workshop to discuss a particular model and repair need."]]
  },
  "foggy-watch-face-causes": {
    title: "How Weather Conditions Cause Watch Faces to Fog | It’s About Time",
    headline: "How Weather Conditions Cause Watch Faces to Fog",
    description: "Discover why weather causes watch fog, how humidity and temperature changes affect your timepiece, and practical ways to prevent condensation damage.",
    path: "/foggy-watch-face-causes/",
    image: "/assets/articles/batch-foggy-watch-face.jpg",
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: "Foggy watch face with condensation beneath the crystal",
    publishedTime: "2026-03-16T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:53:48+00:00",
    section: "Watch Care",
    keywords: ["foggy watch face", "watch condensation", "watch moisture damage", "watch pressure test", "watch gasket service"],
    faqs: [["What weather conditions cause watch fogging?", "High humidity, rapid temperature changes, and foggy or rainy conditions are common triggers. Moving between heated and cooled environments is especially likely to reveal moisture inside the case."], ["Can I prevent fogging in humid climates?", "Yes. Proper seals, periodic gasket replacement, and routine pressure testing prevent many fogging issues, even in coastal or tropical climates."], ["What should I do if my watch fogs up?", "Keep it dry at room temperature and seek professional service if fogging persists or returns within 24 hours."], ["Why does a waterproof watch still fog up?", "Water resistance depends on seals that deteriorate over time. Temperature changes can draw moisture through compromised points, making periodic service important."]]
  },
  "top-10-luxury-watch-brands-2026": {
    title: "Top 10 Luxury Watch Brands in 2026 | It’s About Time",
    headline: "Top 10 Luxury Watch Brands in 2026",
    description: "Discover the top 10 luxury watch brands in 2026, with practical buying advice for collectors and gift buyers—from Rolex and Patek Philippe to Breitling.",
    path: "/top-10-luxury-watch-brands-2026/",
    image: "/assets/articles/batch-luxury-brands-hero.jpg",
    imageWidth: 1024,
    imageHeight: 682,
    imageAlt: "Luxury Cartier watch collection representing leading luxury watch brands",
    publishedTime: "2026-03-12T00:00:00-04:00",
    modifiedTime: "2026-08-03T20:53:36+00:00",
    section: "Luxury Watches",
    keywords: ["top luxury watch brands 2026", "best luxury watch brands", "Rolex", "Patek Philippe", "Cartier watches"],
    faqs: [["What is the most popular luxury watch brand in 2026?", "Rolex remains the most widely recognized and purchased luxury watch brand globally, supported by strong name recognition and secondary-market demand."], ["What is a good first luxury watch?", "A steel Rolex sports model or an Omega Speedmaster or Seamaster are common starting points. For a dress-focused buyer, a Cartier Santos or Tank can be an excellent choice."], ["Should I insure a luxury watch?", "Specialist watch insurance is worth considering for pieces valued above a few thousand dollars, particularly to cover loss, theft, and accidental damage."], ["Is a luxury watch a good gift for a non-collector?", "Yes, when matched to the recipient’s style. Recognizable daily-wear models such as a Cartier Tank or Rolex Datejust are generally safer choices than highly specialized pieces."]]
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

function makeContactSchema() {
  const pageUrl = `${siteUrl}/contact/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contact`,
        url: pageUrl,
        name: "Contact It’s About Time",
        description: "Contact It’s About Time for watch repair, service, and showroom assistance in Johns Creek, Georgia."
      },
      {
        "@type": "LocalBusiness",
        "@id": `${pageUrl}#business`,
        name: "It’s About Time Inc.",
        url: siteUrl,
        telephone: "+1-770-442-9854",
        email: "itsabouttimeperimeter@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "11300 Medlock Bridge Rd, Suite 300",
          addressLocality: "Johns Creek",
          addressRegion: "GA",
          postalCode: "30097",
          addressCountry: "US"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "18:00"
          }
        ]
      }
    ]
  };
}

function makeRepairFormSchema() {
  const pageUrl = `${siteUrl}/repair-form/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Sell Your Luxury Watch | It’s About Time",
        description: "Submit luxury-watch details to It’s About Time in Johns Creek, Georgia to begin an informed selling conversation.",
        isPartOf: { "@id": `${siteUrl}/#website` }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Luxury Watch Purchase Inquiry",
        description: "Luxury-watch purchase inquiry for owners who want to submit watch details and begin an informed selling conversation.",
        provider: {
          "@type": "LocalBusiness",
          name: "It’s About Time Inc.",
          telephone: "+1-770-442-9854",
          email: "itsabouttimeperimeter@gmail.com"
        },
        areaServed: { "@type": "City", name: "Johns Creek" },
        url: pageUrl
      }
    ]
  };
}

function makeWorkshopSchema() {
  const pageUrl = `${siteUrl}/workshop/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Watch Repairs & Our Workshop | It’s About Time",
        description: "Explore the in-house Johns Creek workshop at It’s About Time, including watch repair, restoration, diagnostics, and repair estimates.",
        isPartOf: { "@id": `${siteUrl}/#website` }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#workshop`,
        name: "It’s About Time Watch Repair Workshop",
        url: pageUrl,
        description: "In-house watch repair and restoration workshop offering diagnostics, movement service, water-resistance testing, case care, and vintage watch repair.",
        telephone: "+1-770-442-9854",
        address: {
          "@type": "PostalAddress",
          streetAddress: "11300 Medlock Bridge Rd, Suite 300",
          addressLocality: "Johns Creek",
          addressRegion: "GA",
          postalCode: "30097",
          addressCountry: "US"
        },
        areaServed: { "@type": "City", name: "Johns Creek" },
        serviceType: ["Watch repair", "Watch restoration", "Mechanical watch service", "Water-resistance testing", "Watch diagnostics"]
      }
    ]
  };
}

function makeRolexRepairAtlantaSchema() {
  const pageUrl = `${siteUrl}/rolex-repair-atlanta/`;
  const faqItems = [
    ["How much does Rolex repair cost?", "Rolex repair costs vary depending on the issue. We evaluate the watch first and recommend only the work that is needed."],
    ["How long does Rolex repair take?", "Timing depends on the service, parts, and complexity. Some battery services can be completed the same day, while movement repairs and full servicing may take longer."],
    ["Do you use genuine Rolex parts?", "We use high-quality parts that meet original specifications and explain exactly what the watch needs during evaluation."],
    ["Do I need pressure testing after service on my Rolex?", "Pressure testing should be performed whenever the case is opened for applicable service, such as crown, crystal, Oysterquartz battery, or movement work."],
    ["Can I walk in, or do I need an appointment?", "Walk-ins are welcome at the Johns Creek location, and customers can call ahead with service questions."],
    ["Is it worth repairing a Rolex?", "In most cases, proper repair or service helps maintain both performance and long-term value."],
    ["What if I am not sure what is wrong with my Rolex?", "The workshop will inspect the watch and explain what is happening before recommending service."],
    ["Can I mail my Rolex in for repair?", "Yes. Customers who cannot visit Johns Creek can mail a Rolex for evaluation and service after receiving clear shipping instructions."]
  ] as const;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Rolex Watch Repair Atlanta | It’s About Time",
        description: "Rolex watch repair in Johns Creek serving the Atlanta area, including diagnostics, movement repair, pressure testing, crystal repair, and bracelet service.",
        primaryImageOfPage: `${siteUrl}/assets/pages/rolex-repair-atlanta-hero.jpg`,
        isPartOf: { "@id": `${siteUrl}/#website` }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Rolex Watch Repair",
        description: "In-house Rolex watch repair, diagnostics, movement service, pressure testing, crystal repair, and bracelet adjustment in Johns Creek serving Atlanta.",
        provider: {
          "@type": "ProfessionalService",
          name: "It’s About Time Inc.",
          telephone: "+1-770-442-9854",
          address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" }
        },
        areaServed: [{ "@type": "City", name: "Johns Creek" }, { "@type": "City", name: "Atlanta" }],
        serviceType: ["Rolex watch repair", "Rolex movement service", "Rolex pressure testing", "Rolex bracelet repair"],
        url: pageUrl
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
      }
    ]
  };
}

function makeBatteryReplacementServiceSchema(slug: "watch-battery-replacement-atlanta" | "watch-battery-replacement-buford" | "watch-battery-replacement-in-alpharetta") {
  const configurations = {
    "watch-battery-replacement-atlanta": { name: "Watch Battery Replacement in Atlanta, GA", description: "Professional watch battery replacement serving Atlanta from Johns Creek for luxury, vintage, waterproof, sport, and everyday watches.", image: "/assets/pages/watch-battery-replacement-atlanta.jpg", area: "Atlanta" },
    "watch-battery-replacement-buford": { name: "Watch Battery Replacement for Buford, GA", description: "Professional watch battery replacement for Buford customers, completed in Johns Creek for luxury, vintage, waterproof, sport, digital, and everyday watches.", image: "/assets/pages/watch-battery-replacement-buford.jpg", area: "Buford" },
    "watch-battery-replacement-in-alpharetta": { name: "Watch Battery Replacement for Alpharetta, GA", description: "Professional watch battery replacement for Alpharetta customers, fulfilled in Johns Creek for luxury, vintage, waterproof, and everyday watches.", image: "/assets/pages/watch-battery-replacement-alpharetta.jpg", area: "Alpharetta" }
  } as const;
  const config = configurations[slug];
  const pageUrl = `${siteUrl}/${slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: `${siteUrl}${config.image}`, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: config.area }, serviceType: ["Watch battery replacement", "Luxury watch battery replacement", "Water-resistant watch battery service"], url: pageUrl }
    ]
  };
}

function makeOmegaWatchRepairSchema(slug: "omega-watch-repair-atlanta" | "omega-watch-repair-peachtree-corners" | "omega-watch-repair-alpharetta") {
  const configurations = {
    "omega-watch-repair-atlanta": { name: "Omega Watch Repair in Atlanta, GA", description: "Expert Omega watch repair serving Atlanta from the Johns Creek workshop, including certified movement service, genuine-part replacement, restoration, and water-resistance attention.", image: "/assets/pages/omega-watch-repair-atlanta.jpg", area: "Atlanta" },
    "omega-watch-repair-peachtree-corners": { name: "Omega Watch Repair in Peachtree Corners, GA", description: "Expert Omega watch repair for Peachtree Corners collectors, completed in the Johns Creek workshop with authentic Omega components, precise servicing, restoration, and water-resistance attention.", image: "/assets/pages/omega-watch-repair-peachtree-corners.jpg", area: "Peachtree Corners" },
    "omega-watch-repair-alpharetta": { name: "Omega Watch Repair in Alpharetta, GA", description: "Expert Omega watch repair for Alpharetta collectors, completed in the Johns Creek workshop with certified movement service, genuine-part replacement, restoration, and water-resistance attention.", image: "/assets/pages/omega-watch-repair-alpharetta.jpg", area: "Alpharetta" }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  const faqs = [
    ["How long does Omega watch repair take?", "Most Omega repairs are completed within 7–14 business days, depending on the complexity of the service."],
    ["Do you use genuine Omega parts?", "Yes. We use authentic Omega parts to help your watch maintain its value, precision, and reliability."],
    ["Is there a warranty on Omega watch repairs?", "Yes. Omega repairs include warranty coverage on both parts and labor for added peace of mind."],
    ["Can I mail my Omega watch to you for repair?", "Yes. Complete the repair form for instructions on securely mailing your timepiece to the workshop."],
    ["Do you service vintage Omega models?", "Yes. Our certified watchmakers have the expertise to restore and maintain both modern and vintage Omega watches."]
  ] as const;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Service", "@id": pageUrl + "#service", name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: config.area }, serviceType: ["Omega watch repair", "Omega movement service", "Omega watch restoration", "Omega water-resistance testing"], url: pageUrl },
      { "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeBrandAuthorizedDealerHubSchema(slug: "hamilton-watches-authorized-dealer" | "luminox-watches-authorized-dealer" | "seiko-watches-authorized-dealer" | "citizen-watches" | "boluva-watches-authorized-dealer" | "g-shock-watches-authorized-dealer") {
  const configurations = {
    "hamilton-watches-authorized-dealer": { brand: "Hamilton", name: "Hamilton Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic Hamilton watches at It’s About Time in Johns Creek, including Khaki Field, Jazzmaster, Ventura, and Khaki Aviation collections with manufacturer warranty coverage.", image: "/assets/pages/hamilton-authorized-dealer-hub.jpg", faqs: [["Are you an authorized Hamilton dealer in Johns Creek?", "Yes. It’s About Time is an authorized Hamilton dealer. Every Hamilton watch sold is genuine, brand-new, and comes with a full manufacturer warranty."], ["Do you carry the Hamilton Khaki Field collection?", "Yes. The Khaki Field collection is a popular line, known for rugged style and dependable Swiss-made movements."], ["Can I get my Hamilton strap or bracelet adjusted at your store?", "Yes. The team can size a Hamilton watch for a comfortable fit and replace straps when needed."], ["Do you sell limited-edition Hamilton watches?", "Yes. Special and limited-edition Hamilton models are available. Availability changes often, so call ahead for a particular model."], ["Do Hamilton watches come with a warranty?", "Every Hamilton watch purchased from It’s About Time includes the full manufacturer warranty covering defects in materials or workmanship."], ["Can I order a specific Hamilton model through you?", "Yes. If a desired Hamilton model is not currently in stock, the team can place a special order directly with the manufacturer."]] },
    "luminox-watches-authorized-dealer": { brand: "Luminox", name: "Luminox Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic Luminox watches at It’s About Time in Johns Creek, including Navy SEAL, Bear Grylls Survival, Air, and Sea collections with manufacturer warranty coverage.", image: "/assets/pages/luminox-authorized-dealer-hub.jpg", faqs: [["Are you an authorized Luminox dealer in Johns Creek?", "Yes. It’s About Time is an authorized Luminox dealer. Every Luminox watch sold is genuine, brand-new, and comes with a full manufacturer warranty."], ["Do you carry the Luminox Navy SEAL collection?", "Yes. The Navy SEAL collection is a frequently requested line known for durability and constant night visibility."], ["Can I get my Luminox strap replaced or adjusted at your store?", "Yes. The team can help with strap replacement and adjustment for a comfortable fit."], ["Can I order a specific Luminox model through you?", "Yes. If a desired Luminox model is not currently in stock, the team can special order it directly from the manufacturer."]] },
    "seiko-watches-authorized-dealer": { brand: "Seiko", name: "Seiko Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic Seiko watches at It’s About Time in Johns Creek, including Seiko 5 Sports, Prospex, Presage, and Astron collections with manufacturer warranty coverage.", image: "/assets/pages/seiko-authorized-dealer-hub.jpg", faqs: [] },
    "citizen-watches": { brand: "Citizen", name: "Citizen Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic Citizen watches at It’s About Time in Johns Creek, including Eco-Drive, Promaster, Atomic Timekeeping, and Satellite Wave GPS collections with manufacturer warranty coverage.", image: "/assets/pages/citizen-watches-hub.jpg", faqs: [["Are you an authorized Citizen dealer in Johns Creek?", "Yes. It’s About Time is an authorized Citizen dealer. Every Citizen watch sold is genuine, brand-new, and comes with a full manufacturer warranty."], ["Do you carry the Citizen Eco-Drive collection?", "Yes. Citizen Eco-Drive watches are a popular collection, powered by light so they do not need a battery replacement."], ["Can I get my Citizen watch resized at your store?", "Yes. The team can adjust a Citizen bracelet or strap for a comfortable fit and can help with watches you already own."], ["Do you sell limited-edition Citizen watches?", "Yes. Boutique and limited-edition Citizen models, including special releases, may be available. Call ahead for a specific model."], ["Do Citizen watches come with a warranty?", "Every Citizen watch purchased from It’s About Time includes the full manufacturer warranty covering defects in materials or workmanship."], ["Can I order a specific Citizen model through you?", "Yes. If a desired Citizen model is not currently in stock, the team can place a special order directly from the manufacturer."]] },
    "boluva-watches-authorized-dealer": { brand: "Bulova", name: "Bulova Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic Bulova watches at It’s About Time in Johns Creek, including Precisionist, Marine Star, Classic, and CURV collections with manufacturer warranty coverage.", image: "/assets/pages/bulova-authorized-dealer-hub.jpg", faqs: [["Are you an authorized Bulova dealer in Johns Creek?", "Yes. It’s About Time is an authorized Bulova dealer. Every Bulova watch sold is genuine, brand-new, and comes with a full manufacturer warranty."], ["Do you carry the Bulova Precisionist collection?", "Yes. The Bulova Precisionist series is a popular line known for its accuracy and smooth sweeping seconds hand."], ["Can I get my Bulova watch resized at your store?", "Yes. The team can adjust a Bulova bracelet or strap for a comfortable fit at purchase and assist with watches you already own."], ["Do you sell limited-edition Bulova watches?", "Yes. Boutique and limited-edition Bulova models may be available. Call ahead to check current availability."], ["Do Bulova watches come with a warranty?", "Every Bulova watch purchased from It’s About Time includes the full manufacturer warranty protecting against defects in materials or workmanship."], ["Can I order a specific Bulova model through you?", "Yes. If a desired Bulova model is not in stock, the team can place a special order directly from the manufacturer."]] },
    "g-shock-watches-authorized-dealer": { brand: "G-SHOCK", name: "G-SHOCK Watches Authorized Dealer in Johns Creek, GA", description: "Explore authentic G-SHOCK watches at It’s About Time in Johns Creek, including Master of G, G-STEEL, MR-G, and GA Series collections with manufacturer warranty coverage.", image: "/assets/pages/gshock-authorized-dealer-hub.jpg", faqs: [["Are you an authorized G-SHOCK dealer in Johns Creek?", "Yes. It’s About Time is an authorized G-SHOCK dealer. Every G-SHOCK watch sold is genuine, brand-new, and comes with a full manufacturer warranty."], ["Do you carry the G-SHOCK Master of G series?", "Yes. Master of G is a popular line with models built for durability and specific environments such as diving, aviation, and field use."], ["Can I get my G-SHOCK band replaced or adjusted at your store?", "Yes. The team can size or replace G-SHOCK bands and straps to help ensure a comfortable fit."], ["Do you sell limited-edition or collaboration G-SHOCK watches?", "Yes. Special-edition and collaboration G-SHOCK models may be available. Call ahead to check current stock."], ["Do G-SHOCK watches come with a warranty?", "Every G-SHOCK purchased from It’s About Time includes the full manufacturer warranty covering defects in materials or workmanship."], ["Can I order a specific G-SHOCK model through you?", "Yes. If a desired G-SHOCK model is not in stock, the team can place a special order directly from the manufacturer."]] }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  const graph: Record<string, unknown>[] = [
    { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
    { "@type": "Store", "@id": pageUrl + "#store", name: "It’s About Time Inc.", description: config.brand + " authorized watch dealer with a curated watch showroom in Johns Creek, GA.", telephone: "+1-770-442-9854", url: pageUrl, image: siteUrl + config.image, address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" }, areaServed: { "@type": "City", name: "Johns Creek" }, makesOffer: { "@type": "Offer", itemOffered: { "@type": "Product", category: "Watches", brand: { "@type": "Brand", name: config.brand } } } }
  ];
  if (config.faqs.length) graph.push({ "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) });
  return { "@context": "https://schema.org", "@graph": graph };
}

function makeAtlantaBrandDealerSchema(slug: "hamilton-watches-at-its-about-time-inc-authorized-dealer-in-atlanta" | "luminox-watches-at-its-about-time-inc-authorized-dealer-atlanta" | "seiko-watches-at-its-about-time-inc-authorized-dealer-atlanta") {
  const configurations = {
    "hamilton-watches-at-its-about-time-inc-authorized-dealer-in-atlanta": { brand: "Hamilton", name: "Hamilton Watches Authorized Dealer in Atlanta, GA", description: "Explore authentic Hamilton watches in Atlanta at It’s About Time, including Khaki Field, Jazzmaster, sport, dress, and specialty models with manufacturer warranty coverage.", image: "/assets/pages/hamilton-authorized-dealer-atlanta.jpg" },
    "luminox-watches-at-its-about-time-inc-authorized-dealer-atlanta": { brand: "Luminox", name: "Luminox Watches Authorized Dealer in Atlanta, GA", description: "Explore authentic Luminox watches in Atlanta at It’s About Time, including Navy SEAL, Atacama Field, Air Series, professional diving, and self-powered illumination models.", image: "/assets/pages/luminox-authorized-dealer-atlanta.jpg" },
    "seiko-watches-at-its-about-time-inc-authorized-dealer-atlanta": { brand: "Seiko", name: "Seiko Watches Authorized Dealer in Atlanta, GA", description: "Explore authentic Seiko watches in Atlanta at It’s About Time, including Prospex, Presage, Astron GPS Solar, Seiko 5 Sports, and everyday or dress styles.", image: "/assets/pages/seiko-authorized-dealer-atlanta.jpg" }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Store", "@id": pageUrl + "#store", name: "It’s About Time Inc.", description: config.brand + " authorized watch dealer with a curated watch showroom in Johns Creek, GA.", telephone: "+1-770-442-9854", url: pageUrl, image: siteUrl + config.image, address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" }, areaServed: { "@type": "City", name: "Atlanta" }, makesOffer: { "@type": "Offer", itemOffered: { "@type": "Product", category: "Watches", brand: { "@type": "Brand", name: config.brand } } } }
    ]
  };
}

function makeCitizenDealerSchema(slug: "citizen-watches-at-its-about-time-inc-authorized-dealer-atlanta" | "citizen-watches-at-its-about-time-inc-authorized-dealer-cumming" | "citizen-watches-at-its-about-time-inc-authorized-dealer-roswell") {
  const configurations = {
    "citizen-watches-at-its-about-time-inc-authorized-dealer-atlanta": { name: "Citizen Watches Authorized Dealer in Atlanta, GA", description: "Explore Citizen watches for Atlanta-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", image: "/assets/pages/citizen-authorized-dealer-atlanta.jpg", area: "Atlanta" },
    "citizen-watches-at-its-about-time-inc-authorized-dealer-cumming": { name: "Citizen Watches Authorized Dealer in Cumming, GA", description: "Explore Citizen watches for Cumming-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", image: "/assets/pages/citizen-authorized-dealer-cumming.jpg", area: "Cumming" },
    "citizen-watches-at-its-about-time-inc-authorized-dealer-roswell": { name: "Citizen Watches Authorized Dealer in Roswell, GA", description: "Explore Citizen watches for Roswell-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", image: "/assets/pages/citizen-authorized-dealer-roswell.jpg", area: "Roswell" }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Store", "@id": pageUrl + "#store", name: "It’s About Time Inc.", description: "Authorized Citizen watch dealer with a curated watch showroom in Johns Creek, GA.", telephone: "+1-770-442-9854", url: pageUrl, image: siteUrl + config.image, address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" }, areaServed: { "@type": "City", name: config.area }, makesOffer: { "@type": "Offer", itemOffered: { "@type": "Product", category: "Watches", brand: { "@type": "Brand", name: "Citizen" } } } }
    ]
  };
}

function makeBreitlingNomosRepairSchema(slug: "breitling-watch-repair-athens" | "breitling-watch-repair-atlanta" | "nomos-watch-repair-atlanta") {
  const configurations = {
    "breitling-watch-repair-athens": { name: "Breitling Watch Repair in Athens, GA", description: "Expert Breitling watch repair serving Athens from the Johns Creek workshop, including battery replacement, movement overhaul, crystal replacement, strap replacement, and water-resistance testing.", image: "/assets/pages/breitling-watch-repair-athens.jpg", area: { "@type": "City", name: "Athens" }, serviceType: ["Breitling watch repair", "Breitling battery replacement", "Breitling movement overhaul", "Breitling crystal replacement", "Breitling water-resistance testing"], faqs: [["How long does Breitling watch repair take?", "The legacy page estimates that many repairs take 7–14 business days, depending on the complexity. The final timeline follows inspection."], ["Do you offer warranty coverage on Breitling repairs?", "Yes. The legacy source states that warranty coverage is provided for parts and labor."], ["Can I mail my Breitling watch in for repair?", "Yes. Use the repair form to start and follow secure mail-in guidance if visiting the Johns Creek workshop is not feasible."]] },
    "breitling-watch-repair-atlanta": { name: "Breitling Watch Repair in Atlanta, GA", description: "Expert Breitling watch repair serving Atlanta from the Johns Creek workshop, including battery replacement, movement overhaul, crystal replacement, strap replacement, and water-resistance testing.", image: "/assets/pages/breitling-watch-repair-atlanta.jpg", area: { "@type": "City", name: "Atlanta" }, serviceType: ["Breitling watch repair", "Breitling battery replacement", "Breitling movement overhaul", "Breitling crystal replacement", "Breitling water-resistance testing"], faqs: [["How long does Breitling watch repair take?", "The legacy page estimates that many repairs take 7–14 business days, depending on the complexity. The final timeline follows inspection."], ["Do you offer warranty coverage on Breitling repairs?", "Yes. The legacy source states that warranty coverage is provided for parts and labor."], ["Can I mail my Breitling watch in for repair?", "Yes. Use the repair form to start and follow secure mail-in guidance if visiting the Johns Creek workshop is not feasible."]] },
    "nomos-watch-repair-atlanta": { name: "Nomos Watch Repair in Atlanta, GA", description: "Nomos watch repair serving Atlanta from the Johns Creek workshop, including mechanical movement service, crown, stem and hand repair, crystal replacement, case and strap care, and water-resistance testing.", image: "/assets/pages/nomos-watch-repair-atlanta.jpg", area: { "@type": "City", name: "Atlanta" }, serviceType: ["Nomos watch repair", "Nomos mechanical movement service", "Nomos crown and stem repair", "Nomos crystal replacement", "Nomos water-resistance testing"], faqs: [["How long does Nomos watch repair take?", "The legacy source notes that many standard repairs take 7–14 business days depending on complexity. The final timing follows inspection."], ["Do you use original Nomos parts?", "The source describes genuine Nomos parts being used whenever available for the model and service required."], ["Can I ship my Nomos watch for repair?", "Yes. Start with the repair form and follow secure mail-in guidance for an easy shipping process."]] }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Service", "@id": pageUrl + "#service", name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: config.area, serviceType: config.serviceType, url: pageUrl },
      { "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeTagHeuerRepairSchema(slug: "tag-heuer-watch-repair-landing" | "tag-heuer-watch-repair-atlanta" | "tag-heuer-watch-repair-nashville") {
  const configurations = {
    "tag-heuer-watch-repair-landing": { name: "Tag Heuer Watch Repair", description: "Tag Heuer repair with free estimate guidance, genuine parts, insured shipping, battery service, movement overhaul, crystal, band, hand, stem, crown, and case or bracelet service.", image: "/assets/pages/tag-heuer-watch-repair-landing.jpg", area: { "@type": "Country", name: "United States" }, faqs: [["What Tag Heuer repairs are available?", "The service guide includes battery, band, hand, crystal, stem and crown, quartz movement, mechanical movement, and case or bracelet polishing services."], ["Which Tag Heuer models do you service?", "The source names Formula 1, Aquaracer, Link, Carrera, Monaco, Grand Carrera, and Autavia models, and excludes smart watches."], ["How do I request an estimate?", "Begin through the repair form, provide model and service details, and follow secure shipping or workshop guidance."], ["How soon is a mail-in estimate provided?", "The source process describes a free estimate within 24–48 hours after the watch is received for inspection."]] },
    "tag-heuer-watch-repair-atlanta": { name: "Tag Heuer Watch Repair in Atlanta, GA", description: "Certified Tag Heuer watch repair serving Atlanta from the Johns Creek workshop, including movement overhaul, battery, strap and bracelet care, polishing, crystal replacement, and water-resistance testing.", image: "/assets/pages/tag-heuer-watch-repair-atlanta.jpg", area: { "@type": "City", name: "Atlanta" }, faqs: [["How long does a Tag Heuer repair take?", "Legacy guidance notes that battery service can take a few days, while more intricate repair may take a couple of weeks. The actual timeline depends on the watch and scope of work."], ["Can I mail my Tag Heuer in for repair?", "Yes. Begin with the repair form and follow secure mail-in guidance for service from Atlanta or elsewhere."], ["What Tag Heuer repairs do you handle?", "The Atlanta source covers movement overhaul, battery replacement, strap and bracelet work, polishing and cleaning, crystal replacement, and water-resistance testing."], ["Is warranty coverage available?", "Yes. The legacy Atlanta page states that repair service includes warranty coverage."], ["Will I receive an estimate before work begins?", "Yes. The repair process includes a transparent estimate and approval step before repair work starts."]] },
    "tag-heuer-watch-repair-nashville": { name: "Tag Heuer Watch Repair for Nashville Owners", description: "Nationwide insured-shipping Tag Heuer repair service for Nashville owners, with free estimate guidance, genuine parts, battery service, movement overhaul, crystal, band, hand, stem, crown, and case or bracelet service.", image: "/assets/pages/tag-heuer-watch-repair-nashville.jpg", area: { "@type": "City", name: "Nashville" }, faqs: [["What Tag Heuer repairs are available?", "The service guide includes battery, band, hand, crystal, stem and crown, quartz movement, mechanical movement, and case or bracelet polishing services."], ["Which Tag Heuer models do you service?", "The source names Formula 1, Aquaracer, Link, Carrera, Monaco, Grand Carrera, and Autavia models, and excludes smart watches."], ["How do I request an estimate?", "Begin through the repair form, provide model and service details, and follow secure shipping or workshop guidance."], ["How soon is a mail-in estimate provided?", "The source process describes a free estimate within 24–48 hours after the watch is received for inspection."]] }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Service", "@id": pageUrl + "#service", name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: config.area, serviceType: ["Tag Heuer watch repair", "Tag Heuer movement overhaul", "Tag Heuer battery replacement", "Tag Heuer crystal replacement", "Tag Heuer water-resistance testing"], url: pageUrl },
      { "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeHamiltonWatchRepairSchema(slug: "hamilton-watch-repair-athens" | "hamilton-watch-repair-atlanta" | "hamilton-watch-repair-suwanee") {
  const configurations = {
    "hamilton-watch-repair-athens": { name: "Hamilton Watch Repair in Athens, GA", description: "Expert Hamilton watch repair for Athens owners from the Johns Creek workshop, including battery service, movement overhaul, crystal and strap replacement, and water-resistance testing.", image: "/assets/pages/hamilton-watch-repair-athens.jpg", area: "Athens", faqs: [["How long does Hamilton watch repair take?", "Most Hamilton repairs are completed within 7–14 business days, depending on the complexity of the service."], ["Do you offer a warranty on Hamilton watch repairs?", "Yes. We provide warranty coverage on parts and labor for added peace of mind."], ["Can I mail my Hamilton watch in for repair?", "Yes. Start with the repair form and follow secure mail-in guidance for service from Athens."], ["Can you service mechanical and quartz Hamilton watches?", "We assess both mechanical and quartz Hamilton watches and recommend the appropriate battery, movement, crystal, strap, or water-resistance service."], ["Will you explain the recommended repair first?", "Yes. We inspect the watch and provide clear next steps based on its model, condition, and service needs."]] },
    "hamilton-watch-repair-atlanta": { name: "Hamilton Watch Repair in Atlanta, GA", description: "Expert Hamilton watch repair serving Atlanta from the Johns Creek workshop, including battery service, mechanical and quartz movement overhaul, crystal and strap replacement, and water-resistance testing.", image: "/assets/pages/hamilton-watch-repair-atlanta.jpg", area: "Atlanta", faqs: [["How long does Hamilton watch repair take?", "Most Hamilton repairs are completed within 7–14 business days, depending on the complexity of the service."], ["Do you offer a warranty on Hamilton watch repairs?", "Yes. We provide warranty coverage on parts and labor for added peace of mind."], ["Can I mail my Hamilton watch in for repair?", "Yes. Start with the repair form and follow secure mail-in guidance for service from Atlanta."], ["Can you service mechanical and quartz Hamilton watches?", "We assess both mechanical and quartz Hamilton watches and recommend the appropriate battery, movement, crystal, strap, or water-resistance service."], ["Will you explain the recommended repair first?", "Yes. We inspect the watch and provide clear next steps based on its model, condition, and service needs."]] },
    "hamilton-watch-repair-suwanee": { name: "Hamilton Watch Repair in Suwanee, GA", description: "Expert Hamilton watch repair for Suwanee owners from the nearby Johns Creek workshop, including battery service, movement overhaul, crystal and strap replacement, and water-resistance testing.", image: "/assets/pages/hamilton-watch-repair-suwanee.jpg", area: "Suwanee", faqs: [["How long does Hamilton watch repair take?", "Most Hamilton repairs are completed within 7–14 business days, depending on the complexity of the service."], ["Do you offer a warranty on Hamilton watch repairs?", "Yes. We provide warranty coverage on parts and labor for added peace of mind."], ["Can I mail my Hamilton watch in for repair?", "Yes. Start with the repair form and follow secure mail-in guidance for service from Suwanee."], ["Can you service mechanical and quartz Hamilton watches?", "We assess both mechanical and quartz Hamilton watches and recommend the appropriate battery, movement, crystal, strap, or water-resistance service."], ["Will you explain the recommended repair first?", "Yes. We inspect the watch and provide clear next steps based on its model, condition, and service needs."]] }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Service", "@id": pageUrl + "#service", name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: config.area }, serviceType: ["Hamilton watch repair", "Hamilton movement overhaul", "Hamilton crystal replacement", "Hamilton water-resistance testing"], url: pageUrl },
      { "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeCartierServiceSchema(slug: "expert-cartier-watch-repair-in-atlanta" | "cartier-watch-repair-cumming" | "cartier-watch-battery-replacement") {
  const configurations = {
    "expert-cartier-watch-repair-in-atlanta": { name: "Cartier Watch Repair in Atlanta, GA", description: "Expert Cartier watch repair serving Atlanta from the Johns Creek workshop, including movement service, polishing, crystal and crown repair, water-resistance testing, and restoration.", image: "/assets/pages/cartier-watch-repair-atlanta.jpg", area: "Atlanta", serviceType: ["Cartier watch repair", "Cartier movement overhaul", "Cartier watch restoration", "Cartier water-resistance testing"], faqs: [["What Cartier repair services do you provide?", "We provide movement work, polishing, water-resistance attention, crystal replacement, crown and stem repair, and dedicated Cartier battery service."], ["How long does Cartier repair take?", "The timeframe depends on the model, condition, parts, and repair scope. An inspection provides the appropriate timeline."], ["Can I mail my Cartier in for repair?", "Yes. Complete the repair form, then follow secure shipping guidance for mail-in service."], ["Do you service vintage Cartier watches?", "We assess modern and vintage Cartier timepieces individually, with attention to condition and parts availability."], ["When should a Cartier be serviced?", "Performance, wear, moisture exposure, and model-specific needs all matter. The legacy guideline recommends evaluating maintenance about every three to five years."]] },
    "cartier-watch-repair-cumming": { name: "Cartier Watch Repair in Cumming, GA", description: "Expert Cartier watch repair for Cumming owners, completed in the Johns Creek workshop with specialist care for battery service, polishing, pressure testing, movement work, and restoration.", image: "/assets/pages/cartier-watch-repair-cumming.jpg", area: "Cumming", serviceType: ["Cartier watch repair", "Cartier movement overhaul", "Cartier polishing", "Cartier water-resistance testing"], faqs: [["What Cartier services are available for Cumming owners?", "We provide battery service, pressure testing, polishing, crystal care, movement maintenance, and repair or overhaul work as appropriate."], ["Do I need to visit from Cumming to begin a repair?", "No. You can start through the repair form, then visit the workshop or use secure mail-in guidance."], ["Can you polish a Cartier case or bracelet?", "We assess the watch and its finish before recommending careful polishing or cleaning work."], ["Do you check water resistance after service?", "For applicable models, we provide diagnostics, resealing attention, and pressure testing as appropriate."], ["Can you service an older Cartier watch?", "We assess modern and vintage Cartier watches individually based on condition and service needs."]] },
    "cartier-watch-battery-replacement": { name: "Cartier Watch Battery Replacement", description: "Specialist Cartier watch battery replacement in Johns Creek with proper tools, battery diagnostics, gasket attention, resealing, and pressure testing when appropriate.", image: "/assets/pages/cartier-watch-battery-replacement.png", area: "Johns Creek", serviceType: ["Cartier watch battery replacement", "Luxury watch battery service", "Cartier gasket and seal inspection", "Cartier pressure testing"], faqs: [["Can a dead battery damage a Cartier watch?", "Yes. An old battery left too long can leak and damage the movement, turning routine service into a more serious repair."], ["How long does a Cartier battery replacement take?", "Timing depends on the model and what the service requires. We provide a clear timeframe after inspection."], ["Can I mail my Cartier in for battery replacement?", "Yes. If you cannot visit Johns Creek, you can mail the watch in and receive the same in-house service process."], ["Can any watch shop replace a Cartier battery?", "Cartier cases require careful handling, proper tools, and attention to the gasket and seal. A watch-focused repair shop is the safer choice."], ["Does a Cartier need pressure testing after battery service?", "For a water-resistant watch or one exposed to moisture, pressure testing is recommended after the case is opened and resealed."]] }
  } as const;
  const config = configurations[slug];
  const pageUrl = siteUrl + "/" + slug + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": pageUrl + "#webpage", url: pageUrl, name: config.name, description: config.description, primaryImageOfPage: siteUrl + config.image, isPartOf: { "@id": siteUrl + "/#website" } },
      { "@type": "Service", "@id": pageUrl + "#service", name: config.name, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: config.area }, serviceType: config.serviceType, url: pageUrl },
      { "@type": "FAQPage", "@id": pageUrl + "#faq", mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeLocalWatchRepairSchema(slug: "watch-repair-atlanta" | "watch-repair-in-dunwoody" | "watch-repair-buford" | "watch-repair-alpharetta" | "watch-repair-buckhead" | "watch-repair-suwanee" | "watch-repair-peachtree-corners" | "watch-repair-cumming" | "watch-repair-chamblee" | "watch-repair-brookhaven") {
  const configurations = {
    "watch-repair-atlanta": {
      title: "Watch Repair in Atlanta, GA | It’s About Time",
      description: "Professional watch repair serving Atlanta from the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-atlanta.jpg",
      area: "Atlanta",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [
        ["How long does watch repair take?", "Most standard watch repairs are completed within 7–14 business days. Smaller services such as battery replacement or strap adjustments can often be handled much faster."],
        ["Do you offer a warranty on watch repair services?", "Yes. Repairs completed by It’s About Time include warranty coverage on parts and labor, giving you confidence that your timepiece is protected."],
        ["Can I mail my watch in for repair if I don’t live in Atlanta?", "Absolutely. Many customers use our secure mail-in service. Start the repair form for clear next steps, then follow the recommended shipping guidance to send your watch safely."],
        ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches, including restoration work when it is appropriate for the condition of the timepiece."],
        ["Do you repair water or humidity damage?", "Yes. We provide resealing and water-resistance attention, and we can assess and restore watches affected by moisture or humidity damage."]
      ]
    },
    "watch-repair-in-dunwoody": {
      title: "Watch Repair in Dunwoody, GA | It’s About Time",
      description: "Professional watch repair for Dunwoody customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-dunwoody.jpg",
      area: "Dunwoody",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [
        ["How long does watch repair take?", "Most standard watch repairs are completed within 7–14 business days. Smaller services such as battery replacement or strap adjustments can often be handled much faster."],
        ["Do you offer a warranty on watch repair services?", "Yes. Repairs completed by It’s About Time include warranty coverage on parts and labor, giving you confidence that your timepiece is protected."],
        ["Can I mail my watch in for repair if I live in Dunwoody?", "Absolutely. Many customers use our secure mail-in service. Start the repair form for clear next steps, then follow the recommended shipping guidance to send your watch safely."],
        ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches, including restoration work when it is appropriate for the condition of the timepiece."],
        ["Do you repair water or humidity damage?", "Yes. We provide resealing and water-resistance attention, and we can assess and restore watches affected by moisture or humidity damage."]
      ]
    },
    "watch-repair-buford": {
      title: "Watch Repair in Buford, GA | It’s About Time",
      description: "Professional watch repair for Buford customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-buford.jpg",
      area: "Buford",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [
        ["How long does watch repair take?", "Most standard watch repairs are completed within 7–14 business days. Smaller services such as battery replacement or strap adjustments can often be handled much faster."],
        ["Do you offer a warranty on watch repair services?", "Yes. Repairs completed by It’s About Time include warranty coverage on parts and labor, giving you confidence that your timepiece is protected."],
        ["Can I mail my watch in for repair if I live in Buford?", "Absolutely. Many customers use our secure mail-in service. Start the repair form for clear next steps, then follow the recommended shipping guidance to send your watch safely."],
        ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches, including restoration work when it is appropriate for the condition of the timepiece."],
        ["Do you repair water or humidity damage?", "Yes. We provide resealing and water-resistance attention, and we can assess and restore watches affected by moisture or humidity damage."]
      ]
    },
    "watch-repair-alpharetta": {
      title: "Watch Repair in Alpharetta, GA | It’s About Time",
      description: "Professional watch repair for Alpharetta customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-alpharetta.jpg",
      area: "Alpharetta",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Alpharetta?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-buckhead": {
      title: "Watch Repair in Buckhead, GA | It’s About Time",
      description: "Professional watch repair for Buckhead customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-buckhead.jpg",
      area: "Buckhead",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Buckhead?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-suwanee": {
      title: "Watch Repair in Suwanee, GA | It’s About Time",
      description: "Professional watch repair for Suwanee customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-suwanee.jpg",
      area: "Suwanee",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Suwanee?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-peachtree-corners": {
      title: "Watch Repair in Peachtree Corners, GA | It’s About Time",
      description: "Professional watch repair for Peachtree Corners customers, completed in the Johns Creek workshop for luxury, modern, mechanical, quartz, and vintage watches.",
      image: "/assets/pages/watch-repair-peachtree-corners.jpg",
      area: "Peachtree Corners",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Peachtree Corners?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We service modern, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-cumming": {
      title: "Watch Repair in Cumming, GA | It’s About Time",
      description: "Professional watch repair for Cumming customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-cumming.jpg",
      area: "Cumming",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Cumming?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-chamblee": {
      title: "Watch Repair in Chamblee, GA | It’s About Time",
      description: "Professional watch repair for Chamblee customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-chamblee.jpg",
      area: "Chamblee",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take?", "Most standard repairs are completed within 7–14 business days, while smaller services may be completed faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs include warranty coverage on parts and labor."], ["Can I mail my watch in for repair if I live in Chamblee?", "Yes. Start the repair form, then use the recommended shipping guidance for secure mail-in service."], ["What types of watches do you service?", "We work on everyday, luxury, mechanical, quartz, and vintage watches."], ["Do you repair water or humidity damage?", "Yes. We assess moisture damage and provide the appropriate resealing and restoration."]]
    },
    "watch-repair-brookhaven": {
      title: "Watch Repair in Brookhaven, GA | It’s About Time",
      description: "Expert watch repair for Brookhaven customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.",
      image: "/assets/pages/watch-repair-brookhaven.jpg",
      area: "Brookhaven",
      serviceType: ["Watch repair", "Luxury watch repair", "Watch restoration", "Water-damage repair"],
      faqs: [["How long does watch repair take in Brookhaven?", "Most standard watch repairs are completed within 7–14 business days. Smaller services such as battery replacement or strap adjustments can often be handled much faster."], ["Do you offer a warranty on watch repair services?", "Yes. Repairs completed by It’s About Time include warranty coverage on parts and labor, giving you confidence that your timepiece is protected."], ["Can I mail my watch in for repair if I live in Brookhaven?", "Absolutely. Many Brookhaven customers use our secure mail-in service. Start the repair form for clear next steps, then follow the recommended shipping guidance to send your watch safely."], ["What types of watches do you service in Brookhaven?", "We work on everyday, luxury, mechanical, quartz, and vintage watches, including restoration work when it is appropriate for the condition of the timepiece."], ["Do you repair water or humidity damage?", "Yes. We provide resealing and water-resistance attention, and we can assess and restore watches affected by moisture or humidity damage."]]
    }
  } as const;
  const config = configurations[slug];
  const pageUrl = `${siteUrl}/${slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: config.title, description: config.description, primaryImageOfPage: `${siteUrl}${config.image}`, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: `Watch Repair for ${config.area}`, description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: config.area }, serviceType: config.serviceType, url: pageUrl },
      { "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: config.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
    ]
  };
}

function makeWatchBandServiceSchema(slug: "luxury-watch-strap-band-replacement" | "watch-band-repair" | "watch-band-replacement") {
  const configurations = {
    "luxury-watch-strap-band-replacement": {
      title: "Luxury Watch Strap and Band Replacement in Atlanta, GA | It’s About Time",
      description: "Luxury watch strap and band replacement in Johns Creek for leather, alligator, rubber, NATO, nylon, and metal bracelets, with professional fitting and mail-in options.",
      image: "/assets/pages/luxury-watch-strap-band-replacement.png",
      serviceType: ["Luxury watch strap replacement", "Watch band replacement", "Watch bracelet sizing", "Strap fitting"],
      questions: ["Can you replace the strap on any watch brand?", "Do you use genuine or aftermarket straps?", "How long does a strap replacement take?", "My bracelet is stretched. Can it be repaired, or does it need to be replaced?", "Do I need an appointment?", "Can I mail my watch in for strap replacement?"]
    },
    "watch-band-repair": {
      title: "Watch Band Repair in Johns Creek, GA | It’s About Time",
      description: "Watch band repair in Johns Creek, including clasp assessment, bracelet and link repair guidance, pin and spring-bar inspection, sizing, and mail-in options.",
      image: "/assets/pages/watch-band-repair-workshop.jpg",
      serviceType: ["Watch band repair", "Bracelet repair", "Watch clasp repair", "Watch band sizing"],
      questions: ["Can you repair a stretched watch bracelet?", "Can you fix a broken clasp?", "Can you replace missing pins or spring bars?", "Do I need an appointment for watch band repair?", "How long does watch band repair take?", "Can I mail my watch in?"]
    },
    "watch-band-replacement": {
      title: "Watch Band Replacement in Johns Creek, GA | It’s About Time",
      description: "Watch band replacement in Johns Creek for leather, alligator, rubber, NATO, nylon, and metal bracelets, with professional fitting for luxury and everyday watches.",
      image: "/assets/pages/watch-band-replacement-leather.jpg",
      serviceType: ["Watch band replacement", "Leather watch strap replacement", "Watch bracelet replacement", "Watch strap fitting"],
      questions: ["Can you replace the band on any watch?", "Do you offer genuine replacement straps?", "Can you replace a leather strap while I wait?", "Can you replace a metal watch bracelet?", "Do I need an appointment?", "Can I mail in a watch for band replacement?"]
    }
  } as const;
  const config = configurations[slug];
  const pageUrl = `${siteUrl}/${slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: config.title, description: config.description, primaryImageOfPage: `${siteUrl}${config.image}`, isPartOf: { "@id": `${siteUrl}/#website` } },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: config.serviceType[0], description: config.description, provider: { "@type": "ProfessionalService", name: "It’s About Time Inc.", telephone: "+1-770-442-9854", address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" } }, areaServed: { "@type": "City", name: "Johns Creek" }, serviceType: config.serviceType, url: pageUrl },
      { "@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: config.questions.map(name => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: "Contact our Johns Creek workshop for a personalized evaluation, timing, and clear next-step guidance." } })) }
    ]
  };
}

function makeRolexBraceletStretchSchema() {
  const pageUrl = `${siteUrl}/rolex-bracelet-stretch-repair/`;
  const faqItems = [
    ["Can Rolex bracelet stretch be fixed?", "In many cases, yes. The bracelet should be inspected first to determine whether tightening, repair, cleaning, or replacement makes sense."],
    ["Is Rolex bracelet stretch actually metal stretching?", "Usually, no. Looseness develops as links, pins, screws, and connection points wear over time."],
    ["Should I keep wearing a loose Rolex bracelet?", "It is better to have it inspected because a loose bracelet can continue to wear and may make the watch feel less secure."],
    ["Can I mail in my Rolex bracelet for repair?", "Possibly. Contact the shop first, then follow the recommended shipping steps if mail-in service is appropriate."],
    ["How long does Rolex bracelet stretch repair take?", "Timing depends on condition and whether the bracelet needs tightening, cleaning, repair, or replacement parts. The workshop provides an estimated timeline after inspection."],
    ["Does It’s About Time Inc. handle other Rolex services?", "Yes. The workshop also offers Rolex battery replacement, repair, and service beyond bracelet wear."]
  ] as const;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Rolex Bracelet Stretch Repair in Johns Creek, GA | It’s About Time",
        description: "Rolex bracelet stretch repair in Johns Creek, including inspection, tightening, clasp and link assessment, repair guidance, and mail-in options.",
        primaryImageOfPage: `${siteUrl}/assets/pages/rolex-bracelet-stretch-repair.png`,
        isPartOf: { "@id": `${siteUrl}/#website` }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Rolex Bracelet Stretch Repair",
        description: "Rolex bracelet inspection, tightening guidance, clasp and link assessment, repair, cleaning, and replacement recommendations in Johns Creek.",
        provider: {
          "@type": "ProfessionalService",
          name: "It’s About Time Inc.",
          telephone: "+1-770-442-9854",
          address: { "@type": "PostalAddress", streetAddress: "11300 Medlock Bridge Rd, Suite 300", addressLocality: "Johns Creek", addressRegion: "GA", postalCode: "30097", addressCountry: "US" }
        },
        areaServed: { "@type": "City", name: "Johns Creek" },
        serviceType: ["Rolex bracelet repair", "Rolex bracelet stretch inspection", "Rolex clasp repair", "Rolex bracelet adjustment"],
        url: pageUrl
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
      }
    ]
  };
}

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

  if (slug === "repair-form") {
    return {
      title: { absolute: "Sell Your Luxury Watch | It’s About Time" },
      description: "Submit your luxury watch details to It’s About Time in Johns Creek and begin an informed, no-obligation selling conversation.",
      keywords: ["sell luxury watch", "sell watch Johns Creek", "watch purchase inquiry", "sell Rolex Atlanta", "luxury watch valuation"],
      alternates: { canonical: "/repair-form/" },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "/repair-form/",
        siteName: "It’s About Time",
        title: "Sell Your Luxury Watch | It’s About Time",
        description: "Submit your luxury watch details and begin an informed selling conversation with It’s About Time in Johns Creek.",
        images: [{ url: "/assets/pages/watch-submission-workbench.jpg", width: 1024, height: 684, alt: "It’s About Time watchmaker working at the repair bench" }]
      },
      twitter: {
        card: "summary_large_image",
        title: "Sell Your Luxury Watch | It’s About Time",
        description: "Submit your luxury watch details and begin an informed selling conversation with It’s About Time in Johns Creek.",
        images: ["/assets/pages/watch-submission-workbench.jpg"]
      }
    };
  }

  if (slug === "workshop") {
    return {
      title: { absolute: "Watch Repairs & Our Workshop | It’s About Time" },
      description: "Explore It’s About Time’s Johns Creek watch repair workshop for diagnostics, movement service, restoration, water-resistance testing, and free repair estimates.",
      keywords: ["watch repair workshop Johns Creek", "Atlanta watch repair", "watch restoration", "WOSTEP watchmaker", "mechanical watch service"],
      alternates: { canonical: "/workshop/" },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "/workshop/",
        siteName: "It’s About Time",
        title: "Watch Repairs & Our Workshop | It’s About Time",
        description: "Explore It’s About Time’s in-house Johns Creek workshop for watch repair, restoration, diagnostics, and service estimates.",
        images: [{ url: "/assets/pages/workshop-movement.jpg", width: 2028, height: 2048, alt: "Mechanical watch movement in progress at the It’s About Time workshop" }]
      },
      twitter: {
        card: "summary_large_image",
        title: "Watch Repairs & Our Workshop | It’s About Time",
        description: "Explore It’s About Time’s in-house Johns Creek workshop for watch repair, restoration, diagnostics, and service estimates.",
        images: ["/assets/pages/workshop-movement.jpg"]
      }
    };
  }

  const localRepairMetadata = {
    "watch-repair-atlanta": { title: "Watch Repair in Atlanta, GA | It’s About Time", description: "Professional watch repair serving Atlanta from the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Atlanta", "luxury watch repair Atlanta", "watch restoration Atlanta", "watch repair Johns Creek"], image: "/assets/pages/watch-repair-atlanta.jpg", imageWidth: 2560, imageHeight: 1460, alt: "Tag Heuer Aquaracer watch worn on a wrist" },
    "watch-repair-in-dunwoody": { title: "Watch Repair in Dunwoody, GA | It’s About Time", description: "Professional watch repair for Dunwoody customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Dunwoody", "luxury watch repair Dunwoody", "watch repair near Dunwoody", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-dunwoody.jpg", imageWidth: 1800, imageHeight: 1200, alt: "Rolex Explorer watch and bracelet on a black background" },
    "watch-repair-buford": { title: "Watch Repair in Buford, GA | It’s About Time", description: "Professional watch repair for Buford customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Buford", "luxury watch repair Buford", "watch repair near Buford", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-buford.jpg", imageWidth: 2400, imageHeight: 1602, alt: "Customer receiving watch service at the It’s About Time showroom counter" },
    "watch-repair-alpharetta": { title: "Watch Repair in Alpharetta, GA | It’s About Time", description: "Professional watch repair for Alpharetta customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Alpharetta", "luxury watch repair Alpharetta", "watch repair near Alpharetta", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-alpharetta.jpg", imageWidth: 450, imageHeight: 450, alt: "Close-up of a watch movement, balance assembly, gears, and precision service tools" },
    "watch-repair-buckhead": { title: "Watch Repair in Buckhead, GA | It’s About Time", description: "Professional watch repair for Buckhead customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Buckhead", "luxury watch repair Buckhead", "watch repair near Buckhead", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-buckhead.jpg", imageWidth: 1200, imageHeight: 1176, alt: "Gold Rolex chronograph with a cream dial on a dark leather strap" },
    "watch-repair-suwanee": { title: "Watch Repair in Suwanee, GA | It’s About Time", description: "Professional watch repair for Suwanee customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Suwanee", "luxury watch repair Suwanee", "watch repair near Suwanee", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-suwanee.jpg", imageWidth: 1200, imageHeight: 800, alt: "Close-up of an Omega Constellation watch on a stainless-steel bracelet" },
    "watch-repair-peachtree-corners": { title: "Watch Repair in Peachtree Corners, GA | It’s About Time", description: "Top-tier watch repair for Peachtree Corners owners, completed in the Johns Creek workshop for modern and luxury timepieces.", keywords: ["watch repair Peachtree Corners", "luxury watch repair Peachtree Corners", "watch repair near Peachtree Corners", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-peachtree-corners.jpg", imageWidth: 900, imageHeight: 350, alt: "Watchmaker carefully adjusting the hands of a dark luxury chronograph" },
    "watch-repair-cumming": { title: "Watch Repair in Cumming, GA | It’s About Time", description: "Professional watch repair for Cumming customers, including battery service, strap adjustments, overhauls, and restoration from the Johns Creek workshop.", keywords: ["watch repair Cumming", "luxury watch repair Cumming", "watch repair near Cumming", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-cumming.jpg", imageWidth: 819, imageHeight: 1024, alt: "Two-tone luxury watch resting on textured dark fabric" },
    "watch-repair-chamblee": { title: "Watch Repair in Chamblee, GA | It’s About Time", description: "Professional watch repair for Chamblee customers, including battery service, refinishing, overhauls, and restoration from the Johns Creek workshop.", keywords: ["watch repair Chamblee", "luxury watch repair Chamblee", "watch repair near Chamblee", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-chamblee.jpg", imageWidth: 700, imageHeight: 466, alt: "Customer and specialist examining a watch during an in-person service consultation" },
    "watch-repair-brookhaven": { title: "Watch Repair in Brookhaven, GA | It’s About Time", description: "Expert watch repair for Brookhaven customers, completed in the Johns Creek workshop for luxury, mechanical, quartz, vintage, and everyday watches.", keywords: ["watch repair Brookhaven", "luxury watch repair Brookhaven", "watch repair near Brookhaven", "watch restoration Johns Creek"], image: "/assets/pages/watch-repair-brookhaven.jpg", imageWidth: 1000, imageHeight: 691, alt: "Hamilton Khaki automatic watch used as the legacy Brookhaven watch repair source visual" },
    "omega-watch-repair-atlanta": { title: "Omega Watch Repair in Atlanta, GA | It’s About Time", description: "Expert Omega watch repair serving Atlanta from the Johns Creek workshop, including movement service, genuine-part replacement, restoration, and water-resistance attention.", keywords: ["Omega watch repair Atlanta", "Omega repair Atlanta", "Omega movement service Atlanta", "Omega restoration Atlanta"], image: "/assets/pages/omega-watch-repair-atlanta.jpg", imageWidth: 1200, imageHeight: 791, alt: "Blue-dial Omega chronograph on bracelet from the legacy Atlanta Omega repair page" },
    "omega-watch-repair-peachtree-corners": { title: "Omega Watch Repair in Peachtree Corners, GA | It’s About Time", description: "Expert Omega watch repair for Peachtree Corners collectors, completed in the Johns Creek workshop with authentic Omega components, precise servicing, restoration, and water-resistance attention.", keywords: ["Omega watch repair Peachtree Corners", "Omega repair near Peachtree Corners", "Omega movement service", "Omega restoration Johns Creek"], image: "/assets/pages/omega-watch-repair-peachtree-corners.jpg", imageWidth: 1200, imageHeight: 900, alt: "Omega Seamaster on brown leather strap from the legacy Peachtree Corners Omega repair page" },
    "omega-watch-repair-alpharetta": { title: "Omega Watch Repair in Alpharetta, GA | It’s About Time", description: "Expert Omega watch repair for Alpharetta collectors, completed in the Johns Creek workshop with certified movement service, genuine-part replacement, restoration, and water-resistance attention.", keywords: ["Omega watch repair Alpharetta", "Omega repair near Alpharetta", "Omega movement service Alpharetta", "Omega restoration Johns Creek"], image: "/assets/pages/omega-watch-repair-alpharetta.jpg", imageWidth: 640, imageHeight: 640, alt: "Omega Genève Chronometer dial from the legacy Alpharetta Omega repair page" },
    "expert-cartier-watch-repair-in-atlanta": { title: "Expert Cartier Watch Repair in Atlanta, GA | It’s About Time", description: "Expert Cartier watch repair serving Atlanta from the Johns Creek workshop, including movement service, polishing, crystal and crown repair, water-resistance testing, and restoration.", keywords: ["Cartier watch repair Atlanta", "Cartier service Atlanta", "Cartier restoration Atlanta", "Cartier movement repair Atlanta"], image: "/assets/pages/cartier-watch-repair-atlanta.jpg", imageWidth: 400, imageHeight: 400, alt: "Cartier Santos-style watches from the legacy Atlanta Cartier repair page" },
    "cartier-watch-repair-cumming": { title: "Cartier Watch Repair in Cumming, GA | It’s About Time", description: "Expert Cartier watch repair for Cumming owners, completed in the Johns Creek workshop with specialist care for battery service, polishing, pressure testing, movement work, and restoration.", keywords: ["Cartier watch repair Cumming", "Cartier service Cumming", "Cartier battery replacement Cumming", "Cartier restoration near Cumming"], image: "/assets/pages/cartier-watch-repair-cumming.jpg", imageWidth: 624, imageHeight: 550, alt: "Cartier watch in a repair fixture from the legacy Cumming Cartier repair page" },
    "cartier-watch-battery-replacement": { title: "Cartier Watch Battery Replacement | It’s About Time", description: "Specialist Cartier watch battery replacement in Johns Creek with proper tools, battery diagnostics, gasket attention, resealing, and pressure testing when appropriate.", keywords: ["Cartier watch battery replacement", "Cartier battery service Johns Creek", "Cartier pressure testing", "luxury watch battery replacement"], image: "/assets/pages/cartier-watch-battery-replacement.png", imageWidth: 1200, imageHeight: 896, alt: "Gloved watchmaker replacing a battery in a Cartier watch" },
    "hamilton-watch-repair-athens": { title: "Hamilton Watch Repair in Athens, GA | It’s About Time", description: "Expert Hamilton watch repair for Athens owners from the Johns Creek workshop, including battery service, movement overhaul, crystal and strap replacement, and water-resistance testing.", keywords: ["Hamilton watch repair Athens", "Hamilton service Athens", "Hamilton movement overhaul Athens", "Hamilton watch repair Georgia"], image: "/assets/pages/hamilton-watch-repair-athens.jpg", imageWidth: 1000, imageHeight: 691, alt: "White-dial Hamilton Khaki-style watch from the legacy Athens Hamilton repair page" },
    "hamilton-watch-repair-atlanta": { title: "Hamilton Watch Repair in Atlanta, GA | It’s About Time", description: "Expert Hamilton watch repair serving Atlanta from the Johns Creek workshop, including battery service, mechanical and quartz movement overhaul, crystal and strap replacement, and water-resistance testing.", keywords: ["Hamilton watch repair Atlanta", "Hamilton service Atlanta", "Hamilton movement overhaul Atlanta", "Hamilton watch repair Johns Creek"], image: "/assets/pages/hamilton-watch-repair-atlanta.jpg", imageWidth: 1000, imageHeight: 691, alt: "White-dial Hamilton Khaki-style watch from the legacy Atlanta Hamilton repair page" },
    "hamilton-watch-repair-suwanee": { title: "Hamilton Watch Repair in Suwanee, GA | It’s About Time", description: "Expert Hamilton watch repair for Suwanee owners from the nearby Johns Creek workshop, including battery service, movement overhaul, crystal and strap replacement, and water-resistance testing.", keywords: ["Hamilton watch repair Suwanee", "Hamilton service Suwanee", "Hamilton movement overhaul Suwanee", "Hamilton watch repair Johns Creek"], image: "/assets/pages/hamilton-watch-repair-suwanee.jpg", imageWidth: 1000, imageHeight: 691, alt: "White-dial Hamilton Khaki-style watch from the legacy Suwanee Hamilton repair page" },
    "tag-heuer-watch-repair-landing": { title: "Tag Heuer Watch Repair | It’s About Time", description: "Tag Heuer repair with free estimate guidance, genuine parts, insured shipping, battery service, movement overhaul, crystal, band, hand, stem, crown, and case or bracelet care.", keywords: ["Tag Heuer watch repair", "Tag Heuer service", "Tag Heuer movement overhaul", "Tag Heuer repair estimate"], image: "/assets/pages/tag-heuer-watch-repair-landing.jpg", imageWidth: 542, imageHeight: 500, alt: "Two Tag Heuer Carrera chronographs from the legacy repair page" },
    "tag-heuer-watch-repair-atlanta": { title: "Tag Heuer Watch Repair in Atlanta, GA | It’s About Time", description: "Certified Tag Heuer watch repair serving Atlanta from the Johns Creek workshop, including movement overhaul, battery, strap and bracelet care, polishing, crystal replacement, and water-resistance testing.", keywords: ["Tag Heuer watch repair Atlanta", "Tag Heuer service Atlanta", "Tag Heuer battery replacement Atlanta", "Tag Heuer movement overhaul Atlanta"], image: "/assets/pages/tag-heuer-watch-repair-atlanta.jpg", imageWidth: 750, imageHeight: 422, alt: "Collection of Tag Heuer chronographs from the legacy Atlanta repair page" },
    "tag-heuer-watch-repair-nashville": { title: "Tag Heuer Watch Repair for Nashville Owners | It’s About Time", description: "Nationwide insured-shipping Tag Heuer repair service for Nashville owners, with free estimate guidance, genuine parts, battery service, movement overhaul, crystal, band, hand, stem, crown, and case or bracelet care.", keywords: ["Tag Heuer watch repair Nashville", "Tag Heuer service Nashville", "mail-in Tag Heuer repair", "Tag Heuer repair estimate"], image: "/assets/pages/tag-heuer-watch-repair-nashville.jpg", imageWidth: 542, imageHeight: 500, alt: "Two Tag Heuer Carrera chronographs from the legacy Nashville repair page" },
    "breitling-watch-repair-athens": { title: "Breitling Watch Repair in Athens, GA | It’s About Time", description: "Expert Breitling watch repair serving Athens from the Johns Creek workshop, including battery replacement, movement overhaul, crystal replacement, strap replacement, and water-resistance testing.", keywords: ["Breitling watch repair Athens", "Breitling service Athens", "Breitling movement overhaul", "Breitling battery replacement"], image: "/assets/pages/breitling-watch-repair-athens.jpg", imageWidth: 1500, imageHeight: 1037, alt: "Breitling watch from the legacy Athens repair page" },
    "breitling-watch-repair-atlanta": { title: "Breitling Watch Repair in Atlanta, GA | It’s About Time", description: "Expert Breitling watch repair serving Atlanta from the Johns Creek workshop, including battery replacement, movement overhaul, crystal replacement, strap replacement, and water-resistance testing.", keywords: ["Breitling watch repair Atlanta", "Breitling service Atlanta", "Breitling movement overhaul", "Breitling battery replacement"], image: "/assets/pages/breitling-watch-repair-atlanta.jpg", imageWidth: 629, imageHeight: 475, alt: "Breitling chronograph from the legacy Atlanta repair page" },
    "nomos-watch-repair-atlanta": { title: "Nomos Watch Repair in Atlanta, GA | It’s About Time", description: "Nomos watch repair serving Atlanta from the Johns Creek workshop, including mechanical movement service, crown, stem and hand repair, crystal replacement, case and strap care, and water-resistance testing.", keywords: ["Nomos watch repair Atlanta", "Nomos service Atlanta", "Nomos movement service", "Nomos crystal replacement"], image: "/assets/pages/nomos-watch-repair-atlanta.jpg", imageWidth: 900, imageHeight: 600, alt: "Nomos Glashütte automatic watch from the legacy Atlanta repair page" },
    "citizen-watches-at-its-about-time-inc-authorized-dealer-atlanta": { title: "Citizen Watches Authorized Dealer Atlanta, GA | It’s About Time", description: "Explore Citizen watches for Atlanta-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", keywords: ["Citizen watches Atlanta", "Citizen authorized dealer Atlanta", "Citizen Eco-Drive Atlanta", "Citizen Promaster Atlanta"], image: "/assets/pages/citizen-authorized-dealer-atlanta.jpg", imageWidth: 542, imageHeight: 629, alt: "Citizen Eco-Drive watch from the legacy Atlanta dealer page" },
    "citizen-watches-at-its-about-time-inc-authorized-dealer-cumming": { title: "Citizen Watches Authorized Dealer Cumming, GA | It’s About Time", description: "Explore Citizen watches for Cumming-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", keywords: ["Citizen watches Cumming", "Citizen authorized dealer Cumming", "Citizen Eco-Drive Cumming", "Citizen Promaster Cumming"], image: "/assets/pages/citizen-authorized-dealer-cumming.jpg", imageWidth: 542, imageHeight: 629, alt: "Citizen Eco-Drive watch from the legacy Cumming dealer page" },
    "citizen-watches-at-its-about-time-inc-authorized-dealer-roswell": { title: "Citizen Watches Authorized Dealer Roswell, GA | It’s About Time", description: "Explore Citizen watches for Roswell-area customers at It’s About Time, including Eco-Drive, Promaster, Satellite Wave GPS, Chronograph, Series 8, and Aqualand collections.", keywords: ["Citizen watches Roswell", "Citizen authorized dealer Roswell", "Citizen Eco-Drive Roswell", "Citizen Promaster Roswell"], image: "/assets/pages/citizen-authorized-dealer-roswell.jpg", imageWidth: 542, imageHeight: 629, alt: "Citizen Eco-Drive watch from the legacy Roswell dealer page" },
    "hamilton-watches-at-its-about-time-inc-authorized-dealer-in-atlanta": { title: "Hamilton Watches Authorized Dealer Atlanta, GA | It’s About Time", description: "Explore authentic Hamilton watches in Atlanta at It’s About Time, including Khaki Field, Jazzmaster, sport, dress, and specialty models with manufacturer warranty coverage.", keywords: ["Hamilton watches Atlanta", "Hamilton authorized dealer Atlanta", "Hamilton Khaki Field Atlanta", "Hamilton Jazzmaster Atlanta"], image: "/assets/pages/hamilton-authorized-dealer-atlanta.jpg", imageWidth: 629, imageHeight: 475, alt: "Hamilton mechanical field watch from the legacy Atlanta authorized-dealer page" },
    "luminox-watches-at-its-about-time-inc-authorized-dealer-atlanta": { title: "Luminox Watches Authorized Dealer Atlanta, GA | It’s About Time", description: "Explore authentic Luminox watches in Atlanta at It’s About Time, including Navy SEAL, Atacama Field, Air Series, professional diving, and self-powered illumination models.", keywords: ["Luminox watches Atlanta", "Luminox authorized dealer Atlanta", "Luminox Navy SEAL Atlanta", "Luminox dealer Johns Creek"], image: "/assets/pages/luminox-authorized-dealer-atlanta.jpg", imageWidth: 579, imageHeight: 402, alt: "Luminox Titanium XCOR chronograph from the legacy Atlanta authorized-dealer page" },
    "seiko-watches-at-its-about-time-inc-authorized-dealer-atlanta": { title: "Seiko Watches Authorized Dealer Atlanta, GA | It’s About Time", description: "Explore authentic Seiko watches in Atlanta at It’s About Time, including Prospex, Presage, Astron GPS Solar, Seiko 5 Sports, and everyday or dress styles.", keywords: ["Seiko watches Atlanta", "Seiko authorized dealer Atlanta", "Seiko Prospex Atlanta", "Seiko Astron Atlanta"], image: "/assets/pages/seiko-authorized-dealer-atlanta.jpg", imageWidth: 574, imageHeight: 659, alt: "Seiko stainless-steel chronograph from the legacy Atlanta authorized-dealer page" },
    "hamilton-watches-authorized-dealer": { title: "Hamilton Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic Hamilton watches in Johns Creek, including Khaki Field, Jazzmaster, Ventura, and Khaki Aviation collections with manufacturer warranty coverage.", keywords: ["Hamilton watches Johns Creek", "Hamilton authorized dealer", "Hamilton Khaki Field", "Hamilton Jazzmaster"], image: "/assets/pages/hamilton-authorized-dealer-hub.jpg", imageWidth: 1105, imageHeight: 680, alt: "Hamilton Khaki Automatic white-dial watch from the legacy authorized-dealer page" },
    "luminox-watches-authorized-dealer": { title: "Luminox Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic Luminox watches in Johns Creek, including Navy SEAL, Bear Grylls Survival, Air, and Sea collections with manufacturer warranty coverage.", keywords: ["Luminox watches Johns Creek", "Luminox authorized dealer", "Luminox Navy SEAL", "Luminox dealer Georgia"], image: "/assets/pages/luminox-authorized-dealer-hub.jpg", imageWidth: 1105, imageHeight: 680, alt: "Luminox white-dial dive watch from the legacy authorized-dealer page" },
    "seiko-watches-authorized-dealer": { title: "Seiko Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic Seiko watches in Johns Creek, including Seiko 5 Sports, Prospex, Presage, and Astron collections with manufacturer warranty coverage.", keywords: ["Seiko watches Johns Creek", "Seiko authorized dealer", "Seiko Prospex", "Seiko Presage"], image: "/assets/pages/seiko-authorized-dealer-hub.jpg", imageWidth: 1024, imageHeight: 630, alt: "Seiko Prospex Silver Chronograph from the legacy authorized-dealer page" },
    "citizen-watches": { title: "Citizen Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic Citizen watches in Johns Creek, including Eco-Drive, Promaster, Atomic Timekeeping, and Satellite Wave GPS collections with manufacturer warranty coverage.", keywords: ["Citizen watches Johns Creek", "Citizen authorized dealer", "Citizen Eco-Drive", "Citizen Promaster"], image: "/assets/pages/citizen-watches-hub.jpg", imageWidth: 1105, imageHeight: 680, alt: "Citizen black watch with gold accents from the legacy Citizen page" },
    "boluva-watches-authorized-dealer": { title: "Bulova Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic Bulova watches in Johns Creek, including Precisionist, Marine Star, Classic, and CURV collections with manufacturer warranty coverage.", keywords: ["Bulova watches Johns Creek", "Bulova authorized dealer", "Bulova Precisionist", "Bulova Marine Star"], image: "/assets/pages/bulova-authorized-dealer-hub.jpg", imageWidth: 1105, imageHeight: 680, alt: "Bulova two-tone silver-dial watch with gold accents from the legacy authorized-dealer page" },
    "g-shock-watches-authorized-dealer": { title: "G-SHOCK Watches Johns Creek, GA | Authorized Dealer | It’s About Time", description: "Explore authentic G-SHOCK watches in Johns Creek, including Master of G, G-STEEL, MR-G, and GA Series collections with manufacturer warranty coverage.", keywords: ["G-SHOCK watches Johns Creek", "G-SHOCK authorized dealer", "G-SHOCK Master of G", "G-SHOCK MR-G"], image: "/assets/pages/gshock-authorized-dealer-hub.jpg", imageWidth: 1105, imageHeight: 680, alt: "Rose-gold G-SHOCK watch from the legacy authorized-dealer page" }
  } as const;
  if (slug in localRepairMetadata) {
    const page = localRepairMetadata[slug as keyof typeof localRepairMetadata];
    return {
      title: { absolute: page.title }, description: page.description, keywords: [...page.keywords],
      alternates: { canonical: `/${slug}/` }, robots: { index: true, follow: true },
      openGraph: { type: "website", url: `/${slug}/`, siteName: "It’s About Time", title: page.title, description: page.description, images: [{ url: page.image, width: page.imageWidth, height: page.imageHeight, alt: page.alt }] },
      twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.image] }
    };
  }

  const batteryMetadata = {
    "watch-battery-replacement-atlanta": { title: "Watch Battery Replacement in Atlanta, GA | It’s About Time", description: "Professional watch battery replacement serving Atlanta from Johns Creek for luxury, vintage, waterproof, sport, and everyday watches.", keywords: ["watch battery replacement Atlanta", "same day watch battery Atlanta", "luxury watch battery replacement", "waterproof watch battery"], image: "/assets/pages/watch-battery-replacement-atlanta.jpg", imageWidth: 1500, imageHeight: 1000, alt: "Watchmaker holding a new watch battery with tweezers" },
    "watch-battery-replacement-buford": { title: "Watch Battery Replacement Buford, GA | It’s About Time", description: "Watch battery replacement for Buford customers, completed by certified watchmakers in Johns Creek for luxury, vintage, waterproof, sport, and everyday watches.", keywords: ["watch battery replacement Buford", "same day watch battery Buford", "watch repair Buford", "luxury watch battery"], image: "/assets/pages/watch-battery-replacement-buford.jpg", imageWidth: 1800, imageHeight: 693, alt: "Collection of watches and watchmaking tools on a repair bench" },
    "watch-battery-replacement-in-alpharetta": { title: "Watch Battery Replacement in Alpharetta, GA | It’s About Time", description: "Watch battery replacement for Alpharetta customers, completed by certified watchmakers in Johns Creek for luxury, vintage, waterproof, and everyday watches.", keywords: ["watch battery replacement Alpharetta", "same day watch battery Alpharetta", "watch repair Alpharetta", "waterproof watch battery"], image: "/assets/pages/watch-battery-replacement-alpharetta.jpg", imageWidth: 1024, imageHeight: 684, alt: "Watchmaker performing careful service at an illuminated workbench" }
  } as const;
  if (slug in batteryMetadata) {
    const page = batteryMetadata[slug as keyof typeof batteryMetadata];
    return {
      title: { absolute: page.title }, description: page.description, keywords: [...page.keywords],
      alternates: { canonical: `/${slug}/` }, robots: { index: true, follow: true },
      openGraph: { type: "website", url: `/${slug}/`, siteName: "It’s About Time", title: page.title, description: page.description, images: [{ url: page.image, width: page.imageWidth, height: page.imageHeight, alt: page.alt }] },
      twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.image] }
    };
  }

  const watchBandMetadata = {
    "luxury-watch-strap-band-replacement": { title: "Luxury Watch Strap and Band Replacement in Atlanta, GA | It’s About Time", description: "Luxury watch strap and band replacement in Johns Creek for leather, alligator, rubber, NATO, nylon, and metal bracelets with professional in-house fitting.", keywords: ["luxury watch strap replacement Atlanta", "watch band replacement Johns Creek", "watch bracelet fitting", "leather watch strap replacement"], image: "/assets/pages/luxury-watch-strap-band-replacement.png", imageWidth: 1024, imageHeight: 765, alt: "A selection of luxury watch straps and bracelets" },
    "watch-band-repair": { title: "Watch Band Repair in Johns Creek, GA | It’s About Time", description: "Watch band repair in Johns Creek, including clasp, link, pin, spring-bar, bracelet stretch, and sizing guidance from certified watchmakers.", keywords: ["watch band repair Johns Creek", "watch clasp repair", "watch bracelet repair", "watch link repair"], image: "/assets/pages/watch-band-repair-workshop.jpg", imageWidth: 1024, imageHeight: 684, alt: "Certified watchmaker completing an in-house repair" },
    "watch-band-replacement": { title: "Watch Band Replacement in Johns Creek, GA | It’s About Time", description: "Watch band replacement in Johns Creek for luxury and everyday watches, including leather, alligator, rubber, NATO, nylon, and metal bracelet options.", keywords: ["watch band replacement Johns Creek", "watch strap replacement", "leather watch strap replacement", "watch bracelet replacement"], image: "/assets/pages/watch-band-replacement-leather.jpg", imageWidth: 1024, imageHeight: 576, alt: "Dress watch fitted with a dark leather replacement strap" }
  } as const;
  if (slug in watchBandMetadata) {
    const page = watchBandMetadata[slug as keyof typeof watchBandMetadata];
    return {
      title: { absolute: page.title }, description: page.description, keywords: [...page.keywords],
      alternates: { canonical: `/${slug}/` }, robots: { index: true, follow: true },
      openGraph: { type: "website", url: `/${slug}/`, siteName: "It’s About Time", title: page.title, description: page.description, images: [{ url: page.image, width: page.imageWidth, height: page.imageHeight, alt: page.alt }] },
      twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [page.image] }
    };
  }

  if (slug === "rolex-bracelet-stretch-repair") {
    return {
      title: { absolute: "Rolex Bracelet Stretch Repair in Johns Creek, GA | It’s About Time" },
      description: "Rolex bracelet stretch repair in Johns Creek. Get expert inspection of loose bracelets, clasps, links, pins, end links, tightening options, and clear repair guidance.",
      keywords: ["Rolex bracelet stretch repair", "Rolex bracelet repair Johns Creek", "Rolex bracelet tightening", "Rolex clasp repair", "Rolex link repair"],
      alternates: { canonical: "/rolex-bracelet-stretch-repair/" },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "/rolex-bracelet-stretch-repair/",
        siteName: "It’s About Time",
        title: "Rolex Bracelet Stretch Repair in Johns Creek, GA | It’s About Time",
        description: "Expert inspection and repair guidance for loose, worn, or stretched Rolex bracelets.",
        images: [{ url: "/assets/pages/rolex-bracelet-stretch-repair.png", width: 800, height: 800, alt: "Steel Rolex bracelet and clasp prepared for specialist bracelet repair" }]
      },
      twitter: {
        card: "summary_large_image",
        title: "Rolex Bracelet Stretch Repair in Johns Creek, GA | It’s About Time",
        description: "Expert inspection and repair guidance for loose, worn, or stretched Rolex bracelets.",
        images: ["/assets/pages/rolex-bracelet-stretch-repair.png"]
      }
    };
  }

  if (slug === "rolex-repair-atlanta") {
    return {
      title: { absolute: "Rolex Watch Repair Atlanta | It’s About Time" },
      description: "Certified Rolex watch repair in Johns Creek serving Atlanta. Get in-house diagnostics, movement repair, pressure testing, crystal service, bracelet repair, and a clear estimate.",
      keywords: ["Rolex repair Atlanta", "Rolex watch repair Johns Creek", "Rolex pressure testing", "Rolex bracelet repair", "Rolex service near Atlanta"],
      alternates: { canonical: "/rolex-repair-atlanta/" },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "/rolex-repair-atlanta/",
        siteName: "It’s About Time",
        title: "Rolex Watch Repair Atlanta | It’s About Time",
        description: "Certified in-house Rolex repair in Johns Creek serving the Atlanta area.",
        images: [{ url: "/assets/pages/rolex-repair-atlanta-hero.jpg", width: 1200, height: 800, alt: "Rolex watch collection used as the source visual for Rolex repair service" }]
      },
      twitter: {
        card: "summary_large_image",
        title: "Rolex Watch Repair Atlanta | It’s About Time",
        description: "Certified in-house Rolex repair in Johns Creek serving the Atlanta area.",
        images: ["/assets/pages/rolex-repair-atlanta-hero.jpg"]
      }
    };
  }

  if (slug === "contact") {
    return {
      title: { absolute: "Contact It’s About Time | Johns Creek Watch Repair & Sales" },
      description: "Contact It’s About Time in Johns Creek for watch repair, expert service, showroom questions, and collection assistance.",
      alternates: { canonical: "/contact/" },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "/contact/",
        siteName: "It’s About Time",
        title: "Contact It’s About Time | Johns Creek Watch Repair & Sales",
        description: "Contact It’s About Time in Johns Creek for watch repair, expert service, showroom questions, and collection assistance."
      },
      twitter: {
        card: "summary",
        title: "Contact It’s About Time | Johns Creek Watch Repair & Sales",
        description: "Contact It’s About Time in Johns Creek for watch repair, expert service, showroom questions, and collection assistance."
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
  const cta = (articleCtas as Record<string, ArticleCta>)[slug];
  const article = articleSeo[slug];

  return (
    <>
      <SiteContent title={page.title} html={page.html} cta={cta} />
      {["watch-repairs", "repair-form"].includes(slug) && <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />}
      {article && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeArticleSchema(article)) }} />}
      {slug === "contact" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeContactSchema()) }} />}
      {slug === "repair-form" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeRepairFormSchema()) }} />}
      {slug === "workshop" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeWorkshopSchema()) }} />}
      {slug === "rolex-repair-atlanta" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeRolexRepairAtlantaSchema()) }} />}
      {slug === "rolex-bracelet-stretch-repair" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeRolexBraceletStretchSchema()) }} />}
      {(slug === "luxury-watch-strap-band-replacement" || slug === "watch-band-repair" || slug === "watch-band-replacement") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeWatchBandServiceSchema(slug)) }} />}
      {(slug === "watch-battery-replacement-atlanta" || slug === "watch-battery-replacement-buford" || slug === "watch-battery-replacement-in-alpharetta") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeBatteryReplacementServiceSchema(slug)) }} />}
      {(slug === "watch-repair-atlanta" || slug === "watch-repair-in-dunwoody" || slug === "watch-repair-buford" || slug === "watch-repair-alpharetta" || slug === "watch-repair-buckhead" || slug === "watch-repair-suwanee" || slug === "watch-repair-peachtree-corners" || slug === "watch-repair-cumming" || slug === "watch-repair-chamblee" || slug === "watch-repair-brookhaven") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeLocalWatchRepairSchema(slug)) }} />}
      {(slug === "omega-watch-repair-atlanta" || slug === "omega-watch-repair-peachtree-corners" || slug === "omega-watch-repair-alpharetta") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeOmegaWatchRepairSchema(slug)) }} />}
      {(slug === "expert-cartier-watch-repair-in-atlanta" || slug === "cartier-watch-repair-cumming" || slug === "cartier-watch-battery-replacement") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeCartierServiceSchema(slug)) }} />}
      {(slug === "hamilton-watch-repair-athens" || slug === "hamilton-watch-repair-atlanta" || slug === "hamilton-watch-repair-suwanee") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeHamiltonWatchRepairSchema(slug)) }} />}
      {(slug === "tag-heuer-watch-repair-landing" || slug === "tag-heuer-watch-repair-atlanta" || slug === "tag-heuer-watch-repair-nashville") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeTagHeuerRepairSchema(slug)) }} />}
      {(slug === "breitling-watch-repair-athens" || slug === "breitling-watch-repair-atlanta" || slug === "nomos-watch-repair-atlanta") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeBreitlingNomosRepairSchema(slug)) }} />}
      {(slug === "hamilton-watches-authorized-dealer" || slug === "luminox-watches-authorized-dealer" || slug === "seiko-watches-authorized-dealer" || slug === "citizen-watches" || slug === "boluva-watches-authorized-dealer" || slug === "g-shock-watches-authorized-dealer") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeBrandAuthorizedDealerHubSchema(slug)) }} />}
      {(slug === "hamilton-watches-at-its-about-time-inc-authorized-dealer-in-atlanta" || slug === "luminox-watches-at-its-about-time-inc-authorized-dealer-atlanta" || slug === "seiko-watches-at-its-about-time-inc-authorized-dealer-atlanta") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeAtlantaBrandDealerSchema(slug)) }} />}
      {(slug === "citizen-watches-at-its-about-time-inc-authorized-dealer-atlanta" || slug === "citizen-watches-at-its-about-time-inc-authorized-dealer-cumming" || slug === "citizen-watches-at-its-about-time-inc-authorized-dealer-roswell") && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeCitizenDealerSchema(slug)) }} />}
    </>
  );
}
