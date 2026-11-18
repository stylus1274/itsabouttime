const repairGuidance = `
<h2 id="luminox-repair-options">Luminox Repair: Start With the Symptom</h2>
<p>A stopped watch, moisture under the crystal, and a loose crown need different assessments. Tell us the model or reference number, when the problem began, and whether the watch has been dropped, opened, or exposed to water. We can then discuss the appropriate next step rather than assume every problem needs a full service.</p>
<h3>A stopped quartz watch or irregular timekeeping</h3>
<p>Battery condition is one possible cause, but the movement and contacts may also need inspection. A battery change is not a diagnosis for every stopped watch. Our <a href="/watch-battery-replacement-atlanta/">watch battery replacement guidance</a> explains why professional replacement involves more than choosing a battery that fits. Confirm model acceptance and the checks included before arranging work.</p>
<h3>Fogging, water entry, or damaged seals</h3>
<p>Keep a watch with suspected water entry out of water and arrange an assessment promptly. Do not assume the original depth rating still describes its current condition. Ask whether the proposed work includes inspection of the crown, case seals, and appropriate water-resistance testing. Read our guide to <a href="/water-damage-and-watches-key-insights/">water damage in watches</a> for more context.</p>
<h3>A cracked crystal, worn strap, or loose crown</h3>
<p>Damage to the case or crystal can affect more than appearance, while a worn strap or attachment can put the watch at risk of falling. Parts compatibility depends on the exact reference. Explore <a href="/watch-crystal-replacement/">watch crystal replacement options</a> and <a href="/watch-band-repair/">watch band and clasp repairs</a>, then contact us to confirm what is possible for your Luminox.</p>
<h3>An automatic watch that stops or loses time</h3>
<p>Automatic models do not use a conventional watch battery. Describe how often you wear the watch and any change in its running time or accuracy. The movement needs an assessment before deciding whether adjustment, servicing, or replacement components are appropriate.</p>
<div class="iat-pro-tip"><p class="iat-pro-tip-label">Ready to discuss your watch?</p><p><a href="/repair-form/">Start a Luminox repair enquiry</a> with the reference number and symptoms, or <a href="/contact/">contact our Johns Creek team</a> before bringing or sending your watch.</p></div>
<h2 id="luminox-cost-and-timing">What Determines Repair Cost and Turnaround?</h2>
<p>A battery-related issue and a movement repair are different jobs. The estimate depends on the model, condition, required parts, and testing. Parts availability or a specialist service referral can also affect timing. Photographs and a description help with an initial conversation, but an inspection may be needed before the scope and price can be confirmed.</p>
<ul><li>Ask what the estimate includes: diagnosis, parts, labour, and any testing.</li><li>Confirm the expected timeframe and how additional work will be approved.</li><li>Request the applicable repair warranty and exclusions in writing.</li><li>If shipping is needed, confirm acceptance and packing, insurance, and return arrangements before dispatch.</li></ul>
<h2 id="luminox-warranty-and-light">Manufacturer Warranty and Luminox Illumination</h2>
<p>Being an authorized retailer is not the same as being an authorized warranty repair centre. If your watch may be covered by its manufacturer warranty, check <a href="https://luminox.com/pages/warranty-repair-service">Luminox’s official warranty and service instructions</a> before authorizing work. Contact us to discuss the service route for your model; this page does not promise manufacturer-warranty repairs in-house.</p>
<p>The light tubes are separate from the battery that powers a quartz movement. Replacing that battery will not renew fading illumination. Do not attempt to open or replace the tubes yourself; ask about the appropriate specialist service route. Luminox explains its illumination system in its <a href="https://luminox.com/pages/faq">official FAQ</a>.</p>
<h2 id="luminox-local-service">Arrange a Luminox Assessment in Johns Creek</h2>
<p>Visit It’s About Time at 11300 Medlock Bridge Rd #300, Johns Creek, GA 30097, serving Atlanta-area watch owners. Learn about <a href="/our-workshop/">our watchmaking workshop</a> and our broader <a href="/watch-repair-atlanta/">Atlanta-area watch repair services</a>.</p>
<p>Before your visit, note the model number, symptoms, previous repairs, and how you use the watch. Bring any relevant service records and warranty paperwork. <a href="/repair-form/">Start your repair enquiry</a> or call <a href="tel:+17704429854">770-442-9854</a> to discuss your Luminox and the next step.</p>
`;

export function refreshLuminoxRepair(html: string): string {
  return html
    .replace('Luminox Watch Repair: Ensuring Longevity & Performance', 'Luminox Watch Repair in Johns Creek, Serving Atlanta')
    .replace('Preserve your watch with our expert care and attention to detail', 'Repair guidance, battery concerns, water resistance, and a clear next step for your Luminox.')
    .replace('2024-05-15  ·  8 min read', 'Published May 15, 2024 · Updated November 18, 2026')
    .replace(/<p>If there are adjectives[\s\S]*?(?=<h2 id="luminox-the-favorite)/, '<p>Looking for help with a Luminox watch that has stopped, suffered damage, or needs attention? It’s About Time in Johns Creek helps Atlanta-area owners assess their watches and discuss suitable repair options. <a href="/repair-form/">Request a Luminox assessment</a> before arranging service.</p><p><a href="#luminox-repair-options">Explore repair symptoms</a> · <a href="#luminox-cost-and-timing">Cost and timing</a> · <a href="#luminox-warranty-and-light">Warranty and illumination</a></p>')
    .replace('25 years of guaranteed illumination', 'self-powered illumination designed to last for many years')
    .replace(/<h2 id="the-repair-your-luminox-deserves">[\s\S]*?<\/article>/, `${repairGuidance}</article>`)
    .replace(/(<h2 id="luminox-the-favorite-of-the-elite">[\s\S]*?)(<h2 id="luminox-repair-options">[\s\S]*?)(<\/article>)/, '$2$1$3')
    .replace('href="/dial-refinishing-vs-dial-replacement/"', 'href="/watch-battery-replacement-atlanta/"')
    .replace('Dial Refinishing vs. Replacement', 'Watch Battery Replacement')
    .replace('href="/what-happens-inside-watch-dial-comes-off/"', 'href="/water-damage-and-watches-key-insights/"')
    .replace('What Happens When a Dial Comes Off', 'Water Damage and Watches')
    .replace('Our certified workshop can evaluate your dial, movement, fit, or restoration needs with care and clarity.', 'Tell us about your Luminox model and its symptoms so we can discuss an assessment and suitable next steps.');
}

export function addLuminoxRepairLinks(key: string, html: string): string {
  const paragraphs: Record<string, string> = {
    'why-luminox-watches-are-so-popular': '<p>Already own one that needs attention? Our <a href="/luminox-watch-repair/">Luminox watch repair guide</a> covers common symptoms, battery concerns, and arranging an assessment in Johns Creek.</p>',
    'water-damage-and-watches-key-insights': '<p>For a Luminox with fogging or suspected seal damage, see our <a href="/luminox-watch-repair/#luminox-repair-options">Luminox repair and water-resistance guidance</a> before returning it to the water.</p>',
    '5-signs-its-time-to-replace-your-watch-battery': '<p>Own a Luminox? Read our <a href="/luminox-watch-repair/">Luminox battery and repair assessment guidance</a> to understand why a stopped watch may need more than a replacement battery.</p>',
  };
  return paragraphs[key] ? html.replace('</article>', `${paragraphs[key]}</article>`) : html;
}
