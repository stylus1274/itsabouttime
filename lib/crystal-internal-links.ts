// Contextual links to the dedicated service page, without changing page layouts.
export function addCrystalServiceLinks(key: string, html: string): string {
  if (key === "watch-repair-atlanta") {
    return html.replace('href="/understanding-dial-crown-and-crystal-repairs/"', 'href="/watch-crystal-replacement/"');
  }
  if (key === "watch-services") {
    return html.replace('gasket care, crystal service, strap fitting', 'gasket care, <a href="/watch-crystal-replacement/" style="color:inherit;text-decoration:underline;text-underline-offset:3px">watch crystal replacement</a>, strap fitting');
  }
  if (key === "watch-repair-services") {
    return html.replace('Common repairs include battery replacement, crystal replacement, strap replacement', 'Common repairs include battery replacement, <a href="/watch-crystal-replacement/">watch crystal replacement</a>, strap replacement');
  }
  const paragraphs: Record<string, string> = {
    "vintage-watch-crystal-replacement-value": '<p>Considering a replacement for a vintage timepiece? Explore our <a href="/watch-crystal-replacement/">watch crystal replacement service in Johns Creek</a> to learn about material choices, fitting, and the need to assess originality before work begins.</p>',
    "understanding-dial-crown-and-crystal-repairs": '<p>If your watch glass is cracked, scratched, or damaged, our <a href="/watch-crystal-replacement/">sapphire, mineral, and acrylic watch crystal replacement service</a> explains the assessment process, parts availability, and water-resistance considerations.</p>',
  };
  return paragraphs[key] ? html.replace('</article>', `${paragraphs[key]}</article>`) : html;
}
