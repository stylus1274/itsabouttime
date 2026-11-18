const serviceBody = `
<p>Need help with a Casio G-Shock that has stopped, developed a display problem, or suffered damage? It’s About Time in Johns Creek helps Atlanta-area owners discuss repair options for their particular watch. Start with the model and module numbers rather than assuming every G-Shock needs the same service.</p>
<p><a href="/repair-form/">Request a G-Shock repair assessment</a>, or start with our <a href="/g-shock-watch-repair-common-problems-fixes/">G-Shock common problems and troubleshooting guide</a> if you are unsure whether the issue is a setting or a fault.</p>
<h2 id="gshock-repair-options">Common G-Shock Repair Concerns</h2>
<h3>A stopped watch or dim digital display</h3>
<p>On a conventional battery-powered model, low battery power is one possible cause of a dim or blank display. It is not the only explanation. Note whether the watch still sounds alarms, whether the hands move, and when the problem started. A technician can assess the power supply and condition before recommending work. See our <a href="/watch-battery-replacement-atlanta/">professional watch battery replacement guidance</a> for questions to ask about the service and sealing checks.</p>
<h3>Tough Solar charging and power-saving behavior</h3>
<p>A solar-powered G-Shock uses a rechargeable power source, so it should not be treated as a routine disposable-battery swap. Some models also blank the display to save power. Follow the charging and wake-up instructions for your exact module in <a href="https://www.casio.com/us/support/watches/">Casio’s watch support manuals</a>. Avoid excessive heat while charging. If the watch still will not recover, ask about assessment of the charging system and rechargeable cell.</p>
<h3>Sticking buttons, damaged straps, or a worn bezel</h3>
<p>Do not force a stiff button or keep wearing a watch with an insecure strap. The correct strap, bezel, button assembly, or attachment hardware depends on the reference and parts availability. Our <a href="/watch-band-repair/">watch band and clasp repair information</a> explains common attachment concerns. Send clear photographs and the model number so the team can discuss compatibility and whether inspection is needed.</p>
<h3>Condensation or damage to the crystal and case</h3>
<p>Keep a watch with suspected water entry out of water and arrange prompt inspection. A depth rating on the case is not proof of its present sealing condition. Ask what seal inspection and water-resistance testing are appropriate after the proposed work. Learn more about <a href="/water-damage-and-watches-key-insights/">watch water damage</a> and <a href="/watch-crystal-replacement/">crystal replacement considerations</a>.</p>
<h3>Wrong time, hand alignment, or connection problems</h3>
<p>Check the home-city, daylight-saving, and synchronization settings in the matching Casio manual before assuming the movement is damaged. On applicable models, hand alignment and phone connection settings have their own procedures. Our <a href="/g-shock-watch-repair-common-problems-fixes/">G-Shock troubleshooting article</a> helps distinguish symptoms worth checking from those that need professional attention. Persistent faults, impact damage, and unresponsive controls warrant assessment.</p>
<div class="iat-pro-tip"><p class="iat-pro-tip-label">Have your model details ready</p><p>Look for the model and module numbers on the case back without opening the watch. Include them when you <a href="/repair-form/">start your repair enquiry</a>, along with photographs, symptoms, and any previous repair history.</p></div>
<h2 id="gshock-service-process">What to Expect From a G-Shock Assessment</h2>
<ol><li><strong>Describe the issue.</strong> Tell us when it began, whether the watch has suffered an impact or water exposure, and which functions still work.</li><li><strong>Confirm the service route.</strong> Model acceptance, parts availability, and the nature of an electronic fault determine whether local work or a specialist referral is appropriate.</li><li><strong>Review the estimate.</strong> Ask for the proposed work, parts, applicable testing, expected timing, and approval process before proceeding.</li><li><strong>Discuss the final checks.</strong> Confirm which functions and seals will be checked and request the applicable repair warranty terms in writing.</li></ol>
<p>Learn about <a href="/our-workshop/">our watchmaking workshop</a> and our broader <a href="/watch-repair-atlanta/">watch repair services for Atlanta-area owners</a>. We do not promise that every electronic module, sensor, or discontinued component can be repaired.</p>
<h2 id="gshock-cost-timing">How Much Does G-Shock Repair Cost, and How Long Does It Take?</h2>
<p>A battery service, a replacement strap, and a damaged electronic module are different jobs. Cost and turnaround depend on the reference, condition, parts, and testing required. Inspection may be needed before a firm estimate is possible. If the repair is substantial, compare the quote with a suitable replacement while considering any sentimental value.</p>
<p>Confirm any assessment charge, parts order, shipping costs, and repair warranty before authorizing work. If you plan to mail the watch, contact us first to confirm acceptance and shipping instructions; do not send it without those arrangements.</p>
<h2 id="gshock-warranty">What If My G-Shock Is Still Under Warranty?</h2>
<p>Check your purchase documents and <a href="https://www.casio.com/us/support/watches/">Casio’s official repair and warranty support</a> before arranging third-party work. Retailer status and watchmaking qualifications are not the same as manufacturer warranty-service authorization. Ask which route applies to your watch rather than assuming warranty work is performed in-house.</p>
<h2 id="gshock-local-service">G-Shock Repair Enquiries in Johns Creek</h2>
<p>Visit It’s About Time at 11300 Medlock Bridge Rd #300, Johns Creek, GA 30097. Bring the watch, its model details, and any relevant service records. For a particular model or fault, <a href="/contact/">contact the showroom</a> before making the trip.</p>
<p><a href="/repair-form/">Start your G-Shock repair enquiry</a> or call <a href="tel:+17704429854">770-442-9854</a> to discuss the next step. The guidance above helps you prepare; it does not replace inspection of your watch.</p>
`;

