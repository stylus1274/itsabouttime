"use client";

import Link from "next/link";

type Specs = Record<string, string>;

type Model = {
  id: string;
  name: string;
  image: string;
  alt: string;
  paragraphs: string[];
  specs: Specs;
};

const models: Model[] = [
  {
    id: "dtu-2ap",
    name: "DTU-2A/P Field Watch",
    image: "/assets/articles/benrus-dtu-2ap.jpg",
    alt: "Benrus DTU-2A/P field watch, available at It’s About Time Inc. in Johns Creek, Georgia",
    paragraphs: [
      "The DTU-2A/P is the flagship model and the one generating the most conversation in the watch community right now. It is a direct reissue of the original Vietnam-era military contract watch, built to the same MIL-W-3818B specification that Benrus fulfilled in 1962.",
      "The current production model maintains the historically accurate 34mm case size, a deliberate choice that collectors of authentic military watches consistently praise. The dial is sterile—without a logo or branding—staying true to military-issue protocol. Benrus paired the watch with both a brown leather bund strap and a green NATO strap, two formats with direct ties to the original issue configuration.",
      "Featured at Watches & Wonders 2026, praised by Hodinkee, and named by Fratello Watches among the best field watches under $1,000, this is a watch the enthusiast press has taken seriously."
    ],
    specs: {
      Case: "34mm sandblasted 316L stainless steel, screw-down crown",
      Crystal: "Double-domed sapphire with double anti-reflective coating",
      Movement: "Swiss ETA 2671 automatic, 25 jewels, 38-hour power reserve",
      "Water resistance": "100m (10 ATM)",
      Lume: "BGW9 Super-LumiNova on dial markers and hands",
      Straps: "Brown leather bund strap + green NATO strap included",
      Price: "$990 USD"
    }
  },
  {
    id: "type-1",
    name: "Type 1 Mil Spec",
    image: "/assets/articles/benrus-type-1-mil-spec.jpg",
    alt: "Benrus Type 1 Mil Spec dive watch, available at It’s About Time Inc. in Johns Creek, Georgia",
    paragraphs: [
      "The Type 1 Mil Spec is the dive watch in the Benrus lineup, built for buyers who want maximum field credentials in a modern package. The original Type 1 was produced between 1972 and 1980 for U.S. Navy SEALs, EOD teams, Army Rangers, Green Berets, and CIA operatives under the MIL-W-50717 specification. With only approximately 6,000 originals ever produced, the vintage Type 1 is among the rarest military watches in existence.",
      "The modern reissue preserves the sterile dial and bi-directional 12-hour bezel of the original while upgrading the internals to a Swiss ETA 2892 automatic. The fully sandblasted 39.5mm stainless steel case delivers 365 meters of water resistance, exceeding the original specification. Featured in Fratello Watches’ roundup of the best dive watches under $2,000, this is a watch that earns its specification rather than borrowing it."
    ],
    specs: {
      Case: "39.5mm sandblasted 316L stainless steel, screw-down crown, crown guards",
      Crystal: "Double-domed sapphire with double anti-reflective coating",
      Bezel: "Bi-directional rotating bezel with aluminum insert and coin-edge grip",
      Movement: "Swiss ETA 2892 automatic, 21 jewels, 42-hour power reserve",
      "Water resistance": "365m (36.5 ATM)",
      Lume: "BGW9 Super-LumiNova on dial markers and hands",
      Strap: "Black rubber strap with pin buckle",
      Price: "$1,795 USD"
    }
  },
  {
    id: "dtu-shield",
    name: "DTU Shield",
    image: "/assets/articles/benrus-dtu-shield.jpg",
    alt: "Benrus DTU Shield field watch, available at It’s About Time Inc. in Johns Creek, Georgia",
    paragraphs: [
      "The DTU Shield is a refined, daily-wear interpretation of the military DTU platform. Where the DTU-2A/P preserves the compact 34mm original, the Shield steps up to 38mm with a light silver dial that reads as more versatile across different settings. Despite the size increase, it stays remarkably thin at 10.70mm thanks to the slim-profile ETA 2892 movement inside.",
      "Launched on Veterans Day 2025 as a tribute to the brand’s military heritage, the DTU Shield carries the Benrus coat of arms engraved on its monobloc caseback. The dial is nearly sterile, with only a small printed brand name. Old Radium Super-LumiNova on the markers and hands gives the watch a warm vintage tone while maintaining strong low-light legibility. Featured by Teddy Baldassarre in a dedicated piece on Vietnam War watches and their modern descendants, the DTU Shield offers a more contemporary take on the field watch category while staying rooted in the brand’s core identity."
    ],
    specs: {
      Case: "38mm sandblasted 316L stainless steel, screw-down crown",
      Crystal: "Double-domed sapphire with double anti-reflective coating",
      Movement: "Swiss ETA 2892 automatic, 21 jewels, 42-hour power reserve",
      "Water resistance": "100m (10 ATM)",
      Lume: "Old Radium Super-LumiNova on dial markers and hands",
      Strap: "Khaki fabric strap with leather lining and pin buckle",
      Price: "$1,595 USD"
    }
  },
  {
    id: "sky-chief",
    name: "Sky Chief",
    image: "/assets/articles/benrus-sky-chief.jpg",
    alt: "Benrus Sky Chief chronograph, available at It’s About Time Inc. in Johns Creek, Georgia",
    paragraphs: [
      "The Sky Chief is the chronograph in the Benrus lineup and the most recent addition to the collection. Named after the original 1940s pilot’s chronograph that helped establish Benrus among professional aviators, the 2026 reissue is a faithful recreation built to modern Swiss standards.",
      "At 36mm with a slim 11.9mm profile, the Sky Chief is compact by today’s chronograph standards. That is intentional. The original measured 35mm, and Benrus kept the proportions period-appropriate while improving wearability. The tri-compax dial layout—three sub-dials for running seconds, a 30-minute counter, and a 12-hour counter—is capped by a double-domed box sapphire crystal that creates the distinctive porthole effect of the original. Inside is a COSC-certified ETA 2894 automatic, visible through a sapphire exhibition caseback with a custom black Benrus-stamped rotor.",
      "Available in two dial variants, Stratus Grey and Cirrus White, the Sky Chief has been called out by InsideHook as one of the best watches of early 2026 and covered by Gear Patrol, WatchTime, and Monochrome Watches."
    ],
    specs: {
      Case: "36mm 316L stainless steel",
      Crystal: "Double-domed box sapphire with double anti-reflective coating",
      Movement: "Swiss ETA 2894 automatic, COSC-certified",
      Functions: "Chronograph with tri-compax layout (running seconds, 30-min counter, 12-hr counter)",
      "Water resistance": "100m (10 ATM)",
      Caseback: "Sapphire exhibition caseback",
      Lume: "Super-LumiNova on numerals and hands",
      Strap: "Grey leather strap with polished pin buckle",
      Price: "$3,950 USD"
    }
  },
  {
    id: "3061-bu",
    name: "#3061 BU",
    image: "/assets/articles/benrus-3061-bu.jpg",
    alt: "Benrus #3061 BU field watch, available at It’s About Time Inc. in Johns Creek, Georgia",
    paragraphs: [
      "The #3061 BU is the civilian counterpart to the military-issued DTU-2A/P. The original Series #3061 was the dressed-up version of the combat watch, with a polished case and Benrus branding on the dial instead of the sterile military-issue format. It became famous when Steve McQueen wore one throughout the 1968 film Bullitt, cementing it as one of the most recognized field watches in cinema history.",
      "The modern reissue steps up to 39.5mm from the vintage 34mm original, with a vertically brushed mid-case and polished bezel that set it apart visually from the sandblasted DTU models. At just 9.95mm thick, it is the slimmest watch in the collection. The sapphire exhibition caseback lets you see the ETA 2892 movement, another departure from the closed-back military models. For buyers who want the Benrus military DNA in a more refined, everyday package, the #3061 BU is that watch.",
      "It has been featured by The Manual in its gift guide for watch enthusiasts and reviewed in depth by aBlogtoWatch and Mainspring Watch Magazine."
    ],
    specs: {
      Case: "39.5mm 316L stainless steel, vertically brushed mid-case, polished bezel and caseback",
      Crystal: "Double-domed sapphire with double anti-reflective coating",
      Movement: "Swiss ETA 2892 automatic, 21 jewels, 42-hour power reserve",
      "Water resistance": "100m (10 ATM)",
      Lume: "BGW9 Super-LumiNova on dial markers and hands",
      Caseback: "Sapphire exhibition caseback",
      Strap: "Black leather strap with pin buckle",
      Price: "$1,895 USD"
    }
  }
];

