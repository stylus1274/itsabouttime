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
  { slug: "what-is-included-in-a-full-watch-service", question: "What Is Included in a Full Watch Service?", category: "watch-repair", status: "published" },
  { slug: "does-replacing-a-watch-battery-affect-water-resistance", question: "Does Replacing a Watch Battery Affect Water Resistance?", category: "batteries-quartz", status: "published" },
  { slug: "how-much-does-watch-battery-replacement-cost", question: "How Much Does Watch Battery Replacement Cost?", category: "batteries-quartz", status: "published" },
  { slug: "why-did-my-watch-stop-after-battery-replacement", question: "Why Did My Watch Stop Again After a Battery Replacement?", category: "batteries-quartz", status: "published" },
  { slug: "why-is-my-automatic-watch-running-fast-or-slow", question: "Why Is My Automatic Watch Running Fast or Slow?", category: "mechanical-service", status: "published" },
  { slug: "why-does-my-automatic-watch-stop-overnight", question: "Why Does My Automatic Watch Stop Overnight?", category: "mechanical-service", status: "published" },
  { slug: "can-a-scratched-sapphire-watch-crystal-be-repaired", question: "Can a Scratched Sapphire Watch Crystal Be Repaired?", category: "watch-repair", status: "published" },
  { slug: "can-a-broken-watch-crown-be-repaired-or-replaced", question: "Can a Broken Watch Crown Be Repaired or Replaced?", category: "watch-repair", status: "published" },
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
  },
  {
    slug: "what-is-included-in-a-full-watch-service",
    question: "What Is Included in a Full Watch Service?",
    category: "watch-repair",
    shortAnswer: "A full watch service typically includes inspection and diagnosis, movement disassembly, cleaning, inspection of components, lubrication, reassembly, timing or regulation, and final testing. Water-resistance testing and exterior work may also be included when appropriate for the watch and the approved service.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>A full watch service is a complete movement service, not just a quick repair of the symptom you noticed.</strong> The watch is evaluated, the movement is taken apart, components are cleaned and inspected, appropriate lubrication is applied, the movement is reassembled and regulated, and the watch is tested before it is returned.</p>
        <p>At Its About Time Inc., the exact work depends on the movement, condition, brand requirements, water-resistance needs, and what the inspection finds.</p>
      </div>

      <h2>What Happens During a Full Watch Service?</h2>
      <p>The process starts with inspection and diagnosis. Its About Time Inc. examines the watch before work begins and provides an estimate so the recommended service can be reviewed first. You can learn more about how work is handled in the <a href="/workshop/">Its About Time Inc. workshop</a>.</p>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Inspection & Diagnosis</h3>
          <p>The case, movement, crown, crystal, seals, bracelet or strap, and visible condition are assessed to identify the actual service needs before repair work begins.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Movement Disassembly</h3>
          <p>For a complete mechanical service, the movement is removed and disassembled so internal components can be cleaned and evaluated individually.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Cleaning & Inspection</h3>
          <p>Movement components are cleaned and checked for wear, damage, corrosion, or parts that may need repair or replacement.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Lubrication & Reassembly</h3>
          <p>Appropriate lubricants are applied where required, then the movement is carefully reassembled for adjustment and testing.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">05</span>
          <h3>Regulation & Accuracy Testing</h3>
          <p>The movement is adjusted and tested so the watch can be evaluated for proper operation and timekeeping after service.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">06</span>
          <h3>Sealing & Final Testing</h3>
          <p>Where applicable, gaskets and sealing points are evaluated and the watch may be pressure tested before final inspection and return.</p>
        </section>
      </div>

      <h2>Does a Full Service Include New Parts?</h2>
      <p><strong>Not automatically.</strong> A full service includes inspection of the movement and its components, but parts should only be replaced when their condition or the service requirements make replacement necessary. The workshop emphasizes preserving serviceable original components when possible.</p>

      <p>If a part is worn, damaged, corroded, or no longer capable of reliable operation, the estimate can reflect the additional work or replacement required. This is one reason a complete inspection matters before a final service recommendation is made.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> Ask whether the estimate is for a complete movement service or only a specific repair. A full service usually involves significantly more disassembly, cleaning, adjustment, and testing than correcting one isolated problem.</p>
      </div>

      <h2>Is Water-Resistance Testing Part of a Full Service?</h2>
      <p>For watches designed to be water resistant, pressure testing is an important part of service after the case has been opened. The site specifically notes that gaskets and seals can be disturbed during service and that water resistance should be verified before the watch is relied on around water. See the detailed guide to <a href="/watch-pressure-test/">watch pressure testing</a>.</p>

      <p>Very low-rated dress watches and watches not intended for meaningful water exposure may be handled differently. The appropriate test depends on the watch and its construction.</p>

      <h2>Does Full Service Include Polishing or Refinishing?</h2>
      <p>Exterior cleaning, polishing, bracelet work, or refinishing can be part of some services, but those steps should not be assumed for every watch. Vintage and collectible watches in particular may require a more conservative approach because originality and case condition can affect value.</p>

      <p>If the exterior is part of your concern, discuss it during the estimate rather than assuming cosmetic work is automatically included.</p>

      <h2>How Is a Full Service Different From a Simple Repair?</h2>
      <p>A simple repair may address one specific issue, such as a battery, crown, crystal, bracelet, or gasket. A full mechanical service addresses the movement as a complete system. That can make sense when the watch has not been serviced for years, has multiple symptoms, is running poorly, or needs broader preventive maintenance.</p>

      <p>If you are unsure which path makes sense, start with the <a href="/watch-repairs/">watch repair service</a> page or review the existing guidance on <a href="/watch-repair-or-replace-johns-creek-ga/">whether to repair or replace a watch</a>.</p>

      <h2>How Do You Know What Your Watch Actually Needs?</h2>
      <p>The answer comes from inspection. Age alone does not tell the whole story. Usage, water exposure, previous repairs, movement condition, lubrication, worn parts, and how the watch is currently performing all affect the recommendation.</p>

      <p>Its About Time Inc. evaluates the watch first and provides an estimate before the approved service begins.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Watch Service Estimate",
    relatedFaqSlugs: [
      "how-much-does-watch-repair-cost",
      "does-replacing-a-watch-battery-affect-water-resistance",
      "why-is-my-automatic-watch-running-fast-or-slow"
    ],
    internalLinks: [
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start with an inspection and learn about available repair options." },
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "See how the in-house workshop approaches repair and restoration." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Learn why seals and water resistance should be verified after case opening." },
      { href: "/watch-repair-or-replace-johns-creek-ga/", label: "Repair or Replace a Watch?", description: "Use condition, value, repair scope, and sentiment to make the right decision." }
    ],
    status: "published"
  },
  {
    slug: "does-replacing-a-watch-battery-affect-water-resistance",
    question: "Does Replacing a Watch Battery Affect Water Resistance?",
    category: "batteries-quartz",
    shortAnswer: "Replacing the battery itself does not reduce a watch's water resistance, but opening the case can disturb the gasket or seal. After battery service, a water-resistant watch should be properly resealed and pressure tested before you rely on its previous water-resistance rating.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>The battery is not what protects a watch from water. The case, crown, crystal, case back, gaskets, and seals do that.</strong> The important issue is that a battery replacement requires opening the case, which can disturb a gasket or expose an aging seal.</p>
        <p>Until the watch is properly resealed and tested, its previous water-resistance rating should not be treated as confirmed.</p>
      </div>

      <h2>Why Can Battery Replacement Affect Water Resistance?</h2>
      <p>A battery replacement usually requires removing the case back. The gasket that seals that opening may be compressed, dry, worn, damaged, or simply disturbed when the case is opened. Its About Time Inc.'s <a href="/watch-pressure-test/">pressure-testing guide</a> specifically notes that water resistance becomes unverified after case opening until the watch is tested again.</p>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>The Case Is Opened</h3>
          <p>The battery cannot usually be changed without opening the case, which means the case-back seal is disturbed during service.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>The Gasket Is Inspected</h3>
          <p>A watchmaker checks whether the gasket is seated correctly and whether age, dryness, compression, or damage means it should be replaced.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>The Case Is Resealed</h3>
          <p>The case back is closed using the appropriate tools and sealing procedure for the watch.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Water Resistance Is Verified</h3>
          <p>For applicable water-resistant watches, pressure testing verifies whether the sealing system is still functioning before the watch is exposed to water.</p>
        </section>
      </div>

      <h2>Should Every Watch Be Pressure Tested After a Battery Change?</h2>
      <p>Pressure testing is most important when the watch is water resistant and you intend to rely on that protection. Dive watches, sport watches, luxury watches, and watches regularly exposed to swimming, rain, humidity, or other moisture deserve particular attention.</p>

      <p>The site notes that not every low-rated dress watch is necessarily tested in the same way, so the appropriate service depends on the model and how the watch is used.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> If you plan to swim, shower, dive, or regularly expose the watch to water, ask specifically whether pressure testing is included with the battery service. Do not assume a closed case automatically means the original rating has been restored.</p>
      </div>

      <h2>What Does a Watchmaker Check During Battery Service?</h2>
      <p>Its About Time Inc.'s battery-service pages describe checking the case condition, old battery, gasket and seals, correct replacement battery, and watch function. Higher-end and water-resistant watches may also need resealing and pressure testing. The <a href="/cartier-watch-battery-replacement/">Cartier battery service</a> page shows the same basic sequence for a luxury watch: inspect, open with proper tools, check the old battery, install the correct battery, inspect the gasket, reseal, and test as appropriate.</p>

      <h2>What Happens If the Watch Fails the Pressure Test?</h2>
      <p>A failed test means the sealing system is not currently providing the protection expected. Common causes listed on the site include worn or dried gaskets, a case back that is not sealing correctly, or a compromised crown seal.</p>

      <p>The problem can then be identified and corrected before water exposure causes condensation, corrosion, dial damage, or movement damage.</p>

      <h2>Can You Skip Pressure Testing If You Never Get the Watch Wet?</h2>
      <p>The risk is lower if the watch is never intentionally exposed to water, but moisture can still come from rain, hand washing, humidity, or accidental exposure. More importantly, you should not assume the original water-resistance rating remains valid after a case opening unless it has been verified.</p>

      <h2>What Is the Safest Way to Replace a Watch Battery?</h2>
      <p>Use a watch repair shop that does more than simply swap the cell. The safest service checks the old battery, uses the correct replacement, evaluates the gasket, closes the case correctly, and addresses water-resistance testing when appropriate.</p>

      <p>You can review the broader <a href="/watch-battery-replacement-atlanta/">watch battery replacement service</a> or start with the <a href="/watch-repairs/">watch repair process</a> if you are unsure what your watch needs.</p>
    `,
    relatedServiceHref: "/watch-battery-replacement-atlanta/",
    relatedServiceLabel: "Explore Watch Battery Service",
    relatedFaqSlugs: [
      "how-much-does-watch-battery-replacement-cost",
      "why-did-my-watch-stop-after-battery-replacement",
      "what-is-included-in-a-full-watch-service"
    ],
    internalLinks: [
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "See when and why water resistance should be verified after a case is opened." },
      { href: "/watch-battery-replacement-atlanta/", label: "Watch Battery Replacement", description: "Learn about professional battery service for everyday and luxury watches." },
      { href: "/cartier-watch-battery-replacement/", label: "Cartier Battery Service", description: "See how gasket inspection, resealing, and testing apply to a luxury quartz watch." },
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start a repair request when the battery may not be the only issue." }
    ],
    status: "published"
  },
  {
    slug: "how-much-does-watch-battery-replacement-cost",
    question: "How Much Does Watch Battery Replacement Cost?",
    category: "batteries-quartz",
    shortAnswer: "Its About Time Inc. currently publishes standard watch battery replacement prices starting around $10, with many standard replacements around $15 to $25. Waterproof and luxury watches that require resealing or pressure testing are commonly listed around $20 to $50, depending on the watch and service needed.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>Watch battery replacement is usually inexpensive, but the final cost depends on the watch.</strong> Its About Time Inc. currently publishes standard battery replacement pricing starting around $10, with many standard replacements around $15 to $25.</p>
        <p>Waterproof or luxury watches that need additional gasket attention, resealing, or pressure testing are commonly listed around $20 to $50.</p>
      </div>

      <h2>Typical Watch Battery Replacement Cost</h2>
      <p>The site currently publishes several battery-service price examples. Because different watch types require different levels of handling, those numbers are best treated as general ranges rather than one fixed shop price.</p>

      <div class="post-table-wrapper">
        <table class="post-table">
          <thead>
            <tr><th>Battery Service</th><th>Published Range</th><th>What Can Change the Price</th></tr>
          </thead>
          <tbody>
            <tr><td>Standard watch battery</td><td>Starts around $10</td><td>Watch design, battery type, case access, and brand</td></tr>
            <tr><td>Typical standard replacement</td><td>About $15 to $25</td><td>Battery type and the amount of service required</td></tr>
            <tr><td>Waterproof or luxury watch</td><td>About $20 to $50</td><td>Resealing, gasket condition, pressure testing, brand, and case complexity</td></tr>
          </tbody>
        </table>
      </div>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> If the watch is water resistant, ask whether the quoted battery price includes gasket inspection, resealing, and pressure testing. A low battery-change price may only cover the cell itself.</p>
      </div>

      <h2>Why Does Battery Replacement Cost More on Some Watches?</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Battery Type</h3>
          <p>Different movements use different cells. The correct battery matters for reliable operation and should match the movement requirements.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Case Construction</h3>
          <p>Some case backs are simple to access, while others require specific tools and more careful handling to avoid damage.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Gaskets & Resealing</h3>
          <p>A water-resistant watch may need its gasket inspected or replaced before the case is resealed.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Pressure Testing</h3>
          <p>If the watch is expected to remain water resistant, testing may be needed after the case has been opened.</p>
        </section>
      </div>

      <h2>Does the Cheapest Battery Replacement Include Water-Resistance Testing?</h2>
      <p>Not necessarily. A basic battery replacement can be different from a complete battery service for a water-resistant or luxury watch. Its About Time Inc.'s own guidance explains that opening the case can disturb the gasket, which is why <a href="/watch-pressure-test/">pressure testing</a> matters when water resistance is important.</p>

      <p>The separate FAQ on <a href="/faqs/does-replacing-a-watch-battery-affect-water-resistance/">battery replacement and water resistance</a> explains why the prior water-resistance rating should not simply be assumed after the case has been opened.</p>

      <h2>Why Can Luxury Watch Battery Service Cost More?</h2>
      <p>Luxury watches can require more careful case handling, brand-specific tools, gasket attention, and testing. The <a href="/cartier-watch-battery-replacement/">Cartier battery replacement</a> page, for example, describes a process that includes inspection, the correct battery, gasket evaluation, resealing, and pressure testing when appropriate.</p>

      <h2>Can a Battery Replacement Turn Into a Repair?</h2>
      <p>Yes. A stopped quartz watch does not always need only a battery. If a new battery does not restore normal operation, the watch may have corroded contacts, moisture damage, a failing quartz movement or electronic module, or another internal problem that needs diagnosis.</p>

      <p>That is why Its About Time Inc. recommends inspection rather than assuming every stopped quartz watch has a dead battery. If the battery is not the only issue, the broader <a href="/watch-repairs/">watch repair process</a> is the appropriate next step.</p>

      <h2>How Do You Get an Exact Battery Replacement Price?</h2>
      <p>Bring the watch to the Johns Creek workshop or start a repair request. The exact price depends on the watch, battery type, gasket condition, water-resistance needs, and whether any additional problem is found during inspection.</p>
    `,
    relatedServiceHref: "/watch-battery-replacement-atlanta/",
    relatedServiceLabel: "Explore Watch Battery Service",
    relatedFaqSlugs: [
      "does-replacing-a-watch-battery-affect-water-resistance",
      "why-did-my-watch-stop-after-battery-replacement",
      "how-much-does-watch-repair-cost"
    ],
    internalLinks: [
      { href: "/watch-battery-replacement-atlanta/", label: "Watch Battery Replacement", description: "See the site's main battery replacement service and current service guidance." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Learn when testing and resealing may be part of battery service." },
      { href: "/cartier-watch-battery-replacement/", label: "Cartier Battery Replacement", description: "See how battery service differs for a luxury watch." },
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start a diagnosis if a battery replacement does not solve the problem." }
    ],
    status: "published"
  },
  {
    slug: "why-did-my-watch-stop-after-battery-replacement",
    question: "Why Did My Watch Stop Again After a Battery Replacement?",
    category: "batteries-quartz",
    shortAnswer: "If a watch stops again after a battery replacement, the battery may not be the real problem. Its About Time Inc. notes that quartz watches can also stop because of corroded battery contacts, leakage from an old battery, moisture damage, a failing electronic module or movement, or another internal issue that needs diagnosis.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>A new battery should restore a healthy quartz watch, so if it stops again, the watch needs diagnosis rather than another automatic battery swap.</strong></p>
        <p>Its About Time Inc. identifies several possible causes beyond the battery itself, including corroded contacts, battery leakage, moisture, a failing quartz movement or electronic module, and other internal movement problems.</p>
      </div>

      <h2>Common Reasons a Watch Stops After a New Battery</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Corroded Battery Contacts</h3>
          <p>Even with a fresh battery installed, corrosion at the contacts can interrupt power delivery to the movement.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Old Battery Leakage</h3>
          <p>A battery left in too long can leak and damage nearby components. The new battery may be fine while the movement still cannot operate reliably.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Quartz Movement Failure</h3>
          <p>The electronic module or movement itself can fail. In that situation, replacing the cell does not address the underlying problem.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Moisture or Internal Damage</h3>
          <p>Water intrusion, corrosion, or other internal damage can stop the watch even when the battery has adequate power.</p>
        </section>
      </div>

      <h2>Does a Stopped Watch Always Mean the Battery Is Dead?</h2>
      <p><strong>No.</strong> The site's <a href="/cartier-watch-battery-replacement/">Cartier battery service</a> page explicitly notes that a stopped watch does not always mean the battery is the only issue. The watch should be inspected before the service recommendation is made.</p>

      <p>This is especially important if the battery was replaced recently, the watch has had moisture exposure, or the watch has a history of intermittent stopping.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> If a watch stops soon after a battery replacement, do not keep replacing batteries without diagnosis. Repeated battery swaps can delay finding corrosion, moisture damage, or a failing quartz movement.</p>
      </div>

      <h2>Can a New Battery Be Installed Correctly and the Watch Still Not Work?</h2>
      <p>Yes. The battery can be correct and fully charged while another part of the electrical or mechanical system is preventing the watch from running. Its About Time Inc.'s existing quartz-related content notes that corroded contacts and a failing electronic module can interrupt power delivery even when the battery is not depleted.</p>

      <h2>Can an Old Battery Damage the Watch?</h2>
      <p>Yes. The site's Bulova repair guidance warns that batteries left in too long can leak and cause corrosion that spreads to surrounding components. That can turn a simple battery service into a more involved repair.</p>

      <p>If a watch has been sitting stopped for a long time, inspection is particularly important before assuming that a fresh battery is all it needs.</p>

      <h2>Could Water Damage Be the Reason?</h2>
      <p>Yes. Moisture can damage the movement and electrical components. If there is fogging or condensation under the crystal, stop wearing the watch and have it inspected. The <a href="/watch-pressure-test/">watch pressure-testing page</a> explains how compromised seals and gaskets can allow moisture into the case.</p>

      <h2>What Should You Do If the Watch Stops Again?</h2>
      <p>Have the watch diagnosed rather than simply installing another battery. Its About Time Inc.'s <a href="/workshop/">Johns Creek workshop</a> evaluates stopped watches and provides a free diagnosis and estimate so the actual cause can be identified.</p>

      <p>If repair is needed, you can also start through the <a href="/watch-repairs/">watch repair service</a> page. The right next step depends on whether the issue is the battery connection, corrosion, moisture, the movement, or another internal component.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Watch Diagnosis",
    relatedFaqSlugs: [
      "how-much-does-watch-battery-replacement-cost",
      "does-replacing-a-watch-battery-affect-water-resistance",
      "what-is-included-in-a-full-watch-service"
    ],
    internalLinks: [
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "Get a professional diagnosis when the battery is not the full explanation." },
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start a repair request for a quartz watch that still will not run." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Check whether moisture or compromised seals may be contributing to the problem." },
      { href: "/cartier-watch-battery-replacement/", label: "Cartier Battery Service", description: "See why professional battery service starts with diagnosis, not assumptions." }
    ],
    status: "published"
  },
  {
    slug: "why-is-my-automatic-watch-running-fast-or-slow",
    question: "Why Is My Automatic Watch Running Fast or Slow?",
    category: "mechanical-service",
    shortAnswer: "An automatic watch can run fast or slow because of magnetism, worn or degraded lubrication, mechanical wear, moisture or corrosion, or a movement that needs regulation or service. Its About Time Inc. recommends professional evaluation when the change is persistent or significant.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>If an automatic watch suddenly starts gaining or losing noticeable time, the movement may need more than a simple adjustment.</strong> Its About Time Inc. identifies magnetism, internal wear, lubricant breakdown, and moisture-related damage as common reasons mechanical watches develop accuracy problems.</p>
        <p>The right fix can range from regulation or demagnetization to a complete movement service, depending on what the inspection finds.</p>
      </div>

      <h2>Common Reasons an Automatic Watch Runs Fast or Slow</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Magnetism</h3>
          <p>Its About Time Inc. specifically lists magnetism as a common reason a mechanical watch can begin running fast or slow. A magnetized movement may need professional demagnetization and regulation.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Lubricant Breakdown</h3>
          <p>Mechanical movements depend on proper lubrication. As lubricants age or deteriorate, friction and movement performance can change, affecting timekeeping.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Mechanical Wear</h3>
          <p>Worn internal components can affect how consistently the movement runs. The site's repair content lists internal wear as another reason a watch may gain or lose time.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Moisture or Corrosion</h3>
          <p>Its About Time Inc.'s moisture-damage guidance notes that internal corrosion can cause irregular timekeeping, including a watch running fast, slow, or stopping altogether.</p>
        </section>
      </div>

      <h2>Can Magnetism Make an Automatic Watch Run Fast?</h2>
      <p><strong>Yes.</strong> The site repeatedly identifies magnetism as a possible cause of fast or slow timekeeping in mechanical watches. Magnetism can affect movement components and change the way the watch keeps time.</p>

      <p>If the problem appeared suddenly and the watch has been near strong magnetic sources, professional evaluation can determine whether demagnetization is appropriate. The <a href="/workshop/">Its About Time Inc. workshop</a> handles diagnostics, regulation, and mechanical movement service in-house.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> A persistent accuracy change is more useful diagnostically than a single observation. If the watch has suddenly started gaining or losing much more time than usual, have it checked rather than repeatedly resetting it.</p>
      </div>

      <h2>Can a Watch Run Fast or Slow Because It Needs Service?</h2>
      <p>Yes. Its About Time Inc. notes that worn lubricants, internal wear, and broader movement fatigue can affect accuracy. A complete service may be appropriate when the problem is not solved by regulation alone or when the watch has other symptoms.</p>

      <p>The FAQ on <a href="/faqs/what-is-included-in-a-full-watch-service/">what is included in a full watch service</a> explains the inspection, disassembly, cleaning, lubrication, reassembly, regulation, and testing process in more detail.</p>

      <h2>Can Moisture Make an Automatic Watch Lose Accuracy?</h2>
      <p>Yes. The site's <a href="/humidity-watch-damage-signs/">moisture-damage guide</a> specifically lists irregular timekeeping as a possible sign that internal corrosion is affecting the movement. Fogging or condensation under the crystal is an especially strong reason to stop wearing the watch and have it inspected.</p>

      <h2>Does Running Fast or Slow Always Mean the Watch Needs a Full Overhaul?</h2>
      <p>No. Some watches may only need regulation or demagnetization, while others have wear, lubrication, corrosion, or movement issues that justify a broader service. The correct recommendation depends on diagnosis rather than the symptom alone.</p>

      <h2>What Should You Do If Your Automatic Watch Is Losing or Gaining Time?</h2>
      <p>Bring or send the watch in for evaluation. Its About Time Inc. states on its <a href="/watch-repairs/">watch repair page</a> that watches running slow or fast can be submitted for a free diagnosis and estimate.</p>

      <p>The workshop can determine whether the watch needs regulation, demagnetization, cleaning and lubrication, component repair, or a complete service.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request an Accuracy Diagnosis",
    relatedFaqSlugs: [
      "what-is-included-in-a-full-watch-service",
      "why-does-my-automatic-watch-stop-overnight",
      "how-much-does-watch-repair-cost"
    ],
    internalLinks: [
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Get a diagnosis when an automatic watch is consistently gaining or losing time." },
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "See how mechanical watches are diagnosed, regulated, serviced, and tested." },
      { href: "/humidity-watch-damage-signs/", label: "Signs of Moisture Damage", description: "Learn how moisture and corrosion can affect watch accuracy and movement health." },
      { href: "/how-to-find-a-rolex-watch-service-center-near-you/", label: "Mechanical Watch Service Issues", description: "See examples of magnetism, worn lubricants, shortened power reserve, and service needs." }
    ],
    status: "published"
  },
  {
    slug: "why-does-my-automatic-watch-stop-overnight",
    question: "Why Does My Automatic Watch Stop Overnight?",
    category: "mechanical-service",
    shortAnswer: "An automatic watch may stop overnight because it was not fully wound, its normal power reserve has been used up, it has not received enough wrist movement, or the movement is no longer holding its expected reserve. A shortened power reserve can also be a sign that the watch needs service.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>An automatic watch only keeps running while it has stored energy in its mainspring.</strong> If it was not fully wound or did not receive enough wrist movement during the day, it may simply run out of power overnight.</p>
        <p>If the watch used to last much longer and now stops unusually quickly, Its About Time Inc. notes that a shortened power reserve can point to a movement that needs service or overhaul.</p>
      </div>

      <h2>How Long Should an Automatic Watch Run When You Take It Off?</h2>
      <p>There is no single answer because power reserve varies by movement. Its About Time Inc.'s existing watch content gives several examples: some automatic movements run for roughly 38 to 42 hours, while others provide 55, 72, or even 80 hours of reserve.</p>

      <div class="post-table-wrapper">
        <table class="post-table">
          <thead>
            <tr><th>Example Movement or Watch</th><th>Published Power Reserve</th><th>What It Means</th></tr>
          </thead>
          <tbody>
            <tr><td>ETA 2671 automatic</td><td>About 38 hours</td><td>A watch can reasonably stop after roughly a day and a half off the wrist.</td></tr>
            <tr><td>Seiko 4R36</td><td>About 41 hours</td><td>Shorter reserves may require more frequent winding or resetting when watches are rotated.</td></tr>
            <tr><td>Omega Calibre 8800</td><td>About 55 hours</td><td>More than two days of stored running time when fully wound.</td></tr>
            <tr><td>Hamilton H-10</td><td>About 80 hours</td><td>Long enough for many watches to sit through a weekend and remain running.</td></tr>
          </tbody>
        </table>
      </div>

      <p>The site's <a href="/best-field-watches-everyday-wear/">field-watch guide</a> specifically explains that automatic watches depend on regular wear or a watch winder and that shorter-reserve movements need more frequent resetting if you rotate between watches.</p>

      <h2>Why Would an Automatic Watch Stop After Only One Night?</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>It Was Not Fully Wound</h3>
          <p>If the mainspring did not begin the night with enough stored energy, the watch may exhaust its reserve before morning.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Not Enough Wrist Movement</h3>
          <p>Automatic watches wind through wrist motion. A low-activity day may not add enough energy to reach the movement's full reserve.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>The Movement Has a Shorter Normal Reserve</h3>
          <p>Some automatic movements are designed around roughly 38 to 42 hours rather than the longer 70- to 80-hour reserves found in certain newer calibers.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>The Power Reserve Has Shortened</h3>
          <p>If the watch once ran much longer and now dies quickly, the site's service guidance says shortened power reserve can indicate that maintenance or overhaul is due.</p>
        </section>
      </div>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> Compare the watch's current overnight performance with its known movement specification and with how it behaved previously. A 40-hour movement stopping after a long period off the wrist may be normal; a watch that suddenly drops from two days of reserve to only a few hours deserves inspection.</p>
      </div>

      <h2>Does an Automatic Watch Need to Be Worn Every Day?</h2>
      <p>Not necessarily. The site explains that automatic watches are best suited to regular wear or use with a watch winder. If you rotate among several watches, a shorter-reserve automatic may stop between wears and need to be wound and reset.</p>

      <p>The <a href="/best-38mm-watches/">38mm watch guide</a> shows how widely power reserves can vary across mechanical watches, from roughly 38 hours to 80 hours in the examples published there.</p>

      <h2>When Is Overnight Stopping a Sign of a Service Problem?</h2>
      <p>The concern is stronger when the watch is fully wound but still stops much sooner than its expected reserve, or when its running time has become noticeably shorter than it used to be. Its About Time Inc.'s Rolex service guidance states that shortened power reserve can be a sign that a full service or overhaul is due.</p>

      <p>Other symptoms such as inaccurate timekeeping, unusual winding resistance, moisture, or inconsistent operation make professional evaluation even more appropriate.</p>

      <h2>Can a Watchmaker Test Power Reserve?</h2>
      <p>Yes. A watchmaker can evaluate how the movement is winding and running and whether service is needed. The <a href="/workshop/">Johns Creek workshop</a> handles mechanical watch diagnosis and service in-house.</p>

      <h2>What Should You Do If Your Automatic Watch Keeps Stopping?</h2>
      <p>First, make sure the watch is adequately wound and compare its actual running time with the expected reserve for that movement. If it still stops too quickly, submit it for evaluation through the <a href="/watch-repairs/">watch repair service</a>.</p>

      <p>The goal is to determine whether the behavior is normal for that movement or whether the mainspring, lubrication, winding system, or broader movement condition needs attention.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Power Reserve Diagnosis",
    relatedFaqSlugs: [
      "why-is-my-automatic-watch-running-fast-or-slow",
      "what-is-included-in-a-full-watch-service",
      "how-much-does-watch-repair-cost"
    ],
    internalLinks: [
      { href: "/best-field-watches-everyday-wear/", label: "Automatic Watch Power Reserve Guide", description: "See why regular wear and movement-specific power reserve affect how long an automatic watch runs." },
      { href: "/best-38mm-watches/", label: "Mechanical Power Reserve Examples", description: "Compare published reserve figures across several automatic and hand-wound movements." },
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "Have a shortened or inconsistent power reserve professionally evaluated." },
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start a repair request when an automatic watch stops sooner than expected." }
    ],
    status: "published"
  },
  {
    slug: "can-a-scratched-sapphire-watch-crystal-be-repaired",
    question: "Can a Scratched Sapphire Watch Crystal Be Repaired?",
    category: "watch-repair",
    shortAnswer: "A true scratch in a sapphire watch crystal is difficult to remove because sapphire is extremely hard. Its About Time Inc. notes that acrylic scratches can often be polished, but scratched sapphire usually requires professional evaluation and, in many cases, crystal replacement.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>A scratched sapphire crystal usually cannot be treated the same way as acrylic.</strong> Its About Time Inc.'s dedicated guidance on scratched Rolex glass states that sapphire scratches are much more difficult to repair because of the material's hardness and that replacement is often the practical solution.</p>
        <p>The crystal should still be inspected first so the watchmaker can determine whether replacement is actually necessary and what part is appropriate for the watch.</p>
      </div>

      <h2>Why Is Sapphire Crystal Hard to Repair?</h2>
      <p>Sapphire is used on many luxury and modern watches because of its high scratch resistance. That same hardness makes true scratches difficult to polish out safely once they occur.</p>

      <p>Its About Time Inc.'s <a href="/can-rolex-glass-be-scratched/">Rolex crystal guide</a> distinguishes sapphire from acrylic: acrylic scratches can often be polished, while sapphire damage more commonly leads to replacement.</p>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Confirm the Crystal Type</h3>
          <p>Acrylic, mineral glass, and sapphire do not respond to damage the same way, so the material matters before any repair decision is made.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Check the Depth of Damage</h3>
          <p>Deep scratches, chips, or cracks are more likely to justify replacement than minor surface marks.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Inspect the Case & Seal</h3>
          <p>Crystal damage can affect more than appearance. Cracks or impact damage can compromise the watch's protection from dirt and moisture.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Match the Correct Replacement</h3>
          <p>Luxury watches may require brand-specific or factory-grade crystal parts to preserve fit, appearance, and function.</p>
        </section>
      </div>

      <h2>Can a Sapphire Crystal Be Polished?</h2>
      <p>Its About Time Inc.'s site contains older content suggesting that some minor sapphire or mineral scratches may sometimes be polished. However, its dedicated sapphire guidance is more conservative and states that true sapphire scratches are difficult to repair and usually point toward replacement.</p>

      <p>For that reason, professional inspection is the safest starting point rather than assuming the scratch can simply be buffed out.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> Do not use acrylic polishing methods on a sapphire crystal. The crystal type should be confirmed before anyone attempts polishing or replacement.</p>
      </div>

      <h2>When Should a Scratched Crystal Be Replaced?</h2>
      <p>Replacement becomes more likely when the scratch is deep, the crystal is chipped or cracked, visibility is affected, or the damage could compromise the watch's protection from dirt and moisture. Its About Time Inc.'s <a href="/common-watch-problems-and-how-we-fix-them/">common watch problems guide</a> specifically warns that damaged crystals can allow dirt and moisture into the case.</p>

      <h2>Does Crystal Replacement Affect Water Resistance?</h2>
      <p>Crystal replacement can involve the sealing system of the case, so the watch should be checked and tested as appropriate after the work is completed. The <a href="/watch-pressure-test/">watch pressure testing</a> page explains why water resistance should be verified after case components or seals are disturbed.</p>

      <h2>Can Its About Time Inc. Replace Sapphire Crystals?</h2>
      <p>Yes. The current workshop page lists crystal replacement as an in-house service for modern, vintage, and luxury watches. Its About Time Inc. also publishes crystal replacement guidance for multiple brands and states that sapphire, mineral, and acrylic crystal replacement is available.</p>

      <p>If your watch has a scratched, chipped, or cracked crystal, start with the <a href="/watch-repairs/">watch repair service</a> so the crystal type, damage, parts availability, and sealing requirements can be evaluated.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Crystal Repair Estimate",
    relatedFaqSlugs: [
      "can-a-broken-watch-crown-be-repaired-or-replaced",
      "does-replacing-a-watch-battery-affect-water-resistance",
      "how-much-does-watch-repair-cost"
    ],
    internalLinks: [
      { href: "/can-rolex-glass-be-scratched/", label: "Can Rolex Glass Be Scratched?", description: "See the site's specific guidance on acrylic and sapphire crystal damage." },
      { href: "/common-watch-problems-and-how-we-fix-them/", label: "Common Watch Problems", description: "Learn why cracked or scratched crystals should be addressed before dirt or moisture gets inside." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Understand why sealing and water resistance should be checked after crystal work." },
      { href: "/watch-repairs/", label: "Watch Repair Services", description: "Start a professional evaluation for crystal replacement or related damage." }
    ],
    status: "published"
  },
  {
    slug: "can-a-broken-watch-crown-be-repaired-or-replaced",
    question: "Can a Broken Watch Crown Be Repaired or Replaced?",
    category: "watch-repair",
    shortAnswer: "Yes. A broken or worn watch crown can often be repaired or replaced. Its About Time Inc. notes that crown service may involve checking the stem connection, replacing worn gaskets, correcting alignment, or replacing the crown and stem when needed.",
    bodyHtml: `
      <div class="faq-answer-card">
        <p class="faq-answer-card__label">Quick Answer</p>
        <p><strong>A damaged watch crown does not automatically mean the watch is beyond repair.</strong> Depending on the problem, a watchmaker may be able to correct the crown or stem, replace worn gaskets, realign the assembly, or replace the crown and stem completely.</p>
        <p>Its About Time Inc. evaluates the crown, stem, case, movement connection, and sealing needs before recommending the repair path.</p>
      </div>

      <h2>What Can Go Wrong With a Watch Crown?</h2>

      <div class="faq-factor-grid">
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">01</span>
          <h3>Worn or Damaged Crown</h3>
          <p>The crown itself can become worn, bent, stripped, damaged, or difficult to grip and operate.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">02</span>
          <h3>Stem Problems</h3>
          <p>The stem connects the crown to the movement. If it bends, breaks, or becomes disconnected, winding and time-setting can stop working correctly.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">03</span>
          <h3>Alignment Issues</h3>
          <p>A crown that does not sit or engage correctly may need adjustment before deciding whether replacement is necessary.</p>
        </section>
        <section class="faq-factor-card">
          <span class="faq-factor-card__number">04</span>
          <h3>Gasket or Seal Wear</h3>
          <p>The crown is part of the case sealing system on many watches, so worn crown gaskets can affect water resistance.</p>
        </section>
      </div>

      <h2>How Is a Broken Crown Repaired?</h2>
      <p>Its About Time Inc.'s <a href="/understanding-dial-crown-and-crystal-repairs/">dial, crown, and crystal repair guide</a> explains that crown service typically starts by checking the stem connection, gasket condition, and alignment. The watchmaker then determines whether adjustment is enough or whether the crown, stem, or related parts need replacement.</p>

      <div class="pro-tip">
        <p><strong>Pro Tip:</strong> If the crown feels loose, will not engage, will not screw down, or suddenly becomes difficult to turn, avoid forcing it. Forcing the crown can turn a manageable crown or stem issue into additional movement damage.</p>
      </div>

      <h2>When Does a Crown Need to Be Replaced?</h2>
      <p>Replacement is more likely when the crown is physically damaged, worn beyond reliable use, no longer sealing correctly, or cannot be restored through adjustment. Its About Time Inc. also lists crown and stem replacement among common watch repairs on its <a href="/watch-repair-services/">watch repair services page</a>.</p>

      <h2>Can the Stem Be Repaired or Replaced Too?</h2>
      <p>Yes. The crown and stem work together, so a crown problem can actually be a stem problem or involve both components. Its About Time Inc.'s workshop lists crown and stem-related work among its repair capabilities, including vintage restoration where appropriate.</p>

      <h2>Can a Broken Crown Affect Water Resistance?</h2>
      <p>Yes. On watches designed to resist water, the crown and crown gasket are part of the sealing system. A damaged crown, worn gasket, or poor fit can allow moisture into the case.</p>

      <p>After crown work, water resistance should be checked when appropriate for the model. The <a href="/watch-pressure-test/">watch pressure testing guide</a> explains how crown seals, case-back gaskets, and other sealing points are evaluated.</p>

      <h2>Can a Vintage Watch Crown Be Repaired Without Losing Originality?</h2>
      <p>Sometimes. Its About Time Inc. states that vintage crown and stem work should be approached carefully and that the repair path depends on condition and parts availability. When an original component can remain safely in service, preservation may be preferable; when it can no longer function reliably, replacement may be necessary.</p>

      <h2>What Should You Do If Your Crown Breaks?</h2>
      <p>Stop forcing or repeatedly turning the crown and have the watch inspected. Its About Time Inc.'s <a href="/workshop/">Johns Creek workshop</a> handles crown and stem diagnosis, crystal care, movement service, and water-resistance work in-house.</p>

      <p>You can also begin through the <a href="/watch-repairs/">watch repair service</a> to receive a diagnosis and estimate before repair work begins.</p>
    `,
    relatedServiceHref: "/watch-repairs/",
    relatedServiceLabel: "Request a Crown Repair Estimate",
    relatedFaqSlugs: [
      "can-a-scratched-sapphire-watch-crystal-be-repaired",
      "what-is-included-in-a-full-watch-service",
      "how-much-does-watch-repair-cost"
    ],
    internalLinks: [
      { href: "/understanding-dial-crown-and-crystal-repairs/", label: "Dial, Crown & Crystal Repairs", description: "See the site's detailed guidance on crown, stem, gasket, and crystal work." },
      { href: "/watch-repair-services/", label: "Watch Repair Services", description: "Review common repair types including crown and stem replacement." },
      { href: "/watch-pressure-test/", label: "Watch Pressure Testing", description: "Learn how crown seals and other sealing points affect water resistance." },
      { href: "/workshop/", label: "Our Watchmaking Workshop", description: "See the in-house repair capabilities for crown, stem, crystal, and movement work." }
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
