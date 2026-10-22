export type FaqCategory = {
  slug: string;
  name: string;
  description: string;
};

export type FaqEntry = {
  slug: string;
  question: string;
  category: string;
  shortAnswer: string;
  bodyHtml: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
  relatedFaqSlugs?: string[];
  internalLinks: { href: string; label: string; description?: string }[];
  status: "planned" | "published";
};

export const faqCategories: FaqCategory[] = [
  { slug: "watch-repair", name: "Watch Repair", description: "Costs, timelines, service decisions, diagnostics, and what to expect from professional watch repair." },
  { slug: "batteries-quartz", name: "Batteries & Quartz Watches", description: "Battery replacement, quartz problems, resealing, and water-resistance questions." },
  { slug: "mechanical-service", name: "Mechanical Watch Service", description: "Accuracy, power reserve, winding, maintenance, and mechanical movement care." },
  { slug: "water-resistance", name: "Water Resistance", description: "Pressure testing, seals, moisture, condensation, and safe water use." },
  { slug: "bracelets-straps", name: "Bracelets & Straps", description: "Sizing, stretch, clasps, spring bars, straps, bracelets, and replacement options." },
  { slug: "rolex", name: "Rolex", description: "Rolex repair, bracelet wear, service decisions, turnaround, and ownership questions." },
  { slug: "omega", name: "Omega", description: "Omega service, maintenance, batteries, water resistance, and repair guidance." },
  { slug: "vintage-watches", name: "Vintage Watches", description: "Restoration, originality, crystals, polishing, parts, and preserving long-term value." },
  { slug: "mail-in-repair", name: "Mail-In Watch Repair", description: "Shipping, packaging, estimates, communication, and nationwide repair service." },
  { slug: "watch-ownership", name: "Watch Ownership", description: "Buying, care, storage, authenticity, maintenance, and everyday ownership questions." }
];

export const plannedFaqs: Pick<FaqEntry, "slug" | "question" | "category" | "status">[] = [
  { slug: "how-much-does-watch-repair-cost", question: "How Much Does Watch Repair Cost?", category: "watch-repair", status: "planned" },
  { slug: "what-is-included-in-a-full-watch-service", question: "What Is Included in a Full Watch Service?", category: "watch-repair", status: "planned" },
  { slug: "does-replacing-a-watch-battery-affect-water-resistance", question: "Does Replacing a Watch Battery Affect Water Resistance?", category: "batteries-quartz", status: "planned" },
  { slug: "how-much-does-watch-battery-replacement-cost", question: "How Much Does Watch Battery Replacement Cost?", category: "batteries-quartz", status: "planned" },
  { slug: "why-did-my-watch-stop-after-battery-replacement", question: "Why Did My Watch Stop Again After a Battery Replacement?", category: "batteries-quartz", status: "planned" },
  { slug: "why-is-my-automatic-watch-running-fast-or-slow", question: "Why Is My Automatic Watch Running Fast or Slow?", category: "mechanical-service", status: "planned" },
  { slug: "why-does-my-automatic-watch-stop-overnight", question: "Why Does My Automatic Watch Stop Overnight?", category: "mechanical-service", status: "planned" },
  { slug: "can-a-scratched-sapphire-watch-crystal-be-repaired", question: "Can a Scratched Sapphire Watch Crystal Be Repaired?", category: "watch-repair", status: "planned" },
  { slug: "can-a-broken-watch-crown-be-repaired-or-replaced", question: "Can a Broken Watch Crown Be Repaired or Replaced?", category: "watch-repair", status: "planned" },
  { slug: "does-polishing-a-vintage-watch-reduce-its-value", question: "Does Polishing a Vintage Watch Reduce Its Value?", category: "vintage-watches", status: "planned" }
];