export function refreshGshockRepair(html: string): string {
  // Preserve the existing template, imagery, and brand-history sections.
  const history = html.match(/<h2 id="the-japanese-legacy-of-g-shock">[\s\S]*?(?=<h2 id="how-to-care-for-your-precious-g-shock-watch">)/)?.[0] ?? '';
  return html
    .replace('G Shock Watch Repair: Preserve Durability and Performance', 'G-Shock Watch Repair in Johns Creek, Serving Atlanta')
    .replace(/(<h1[^>]*>[\s\S]*?<\/h1><p[^>]*>)[\s\S]*?(<\/p>)/, '$1Battery, display, button, and strap concerns—plus a clear next step for your Casio G-Shock.$2')
    .replace('2024-05-14  ·  8 min read', 'Published May 14, 2024 · Updated November 18, 2026')
    .replace(/(<article\b[^>]*><style>[\s\S]*?<\/style>)[\s\S]*?<\/article>/, (_, opening) => `${opening}${serviceBody}${history}</article>`)
    .replace('href="/dial-refinishing-vs-dial-replacement/"', 'href="/g-shock-watch-repair-common-problems-fixes/"')
    .replace('Dial Refinishing vs. Replacement', 'G-Shock Problems and Troubleshooting')
    .replace('href="/what-happens-inside-watch-dial-comes-off/"', 'href="/watch-battery-replacement-atlanta/"')
    .replace('What Happens When a Dial Comes Off', 'Watch Battery Replacement')
    .replace('Our certified workshop can evaluate your dial, movement, fit, or restoration needs with care and clarity.', 'Tell us your G-Shock model and symptoms so we can discuss the appropriate assessment and service route.');
}

export function connectGshockTroubleshooting(html: string): string {
  return html
    .replace('<a href="/watch-repair-atlanta/">G-Shock watch repair</a>', '<a href="/g-shock-watch-repair/">G-Shock watch repair</a>')
    .replace(/<p><strong>Professional Repair Approach:<\/strong> Expert technicians begin[\s\S]*?<\/p>/, '<p><strong>Professional Repair Approach:</strong> Identify the module and power system before recommending a battery replacement. On supported models, a blank display can reflect power-saving behavior or low solar charge. Persistent problems may need electrical diagnosis, a replacement module, or manufacturer service. Circuit-level repair is not available for every model and should not be assumed.</p>')
    .replace(/<p><strong>Professional Repair Approach:<\/strong> Skilled technicians use specialized demagnetizing[\s\S]*?<\/p>/, '<p><strong>Professional Repair Approach:</strong> First check the model-specific time-zone, daylight-saving, synchronization, and hand-alignment procedures. If the problem persists, a technician can assess the power supply and module. Mechanical-watch servicing methods are not a universal treatment for digital or analog-digital G-Shock faults.</p>')
    .replace('</article>', '<div class="iat-pro-tip"><p class="iat-pro-tip-label">Troubleshooting did not resolve it?</p><p>See our <a href="/g-shock-watch-repair/">G-Shock repair assessment and service guide for Johns Creek</a> for model details to provide, cost considerations, and the next steps. You can also <a href="/repair-form/">start a repair enquiry</a> before bringing or sending your watch.</p></div></article>');
}