function SpecTable({ specs }: { specs: Specs }) {
  return (
    <div className="benrus-specs" role="region" aria-label="Watch specifications">
      <table>
        <tbody>
          {Object.entries(specs).map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModelSection({ model }: { model: Model }) {
  return (
    <section id={model.id} className="benrus-model">
      <div className="benrus-model-image">
        <img src={model.image} alt={model.alt} />
      </div>
      <div className="benrus-model-copy">
        <p className="benrus-kicker">Current Benrus Collection</p>
        <h3>{model.name}</h3>
        {model.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <SpecTable specs={model.specs} />
      </div>
    </section>
  );
}

const comparisonRows = [
  ["DTU-2A/P", "Field watch", "34mm", "ETA 2671", "100m", "$990"],
  ["DTU Shield", "Field watch", "38mm", "ETA 2892", "100m", "$1,595"],
  ["Type 1 Mil Spec", "Dive watch", "39.5mm", "ETA 2892", "365m", "$1,795"],
  ["#3061 BU", "Field watch (civilian)", "39.5mm", "ETA 2892", "100m", "$1,895"],
  ["Sky Chief", "Chronograph", "36mm", "ETA 2894 (COSC)", "100m", "$3,950"]
];

const faqs = [
  ["Do you carry the full Benrus lineup?", "Yes. Every model in the current Benrus collection is available at our Johns Creek showroom, including the DTU-2A/P, Type 1 Mil Spec, DTU Shield, #3061 BU, and Sky Chief. You can view and try on any model in person before purchasing."],
  ["Can I buy a Benrus if I don’t live near Johns Creek?", "Yes. While our showroom is in Johns Creek, Georgia, we work with customers nationally. Contact us to ask about a specific model or to arrange a purchase."],
  ["What happens if my Benrus needs service later?", "We handle Benrus service on-site at our shop. Our watchmakers are WOSTEP- and Swiss-certified and work with Swiss ETA movements daily. Your watch stays in-house from intake to completion."],
  ["Are Benrus watches actually Swiss made?", "Yes. All current Benrus watches are designed, engineered, and manufactured in La Chaux-de-Fonds, Switzerland. They use Swiss ETA movements and carry the Swiss Made designation on the dial."],
  ["Which Benrus model is the best entry point?", "The DTU-2A/P at $990 USD is the most accessible model in the lineup. It is also the watch with the deepest historical connection, built to the same MIL-W-3818B military specification that Benrus originally fulfilled in 1962. For buyers who want a larger case and a more polished look, the #3061 BU at $1,895 USD offers a civilian take on the same military DNA."],
  ["What makes Benrus different from other field watch brands?", "Benrus is one of the few brands that can point to a documented U.S. military contract as the origin of its field watch designs. The DTU-2A/P was the first watch to fulfill the MIL-W-3818B specification in 1962, and the Type 1 was purpose-built for Navy SEALs and special operations forces under MIL-W-50717 in the 1970s. That history is traceable through government records, not brand storytelling."],
  ["Can I see the movement on any of these watches?", "Two models have sapphire exhibition casebacks: the #3061 BU and the Sky Chief. The DTU-2A/P, Type 1 Mil Spec, and DTU Shield all have solid, closed casebacks consistent with their military-specification heritage."]
];

export function BenrusArticle() {
  return (
    <main className="benrus-article-page">
      <header className="benrus-header">
        <Link href="/" className="benrus-brand" aria-label="It’s About Time home">
          <img src="/assets/logo.png" alt="It’s About Time" />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/watch-repairs">Watch Repairs</Link>
          <Link href="/watch-sales">Watch Sales</Link>
          <Link href="/our-workshop">Our Workshop</Link>
          <Link href="/blog">Journal</Link>
        </nav>
        <a className="benrus-header-cta" href="tel:+17704429854">770-442-9854</a>
      </header>

      <section className="benrus-hero">
        <div className="benrus-hero-copy">
          <p className="benrus-kicker">New Releases · May 27, 2026</p>
          <h1>It’s About Time Inc. Now Carries Benrus Watches</h1>
          <p className="benrus-intro">A century of American watchmaking history, now available to see and purchase in Johns Creek.</p>
          <div className="benrus-actions">
            <a className="benrus-button" href="#visit">See the Collection</a>
            <Link className="benrus-text-link" href="/watch-sales">Browse Watches for Sale <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="benrus-hero-image">
          <img src="/assets/articles/benrus-sky-chief.jpg" alt="Benrus Sky Chief chronograph, available at It’s About Time Inc. in Johns Creek, Georgia" />
        </div>
      </section>

      <article className="benrus-article">
        <aside className="benrus-aside" aria-label="Article navigation">
          <p>In this article</p>
          <a href="#about">About Benrus</a>
          <a href="#models">The Models We Carry</a>
          <a href="#comparison">Quick Comparison</a>
          <a href="#visit">Visit the Showroom</a>
          <a href="#faq">Frequently Asked Questions</a>
        </aside>

        <div className="benrus-content">
          <p className="benrus-lead">It’s About Time Inc. is now an authorized Benrus retailer. Visit our Johns Creek showroom to see the full current Benrus lineup in person—a brand with over a century of American watchmaking history and one of the most compelling stories in the field watch category today.</p>
          <p>If you follow the watch press, Benrus is not a new name. Featured at Watches & Wonders 2026 in Geneva and covered by Hodinkee, Fratello Watches, GQ, InsideHook, and Teddy Baldassarre, this is a brand having a significant moment. We are excited to bring it to our customers locally and nationally.</p>

          <section className="benrus-callout" aria-labelledby="takeaways-heading">
            <p className="benrus-kicker">At a glance</p>
            <h2 id="takeaways-heading">Key Takeaways</h2>
            <ul>
              <li>It’s About Time Inc. is now an authorized Benrus retailer. The full current lineup is available to view and purchase at our Johns Creek, Georgia showroom.</li>
              <li>Benrus was founded in 1921 and holds over a century of American watchmaking history, including the first U.S. military contract for the MIL-W-3818B field watch specification in 1962.</li>
              <li>The current collection spans five models: the DTU-2A/P field watch ($990), Type 1 Mil Spec dive watch ($1,795), DTU Shield field watch ($1,595), #3061 BU field watch ($1,895), and Sky Chief chronograph ($3,950). All prices are in USD.</li>
              <li>Every current Benrus watch is designed, engineered, and built in La Chaux-de-Fonds, Switzerland with Swiss ETA movements.</li>
              <li>On-site watch service is available for any Benrus purchased through us.</li>
            </ul>
          </section>

          <section className="benrus-section" id="about">
            <p className="benrus-kicker">The brand</p>
            <h2>About Benrus</h2>
            <p>Benrus was founded in 1921 by Benjamin Lazrus and became one of the top three watch brands in the United States by the 1950s. The brand’s defining chapter is military: Benrus was the first manufacturer to fulfill the U.S. Army’s MIL-W-3818B field watch specification in 1962, producing watches issued to soldiers in Vietnam. That provenance is documented and traceable.</p>
            <p>After a period of dormancy, Benrus has relaunched with all current watches designed, engineered, and manufactured in La Chaux-de-Fonds, Switzerland using Swiss ETA movements. Explore the <Link href="/benrus-legacy">Benrus legacy</Link> and the current <Link href="/benrus-ultra-deep">Ultra-Deep collection</Link> on our journal.</p>
          </section>

          <section className="benrus-section" id="models">
            <p className="benrus-kicker">Current collection</p>
            <h2>The Models We Carry</h2>
            <p>The current Benrus collection covers field watches, a military-spec dive watch, a pilot’s chronograph, and a heritage-inspired everyday piece. Here is a closer look at the models available through our showroom.</p>
          </section>

          {models.map((model) => <ModelSection key={model.id} model={model} />)}

          <section className="benrus-section" id="comparison">
            <p className="benrus-kicker">Side-by-side</p>
            <h2>Quick Comparison: Benrus Collection at a Glance</h2>
            <div className="benrus-comparison" role="region" aria-label="Benrus collection comparison">
              <table>
                <thead>
                  <tr><th>Model</th><th>Category</th><th>Case</th><th>Movement</th><th>Water resistance</th><th>Price</th></tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="benrus-visit" id="visit">
            <p className="benrus-kicker">In Johns Creek</p>
            <h2>See the Full Benrus Lineup in Person</h2>
            <p>Visit our Johns Creek showroom to try any Benrus model on your wrist. Our team can walk you through the history, specifications, and differences between models. Call 770-442-9854 to ask about a specific model before making the trip.</p>
            <div className="benrus-actions">
              <a className="benrus-button" href="tel:+17704429854">Call 770-442-9854</a>
              <Link className="benrus-text-link" href="/watch-sales">See watches for sale <span aria-hidden="true">→</span></Link>
              <a className="benrus-text-link" href="https://maps.app.goo.gl/qjifb5yUBFoki5RFA" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
            </div>
          </section>

          <section className="benrus-section">
            <p className="benrus-kicker">Why purchase here</p>
            <h2>Why Buy Benrus Through It’s About Time Inc.?</h2>
            <ul className="benrus-benefits">
              <li><strong>See every model in person before you commit.</strong> No buying blind from a website photo.</li>
              <li><strong>Knowledgeable staff.</strong> We can speak to the history, specifications, and differences between models.</li>
              <li><strong>On-site watch service.</strong> We can handle future servicing in-house, performed by WOSTEP- and Swiss-certified watchmakers.</li>
              <li><strong>Local, family-run business.</strong> Visit us in Johns Creek for a focused, personal buying experience.</li>
              <li><strong>National reach.</strong> If you are not local, <Link href="/watch-sales">contact our sales team</Link> to discuss a purchase.</li>
            </ul>
            <p>Whether you are a longtime watch collector who has been eyeing Benrus, or someone who just discovered the brand through the press coverage and wants to know more, we would enjoy talking watches with you. Stop in anytime.</p>
          </section>

          <section className="benrus-section benrus-faq" id="faq">
            <p className="benrus-kicker">Questions answered</p>
            <h2>Frequently Asked Questions</h2>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </section>
        </div>
      </article>

      <section className="benrus-related">
        <p className="benrus-kicker">Continue exploring</p>
        <h2>From the Journal & Workshop</h2>
        <div className="benrus-related-grid">
          <Link href="/benrus-legacy"><span>History</span><strong>The Benrus Legacy</strong><em>Read the story →</em></Link>
          <Link href="/benrus-ultra-deep"><span>Collection</span><strong>The Ultra-Deep</strong><em>Explore the model →</em></Link>
          <Link href="/our-workshop"><span>Service</span><strong>Our Workshop</strong><em>Meet the watchmakers →</em></Link>
        </div>
      </section>

      <footer className="benrus-footer">
        <img src="/assets/logo.png" alt="It’s About Time" />
        <p>Certified watchmakers & restorers of fine mechanical timepieces.</p>
        <div><Link href="/watch-repairs">Watch Repairs</Link><Link href="/watch-sales">Watch Sales</Link><Link href="/blog">Journal</Link><a href="tel:+17704429854">770-442-9854</a></div>
      </footer>

      <style jsx>{`
        .benrus-article-page { --ink:#1a1a1a; --paper:#f7f5f1; --stone:#e9e3d9; --gold:#b08d57; --muted:#6e6963; color:var(--ink); background:var(--paper); font-family:Arial, Helvetica, sans-serif; overflow:hidden; }
        .benrus-header { min-height:82px; display:flex; gap:28px; align-items:center; justify-content:space-between; padding:18px clamp(22px,5vw,80px); border-bottom:1px solid #ded8ce; background:rgba(247,245,241,.95); }
        .benrus-brand img { display:block; width:175px; height:auto; }
        .benrus-header nav { display:flex; gap:24px; align-items:center; }
        .benrus-header a { color:var(--ink); text-decoration:none; font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:.12em; }
        .benrus-header nav a { position:relative; }
        .benrus-header nav a:hover, .benrus-text-link:hover { color:var(--gold); }
        .benrus-header-cta { padding:12px 15px; background:var(--ink); color:#fff!important; }
        .benrus-hero { max-width:1440px; min-height:620px; margin:0 auto; display:grid; grid-template-columns:minmax(0,1.15fr) minmax(360px,.85fr); background:var(--paper); }
        .benrus-hero-copy { align-self:center; padding:clamp(64px,9vw,142px) clamp(24px,8vw,130px); }
        .benrus-kicker { margin:0 0 15px; font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); }
        h1,h2,h3 { font-family:Georgia, 'Times New Roman', serif; color:var(--ink); letter-spacing:-.03em; }
        h1 { max-width:700px; margin:0 0 25px; font-size:clamp(48px,5.8vw,88px); line-height:.98; font-weight:500; }
        .benrus-intro { max-width:540px; font-family:Georgia, 'Times New Roman', serif; font-size:clamp(21px,2vw,29px); line-height:1.28; color:#514d47; }
        .benrus-actions { display:flex; flex-wrap:wrap; gap:20px; align-items:center; margin-top:35px; }
        .benrus-button { display:inline-block; padding:16px 21px; color:#fff; background:var(--ink); border:1px solid var(--ink); font-size:11px; font-weight:700; text-decoration:none; text-transform:uppercase; letter-spacing:.14em; }
        .benrus-button:hover { background:var(--gold); border-color:var(--gold); }
        .benrus-text-link { color:var(--ink); font-size:12px; font-weight:700; text-decoration:none; text-transform:uppercase; letter-spacing:.12em; }
        .benrus-text-link span { margin-left:5px; color:var(--gold); }
        .benrus-hero-image { min-height:620px; background:#ded8ce; }
        .benrus-hero-image img { display:block; width:100%; height:100%; min-height:620px; object-fit:cover; object-position:center; }
        .benrus-article { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:210px minmax(0,760px); column-gap:clamp(30px,8vw,130px); padding:96px 30px 80px; }
        .benrus-aside { align-self:start; position:sticky; top:24px; padding-top:12px; border-top:1px solid #c7beb2; }
        .benrus-aside p { margin:0 0 14px; color:var(--muted); font-size:10px; letter-spacing:.14em; font-weight:700; text-transform:uppercase; }
        .benrus-aside a { display:block; margin:0 0 11px; color:var(--ink); font-size:12px; line-height:1.35; text-decoration:none; }
        .benrus-aside a:hover { color:var(--gold); }
        .benrus-content > p, .benrus-section > p, .benrus-model p, .benrus-visit p { font-size:17px; line-height:1.72; color:#3f3b37; }
        .benrus-lead { margin-top:0!important; font-family:Georgia, 'Times New Roman', serif; color:var(--ink)!important; font-size:25px!important; line-height:1.46!important; }
        .benrus-content a { color:var(--ink); text-decoration-color:var(--gold); text-underline-offset:3px; }
        .benrus-content a:hover { color:var(--gold); }
        .benrus-callout { margin:44px 0 80px; padding:37px 40px 37px; background:#eae4d9; border-left:3px solid var(--gold); }
        .benrus-callout h2, .benrus-section h2, .benrus-visit h2, .benrus-related h2 { margin:0 0 20px; font-weight:500; font-size:clamp(32px,4vw,48px); line-height:1.05; }
        .benrus-callout ul, .benrus-benefits { padding-left:20px; }
        .benrus-callout li, .benrus-benefits li { margin:0 0 11px; font-size:15px; line-height:1.55; color:#46413b; }
        .benrus-section { margin:0 0 80px; scroll-margin-top:35px; }
        .benrus-model { display:grid; grid-template-columns:minmax(230px,.78fr) minmax(0,1.22fr); gap:clamp(28px,5vw,66px); padding:66px 0; border-top:1px solid #d8d2c8; scroll-margin-top:30px; }
        .benrus-model-image { align-self:start; background:#e4ded5; overflow:hidden; }
        .benrus-model-image img { display:block; width:100%; height:auto; aspect-ratio:1/1.05; object-fit:cover; }
        .benrus-model:nth-of-type(6) .benrus-model-image img { object-position:center 26%; }
        .benrus-model h3 { margin:0 0 18px; font-size:clamp(33px,3.7vw,48px); line-height:1; font-weight:500; }
        .benrus-model p { margin:0 0 19px; }
        .benrus-specs { margin-top:28px; overflow-x:auto; border-top:1px solid #cfc8bd; }
        .benrus-specs table { width:100%; border-collapse:collapse; font-size:13px; line-height:1.4; }
        .benrus-specs th, .benrus-specs td { padding:11px 5px; border-bottom:1px solid #d9d3ca; text-align:left; vertical-align:top; }
        .benrus-specs th { width:32%; padding-right:15px; color:#5d574f; font-weight:700; }
        .benrus-specs td { color:#393530; }
        .benrus-comparison { overflow-x:auto; border-top:1px solid #cfc8bd; border-bottom:1px solid #cfc8bd; }
        .benrus-comparison table { min-width:740px; width:100%; border-collapse:collapse; font-size:13px; }
        .benrus-comparison th { padding:13px 12px; text-align:left; background:#eae4d9; color:#635d54; text-transform:uppercase; font-size:10px; letter-spacing:.08em; }
        .benrus-comparison td { padding:15px 12px; border-top:1px solid #ddd7ce; color:#393530; }
        .benrus-visit { margin:0 0 80px; padding:62px clamp(28px,7vw,80px); background:#1d1c1a; color:#f7f5f1; }
        .benrus-visit h2 { color:#fff; max-width:500px; }
        .benrus-visit p { max-width:660px; color:#dcd6cd; }
        .benrus-visit .benrus-button { background:var(--gold); border-color:var(--gold); color:var(--ink); }
        .benrus-visit .benrus-button:hover { background:#cfb378; border-color:#cfb378; }
        .benrus-visit .benrus-text-link { color:#fff; }
        .benrus-faq details { border-top:1px solid #d3ccc1; }
        .benrus-faq details:last-child { border-bottom:1px solid #d3ccc1; }
        .benrus-faq summary { display:flex; justify-content:space-between; gap:25px; padding:20px 0; cursor:pointer; list-style:none; font-family:Georgia, 'Times New Roman', serif; font-size:21px; line-height:1.2; }
        .benrus-faq summary::-webkit-details-marker { display:none; }
        .benrus-faq summary span { color:var(--gold); font-family:Arial, sans-serif; font-size:25px; line-height:.8; }
        .benrus-faq details[open] summary span { transform:rotate(45deg); }
        .benrus-faq details p { max-width:700px; margin:0 0 21px; color:#48433d; font-size:16px; line-height:1.65; }
        .benrus-related { padding:88px max(30px,calc((100vw - 1170px)/2)); background:#eae4d9; }
        .benrus-related h2 { margin-bottom:35px; }
        .benrus-related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .benrus-related-grid a { min-height:190px; display:flex; flex-direction:column; justify-content:space-between; padding:27px; background:#f7f5f1; color:var(--ink); text-decoration:none; transition:transform .18s ease, background .18s ease; }
        .benrus-related-grid a:hover { transform:translateY(-4px); background:#fff; }
        .benrus-related-grid span, .benrus-related-grid em { color:var(--gold); font-size:10px; font-style:normal; font-weight:700; text-transform:uppercase; letter-spacing:.14em; }
        .benrus-related-grid strong { max-width:205px; font-family:Georgia, 'Times New Roman', serif; font-size:29px; line-height:1; font-weight:500; }
        .benrus-footer { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:25px; padding:45px clamp(24px,5vw,80px); background:#1d1c1a; color:#d9d2c8; }
        .benrus-footer img { width:155px; filter:invert(1) grayscale(1) brightness(4); }
        .benrus-footer p { max-width:290px; margin:0; font-size:13px; line-height:1.5; }
        .benrus-footer div { display:flex; flex-wrap:wrap; gap:15px; }
        .benrus-footer a { color:#f7f5f1; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; }
        @media (max-width: 850px) { .benrus-header { gap:14px; padding:16px 20px; } .benrus-brand img { width:135px; } .benrus-header nav { display:none; } .benrus-header-cta { margin-left:auto; } .benrus-hero { grid-template-columns:1fr; } .benrus-hero-copy { padding:70px 27px 58px; } .benrus-hero-image, .benrus-hero-image img { min-height:430px; max-height:620px; } .benrus-hero-image img { object-position:center 24%; } .benrus-article { display:block; padding:64px 24px; } .benrus-aside { position:static; display:none; } .benrus-model { grid-template-columns:1fr; gap:30px; padding:51px 0; } .benrus-model-image { max-width:520px; } .benrus-related { padding:64px 24px; } .benrus-related-grid { grid-template-columns:1fr; } .benrus-related-grid a { min-height:150px; } }
        @media (max-width: 480px) { .benrus-header-cta { font-size:9px!important; padding:11px 10px; } .benrus-brand img { width:118px; } .benrus-hero-image, .benrus-hero-image img { min-height:370px; } .benrus-callout { margin-bottom:60px; padding:30px 23px; } .benrus-callout h2, .benrus-section h2, .benrus-visit h2, .benrus-related h2 { font-size:34px; } .benrus-model h3 { font-size:37px; } .benrus-content > p, .benrus-section > p, .benrus-model p, .benrus-visit p { font-size:16px; } .benrus-lead { font-size:22px!important; } .benrus-specs th { width:39%; } .benrus-footer { padding:38px 24px; } }
      `}</style>
    </main>
  );
}