export const faqEntries: FaqEntry[] = [
  {
    slug: "how-much-does-watch-repair-cost",
    question: "How Much Does Watch Repair Cost?",
    category: "watch-repair",
    shortAnswer: "Watch repair costs vary by the type of service, the watch brand, its condition, required parts, and the complexity of the movement. Its About Time Inc. provides a free estimate after inspecting the watch so you can understand the recommended work and cost before service begins.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>Watch repair can range from a relatively simple battery or bracelet service to several hundred dollars or more for a full mechanical overhaul, restoration, or water-damage repair.</strong> The right price depends on the watch itself and what the inspection shows.</p>
        <p>Its About Time Inc. does not use one flat price for all repairs. The workshop evaluates the watch first, then explains the recommended work, required parts, timing, and estimate before service begins.</p>
      </div>

      <h2>Typical Watch Repair Cost Ranges</h2>
      <p>Existing pricing published across the Its About Time Inc. website shows that costs can vary considerably by service and watch type. The ranges below are best treated as general examples rather than guaranteed quotes.</p>

      <div class="post-table-wrapper">
        <table class="post-table">
          <thead>
            <tr><th>Service</th><th>Published Example Range</th><th>What Can Affect the Price</th></tr>
          </thead>
          <tbody>
            <tr><td>Battery replacement</td><td>About $20 to $150</td><td>Brand, battery type, resealing, gasket condition, and pressure testing</td></tr>
            <tr><td>Bracelet or strap adjustment</td><td>About $30 to $100</td><td>Bracelet type, pins, links, clasp condition, and fitting work</td></tr>
            <tr><td>Crystal or crown repair/replacement</td><td>About $150 to $500</td><td>Brand, material, part availability, and extent of damage</td></tr>
            <tr><td>Full mechanical service</td><td>About $300 to $1,000+</td><td>Movement complexity, condition, brand, required parts, and restoration work</td></tr>
            <tr><td>Water-damage restoration</td><td>Often $500+</td><td>How long moisture was present, corrosion, movement damage, seals, and parts needed</td></tr>
          </tbody>
        </table>
      </div>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> Do not use an online price range as a substitute for an inspection. Two watches with the same symptom can require very different repairs once the case is opened and the movement is evaluated.</p>
      </div>

      <h2>Why Watch Repair Prices Vary</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>The Type of Watch</h3>
          <p>A basic quartz watch, a mechanical watch, and a complicated luxury chronograph do not require the same amount of bench time or the same parts. Mechanical and automatic watches generally involve more disassembly, cleaning, lubrication, adjustment, and testing than a straightforward battery-powered watch.</p>
        </section>

        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>The Condition of the Watch</h3>
          <p>A watch that simply needs routine service is different from one with moisture intrusion, corrosion, damaged components, or a history of previous repair. The workshop checks the case and movement for wear, damage, rust, moisture, and other issues before recommending work.</p>
        </section>

        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Parts and Brand Requirements</h3>
          <p>Parts availability can affect both cost and turnaround time. Certain brands, calibers, crystals, crowns, gaskets, bracelets, and movement components may require specific parts or additional service procedures.</p>
        </section>

        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>The Scope of Service</h3>
          <p>A complete mechanical service involves more than fixing the symptom that brought the watch in. The movement may be disassembled, cleaned, inspected, lubricated, reassembled, adjusted, and tested. Exterior components may also need cleaning, refinishing by request, resealing, or functional checks.</p>
        </section>
      </div>

      <h2>Do You Get an Estimate Before the Repair?</h2>
      <p><strong>Yes. Its About Time Inc. provides a free estimate before repair work begins.</strong> The watch is assessed first so the team can explain the recommended service, parts, timing, and cost before you commit to the repair.</p>

      <p>This is especially important for vintage and luxury watches, where originality, condition, previous service, and parts availability can materially change the best repair path.</p>

      <h2>What If the Watch Cannot Be Repaired?</h2>
      <p><strong>Its About Time Inc. states that it operates on a no-fix, no-fee basis for repairs it cannot complete.</strong> If the workshop determines that the watch cannot be repaired, you are not charged for that service.</p>

      <h2>Is It Worth Paying to Repair a Watch?</h2>
      <p>The answer depends on the watch's financial value, sentimental value, condition, and the cost of the repair. A low-cost fashion watch may not justify an expensive movement repair, while a luxury, vintage, collectible, or sentimental watch may be well worth servicing even when the repair cost is substantial.</p>

      <p>That decision is easier after an inspection because you can compare the estimated repair cost with the watch's condition and what preserving the watch means to you.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> Ask for the estimate before authorizing work, especially when the watch has water damage, movement problems, or hard-to-source parts.</p>
      </div>

      <h2>How to Get an Accurate Watch Repair Price</h2>
      <p>The most reliable way to know what your watch will cost to repair is to have it inspected. Walk-ins are welcome at the Johns Creek workshop, or you can start with the repair request form if you are outside the area or want to begin the process online.</p>

      <p>Its About Time Inc. services mechanical, automatic, quartz, vintage, luxury, sport, and everyday watches. The appropriate repair and final estimate depend on the individual watch.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Free Watch Repair Estimate",
    relatedFaqSlugs: [
      "what-is-included-in-a-full-watch-service",
      "how-much-does-watch-battery-replacement-cost",
      "can-a-broken-watch-crown-be-repaired-or-replaced"
    ],
    internalLinks: [
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "See the repair process and available service options." },
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "Learn how watches are inspected, serviced, and tested in-house." },
      { href: "/watch-repair-or-replace-johns-creek-ga/", label: "Repair or Replace a Watch?", description: "Compare repair cost, condition, value, and sentimental importance before deciding." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Understand when pressure testing and resealing may affect the final service cost." }
    ],
    status: "published"
  }
];

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function buildFaqHubHtml() {
  const categoryMarkup = faqCategories.map((category) => {
    const questions = plannedFaqs.filter((faq) => faq.category === category.slug);
    return `
      <section id="${category.slug}" style="padding:26px;border:1px solid #e7e1d6;border-radius:14px;background:#fff;">
        <p style="margin:0 0 8px;font:700 12px/1.2 Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#9b7b32;">FAQ Category</p>
        <h2 style="margin:0 0 10px;color:#1B262C;">${escapeHtml(category.name)}</h2>
        <p style="margin:0 0 20px;color:#555;line-height:1.65;">${escapeHtml(category.description)}</p>
        ${questions.length ? `
          <ul style="margin:0;padding-left:20px;display:grid;gap:10px;">
            ${questions.map((faq) => { const published = faqEntries.find((entry) => entry.slug === faq.slug && entry.status === "published"); return published ? `<li><a href="/faqs/${faq.slug}/" style="color:#1B262C;font-weight:700;text-decoration:underline;text-decoration-color:#BFA353;text-underline-offset:3px;">${escapeHtml(faq.question)}</a></li>` : `<li><span style="color:#2d2d2d;">${escapeHtml(faq.question)}</span></li>`; }).join("")}
          </ul>
          <p style="margin:18px 0 0;font-size:13px;color:#777;">Published answers are linked above. Remaining questions are planned for the next publishing phase.</p>
        ` : `<p style="margin:0;color:#777;">Additional questions will be added as the library expands.</p>`}
      </section>
    `;
  }).join("");

  return `
    <main>
      <section style="background:#1B262C;padding:72px 24px 64px;color:#fff;">
        <div style="max-width:1120px;margin:0 auto;">
          <p style="margin:0 0 12px;color:#BFA353;font:700 12px/1.2 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;">Watch Knowledge Center</p>
          <h1 style="margin:0 0 18px;max-width:850px;color:#fff;font-size:clamp(38px,5vw,64px);line-height:1.05;">Watch Repair & Ownership FAQs</h1>
          <p style="max-width:780px;margin:0;color:#e8ecee;font-size:19px;line-height:1.65;">Clear answers to common questions about watch repair, batteries, mechanical service, water resistance, bracelets, luxury brands, vintage watches, and long-term ownership.</p>
        </div>
      </section>

      <section style="padding:64px 24px;background:#f7f5f1;">
        <div style="max-width:1120px;margin:0 auto;">
          <div style="max-width:760px;margin-bottom:34px;">
            <h2 style="margin:0 0 12px;color:#1B262C;">Browse Watch FAQs by Topic</h2>
            <p style="margin:0;color:#555;font-size:17px;line-height:1.7;">Use the categories below to find practical answers from a watch-focused business with an in-house workshop in Johns Creek. The library is designed to connect common questions with the service or next step that makes sense.</p>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;">
            ${categoryMarkup}
          </div>
        </div>
      </section>

      <section style="padding:58px 24px;background:#fff;">
        <div style="max-width:1120px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:34px;align-items:center;">
          <div>
            <p style="margin:0 0 8px;color:#9b7b32;font:700 12px/1.2 Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;">Need Help With Your Watch?</p>
            <h2 style="margin:0 0 12px;color:#1B262C;">Some Questions Need an Inspection</h2>
            <p style="margin:0;color:#555;font-size:17px;line-height:1.7;">A general answer can help you understand the issue, but condition, movement, age, water exposure, prior service, and parts availability can change the recommendation for a specific watch.</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;">
            <a href="/watch-repairs/" style="display:inline-block;padding:14px 20px;border-radius:6px;background:#BFA353;color:#1B262C;font:800 14px/1 Arial,sans-serif;text-decoration:none;">Start a Repair</a>
            <a href="/contact/" style="display:inline-block;padding:14px 20px;border:1px solid #1B262C;border-radius:6px;color:#1B262C;font:800 14px/1 Arial,sans-serif;text-decoration:none;">Contact the Workshop</a>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function buildFaqDetailHtml(entry: FaqEntry) {
  const category = faqCategories.find((item) => item.slug === entry.category);
  return `
    <main class="faq-detail">
      <section class="faq-detail__hero">
        <div class="faq-detail__hero-inner">
          <a class="faq-detail__back" href="/faqs/">← Back to Watch FAQs</a>
          <p class="faq-detail__eyebrow">${escapeHtml(category?.name ?? "Watch FAQ")}</p>
          <h1>${escapeHtml(entry.question)}</h1>
          <p class="faq-detail__lead">${escapeHtml(entry.shortAnswer)}</p>
          <div class="faq-detail__trust">
            <span>Free Repair Estimate</span>
            <span>In-House Workshop</span>
            <span>Johns Creek, GA</span>
          </div>
        </div>
      </section>

      <section class="faq-detail__content">
        <div class="faq-detail__content-inner">
          <article class="faq-detail__article">
            ${entry.bodyHtml}

            <section class="faq-detail__related">
              <p class="faq-detail__related-label">Related Resources</p>
              <h2>Helpful Pages From Its About Time Inc.</h2>
              <div class="faq-detail__related-grid">
                ${entry.internalLinks.map((link) => `
                  <a href="${link.href}" class="faq-detail__related-card">
                    <strong>${escapeHtml(link.label)}</strong>
                    ${link.description ? `<span>${escapeHtml(link.description)}</span>` : ""}
                  </a>
                `).join("")}
              </div>
            </section>

            <section class="faq-detail__cta">
              <div>
                <p class="faq-detail__cta-label">Need an Exact Price?</p>
                <h2>Let the Workshop Inspect Your Watch</h2>
                <p>If the answer depends on your watch's condition, movement, age, or previous service, an inspection is the safest way to get an accurate recommendation and estimate.</p>
              </div>
              <a href="${entry.relatedServiceHref}">${escapeHtml(entry.relatedServiceLabel)}</a>
            </section>
          </article>
        </div>
      </section>
    </main>
  `;
}
