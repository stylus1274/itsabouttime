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

export const faqEntries: FaqEntry[] = [];

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
            ${questions.map((faq) => `<li><span style="color:#2d2d2d;">${escapeHtml(faq.question)}</span></li>`).join("")}
          </ul>
          <p style="margin:18px 0 0;font-size:13px;color:#777;">These standalone answers are planned for the first publishing phase.</p>
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
    <main>
      <section style="background:#1B262C;padding:64px 24px;color:#fff;">
        <div style="max-width:960px;margin:0 auto;">
          <p style="margin:0 0 12px;color:#BFA353;font:700 12px/1.2 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;">${escapeHtml(category?.name ?? "Watch FAQ")}</p>
          <h1 style="margin:0 0 20px;color:#fff;font-size:clamp(36px,5vw,58px);line-height:1.08;">${escapeHtml(entry.question)}</h1>
          <p style="margin:0;max-width:800px;font-size:20px;line-height:1.65;color:#edf0f1;"><strong>${escapeHtml(entry.shortAnswer)}</strong></p>
        </div>
      </section>
      <section style="padding:56px 24px;background:#fff;">
        <div style="max-width:860px;margin:0 auto;">
          <article>
            ${entry.bodyHtml}
            <div style="margin-top:36px;padding:26px;border-radius:12px;background:#f7f5f1;border-left:4px solid #BFA353;">
              <h2 style="margin-top:0;">Need Help With Your Watch?</h2>
              <p>If the answer depends on your watch's condition, movement, age, or previous service, an inspection is the safest next step.</p>
              <a href="${entry.relatedServiceHref}" style="font-weight:700;color:#1B262C;">${escapeHtml(entry.relatedServiceLabel)}</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  `;
}
