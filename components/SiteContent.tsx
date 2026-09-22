"use client";

import { useEffect, useRef } from "react";

export type ArticleCta = {
  type: "repair" | "battery" | "specialist";
  placement: number;
  eyebrow: string;
  headline: string;
  description: string;
  buttonLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
  benefits?: string[];
};

type Props = { title: string; html: string; cta?: ArticleCta };

function addBubble(container: HTMLElement, text: string, who: "bot" | "user") {
  const bubble = document.createElement("div");
  const isBot = who === "bot";
  bubble.textContent = text;
  bubble.style.cssText = [
    `align-self:${isBot ? "flex-start" : "flex-end"}`,
    "max-width:85%",
    "border-radius:14px",
    "padding:12px 15px",
    "font-size:14px",
    "line-height:1.55",
    isBot
      ? "background:#FFFFFF;border:1px solid #E9E5DE;border-top-left-radius:4px;color:#4A453F"
      : "background:#1A1A1A;border-top-right-radius:4px;color:#F7F5F1",
  ].join(";");
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function insertMidArticleCta(root: HTMLElement, cta?: ArticleCta) {
  if (!cta || root.querySelector("[data-mid-article-cta]")) return;
  const article = root.querySelector<HTMLElement>("article");
  if (!article) return;
  const headings = Array.from(article.querySelectorAll<HTMLElement>("h2"));
  if (!headings.length) return;
  const totalWords = article.innerText.trim().split(/\s+/).length;
  const targetWords = totalWords * cta.placement;
  let anchor = headings[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  headings.forEach((heading) => {
    const before = article.innerText.slice(0, article.innerText.indexOf(heading.innerText)).trim().split(/\s+/).length;
    const distance = Math.abs(before - targetWords);
    if (distance < bestDistance) { anchor = heading; bestDistance = distance; }
  });
  const benefits = cta.benefits?.length ? cta.benefits : ["Clear recommendation", "Up-front estimate", "Atlanta watch specialists"];
  const benefitMarkup = benefits.map((benefit) => `<span>✓ ${benefit}</span>`).join("");
  const section = document.createElement("section");
  section.setAttribute("data-mid-article-cta", "true");
  section.setAttribute("aria-label", "Watch repair estimate");
  section.style.cssText = "position:relative;overflow:hidden;margin:42px 0;padding:32px;border:1px solid #C79B3B;border-radius:18px;background:linear-gradient(125deg,#14222E 0%,#213947 58%,#18303B 100%);color:#fff;box-shadow:0 16px 34px rgba(20,34,46,.22);";
  section.innerHTML = `<div style="position:absolute;right:-56px;top:-72px;width:210px;height:210px;border:1px solid rgba(199,155,59,.42);border-radius:50%"></div><div style="position:absolute;right:-18px;top:-32px;width:132px;height:132px;border:1px solid rgba(199,155,59,.24);border-radius:50%"></div><div style="position:relative;max-width:720px"><p style="margin:0 0 10px;color:#E4C26D;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase">${cta.eyebrow}</p><h2 style="margin:0 0 12px;color:#fff;font-size:26px;line-height:1.18">${cta.headline}</h2><p style="margin:0 0 22px;color:#E6EDF0;font-size:17px;line-height:1.6">${cta.description}</p><div style="display:flex;flex-wrap:wrap;gap:10px 22px;margin:0 0 24px;color:#F5F7F8;font-family:Arial,sans-serif;font-size:13px;font-weight:600">${benefitMarkup}</div><div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px"><a href="${cta.primaryHref ?? "/watch-repairs/"}" style="display:inline-block;padding:14px 20px;border-radius:7px;background:#D9A441;color:#14222E;font-family:Arial,sans-serif;font-size:14px;font-weight:800;text-decoration:none">${cta.buttonLabel}</a><a href="${cta.secondaryHref ?? "tel:+17704429854"}" style="color:#fff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none">${cta.secondaryLabel}</a></div></div>`;
  anchor.before(section);
}

function replyFor(message: string) {
  const input = message.toLowerCase();
  if (/hour|open|close|when/.test(input)) return "We’re open Monday to Friday 10 to 6, Saturday 10 to 4, and closed Sunday. Walk-ins are always welcome.";
  if (/repair|fix|batter|servic|overhaul|crystal|seal/.test(input)) return "Most repairs are walk-in, no appointment needed. You can start one on our Watch Repairs page or call 770-442-9854.";
  if (/sell|valu|buy|worth|trade|price|offer/.test(input)) return "We’d be glad to value your watch, running or not. Bring it in or call 770-442-9854 and a certified watchmaker will help.";
  return "Thanks for your message. A specialist will be with you shortly. For the fastest answer, call 770-442-9854.";
}

export function SiteContent({ title, html, cta }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    insertMidArticleCta(root, cta);

    const instagramWidget = root.querySelector<HTMLElement>(".elfsight-app-336ffa00-a724-464f-83b5-d192ca5596cb");
    const elfsightPlatformSrc = "https://static.elfsight.com/platform/platform.js";
    if (instagramWidget && !document.querySelector(`script[src="${elfsightPlatformSrc}"]`)) {
      const script = document.createElement("script");
      script.src = elfsightPlatformSrc;
      script.async = true;
      script.dataset.elfsightPlatform = "true";
      document.head.appendChild(script);
    }

    const revealElements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (element: HTMLElement) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
      : null;
    revealElements.forEach((element) => {
      if (element.style.opacity === "0") observer?.observe(element);
      else reveal(element);
    });
    const revealVisible = () => revealElements.forEach((element) => {
      if (element.style.opacity === "0" && element.getBoundingClientRect().top < window.innerHeight * 0.92) reveal(element);
    });
    revealVisible();
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible, { passive: true });
    const revealTimeout = window.setTimeout(() => revealElements.forEach(reveal), 1200);

    const chatRoot = root.querySelector<HTMLElement>("[data-chat-root]");
    const cleanups: Array<() => void> = [];

    const mobileStyleSnapshots = new Map<HTMLElement, Map<string, { value: string; priority: string }>>();
    const setMobileStyle = (element: HTMLElement, property: string, value: string) => {
      if (!mobileStyleSnapshots.has(element)) mobileStyleSnapshots.set(element, new Map());
      const snapshot = mobileStyleSnapshots.get(element)!;
      if (!snapshot.has(property)) snapshot.set(property, { value: element.style.getPropertyValue(property), priority: element.style.getPropertyPriority(property) });
      element.style.setProperty(property, value, "important");
    };
    const restoreMobileStyles = () => mobileStyleSnapshots.forEach((properties, element) => {
      properties.forEach((snapshot, property) => {
        if (snapshot.value) element.style.setProperty(property, snapshot.value, snapshot.priority);
        else element.style.removeProperty(property);
      });
      mobileStyleSnapshots.delete(element);
    });
    const applyMobileLayout = () => {
      if (window.innerWidth > 700) {
        restoreMobileStyles();
        return;
      }
      root.querySelectorAll<HTMLElement>('section[style*="grid-template-columns"], main [style*="grid-template-columns"], footer [style*="grid-template-columns"]').forEach((element) => {
        setMobileStyle(element, "grid-template-columns", "minmax(0, 1fr)");
        setMobileStyle(element, "gap", "24px");
      });
      root.querySelectorAll<HTMLElement>('section [style*="flex-wrap:nowrap"], main [style*="flex-wrap:nowrap"]').forEach((element) => setMobileStyle(element, "flex-wrap", "wrap"));
      const hero = root.querySelector<HTMLElement>("#top");
      if (hero) {
        const isWorkshopHero = hero.hasAttribute("data-mobile-workshop-hero");
        const isRepairFormHero = hero.hasAttribute("data-mobile-repair-form-hero");
        setMobileStyle(hero, "display", "block");
        setMobileStyle(hero, "min-height", "auto");
        const heroCopy = hero.firstElementChild as HTMLElement | null;
        const heroImage = hero.lastElementChild as HTMLElement | null;
        if (heroCopy && !isWorkshopHero && !isRepairFormHero) {
          setMobileStyle(heroCopy, "padding", "44px 20px 28px");
          setMobileStyle(heroCopy, "align-items", "stretch");
        }
        if (isWorkshopHero && heroCopy) {
          setMobileStyle(hero, "padding", "36px 20px 64px");
          setMobileStyle(heroCopy, "display", "grid");
          setMobileStyle(heroCopy, "grid-template-columns", "minmax(0, 1fr)");
          setMobileStyle(heroCopy, "gap", "30px");
          setMobileStyle(heroCopy, "padding", "0");
        }
        if (isRepairFormHero) setMobileStyle(hero, "padding", "32px 20px 64px");
        if (heroImage && heroImage !== heroCopy) setMobileStyle(heroImage, "min-height", "320px");
        hero.querySelectorAll<HTMLElement>("h1").forEach((heading) => {
          const size = isRepairFormHero
            ? "clamp(34px, 10vw, 40px)"
            : isWorkshopHero
              ? "clamp(42px, 12vw, 50px)"
              : "clamp(44px, calc(15vw - 4px), 64px)";
          setMobileStyle(heading, "font-size", size);
        });
        hero.querySelectorAll<HTMLElement>("p").forEach((paragraph) => {
          setMobileStyle(paragraph, "font-size", "18px");
          setMobileStyle(paragraph, "line-height", "1.55");
        });
      }
    };
    const mobileTableWrappers = new Map<HTMLTableElement, HTMLDivElement>();
    const restoreMobileTables = () => mobileTableWrappers.forEach((wrapper, table) => {
      wrapper.parentNode?.insertBefore(table, wrapper);
      wrapper.remove();
      mobileTableWrappers.delete(table);
    });
    const applyMobileTables = () => {
      if (window.innerWidth > 700) {
        restoreMobileTables();
        return;
      }
      root.querySelectorAll<HTMLTableElement>("table").forEach((table) => {
        if (mobileTableWrappers.has(table)) return;
        const wrapper = document.createElement("div");
        wrapper.className = "mobile-table-scroll";
        wrapper.tabIndex = 0;
        wrapper.setAttribute("role", "region");
        wrapper.setAttribute("aria-label", "Scrollable data table");
        table.parentNode?.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        mobileTableWrappers.set(table, wrapper);
      });
    };
    applyMobileLayout();
    applyMobileTables();
    window.addEventListener("resize", applyMobileLayout, { passive: true });
    window.addEventListener("resize", applyMobileTables, { passive: true });
    cleanups.push(() => window.removeEventListener("resize", applyMobileLayout));
    cleanups.push(() => window.removeEventListener("resize", applyMobileTables));
    cleanups.push(restoreMobileStyles);
    cleanups.push(restoreMobileTables);

    root.querySelectorAll<HTMLElement>("[data-cert-carousel]").forEach((carousel) => {
      const showcase = carousel.closest<HTMLElement>("[data-certification-showcase]") ?? root;
      const cards = Array.from(carousel.querySelectorAll<HTMLElement>("[data-cert-card]"));
      const previous = showcase.querySelector<HTMLButtonElement>("[data-cert-carousel-prev]");
      const next = showcase.querySelector<HTMLButtonElement>("[data-cert-carousel-next]");
      const status = showcase.querySelector<HTMLElement>("[data-cert-carousel-status]");
      if (!cards.length) return;

      const scrollToCard = (index: number) => {
        const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
        carousel.scrollTo({ left: target.offsetLeft - carousel.offsetLeft, behavior: "smooth" });
        target.focus({ preventScroll: true });
      };
      const activeIndex = () => cards.reduce((best, card, index) => {
        const bestDistance = Math.abs(cards[best].offsetLeft - carousel.offsetLeft - carousel.scrollLeft);
        const cardDistance = Math.abs(card.offsetLeft - carousel.offsetLeft - carousel.scrollLeft);
        return cardDistance < bestDistance ? index : best;
      }, 0);
      const refresh = () => {
        const active = activeIndex();
        cards.forEach((card, index) => {
          if (index === active) card.setAttribute("aria-current", "true");
          else card.removeAttribute("aria-current");
        });
        if (status) status.textContent = `Certificate ${active + 1} of ${cards.length}`;
        if (previous) previous.disabled = carousel.scrollLeft <= 4;
        if (next) next.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;
      };
      const onPrevious = () => scrollToCard(activeIndex() - 1);
      const onNext = () => scrollToCard(activeIndex() + 1);
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); onPrevious(); }
        if (event.key === "ArrowRight") { event.preventDefault(); onNext(); }
      };
      const onScroll = () => window.requestAnimationFrame(refresh);
      previous?.addEventListener("click", onPrevious);
      next?.addEventListener("click", onNext);
      carousel.addEventListener("keydown", onKeyDown);
      carousel.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", refresh, { passive: true });
      refresh();
      cleanups.push(() => previous?.removeEventListener("click", onPrevious));
      cleanups.push(() => next?.removeEventListener("click", onNext));
      cleanups.push(() => carousel.removeEventListener("keydown", onKeyDown));
      cleanups.push(() => carousel.removeEventListener("scroll", onScroll));
      cleanups.push(() => window.removeEventListener("resize", refresh));
    });

    const header = root.querySelector<HTMLElement>("[data-hd]");
    const updateHeaderScrollState = () => header?.setAttribute("data-scrolled", String(window.scrollY > 8));
    updateHeaderScrollState();
    window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", updateHeaderScrollState));

    const desktopNav = header?.querySelector<HTMLElement>(":scope > div > nav");
    const headerActions = header?.querySelector<HTMLElement>(":scope > div > div:last-child");
    if (header && desktopNav && headerActions && !header.querySelector(".mobile-nav-toggle")) {
      const mobileNav = document.createElement("nav");
      mobileNav.className = "mobile-site-nav";
      mobileNav.id = "site-mobile-nav";
      mobileNav.setAttribute("aria-label", "Mobile navigation");
      mobileNav.setAttribute("data-open", "false");
      mobileNav.innerHTML = desktopNav.innerHTML;
      mobileNav.querySelectorAll<HTMLElement>(".site-nav-about").forEach((aboutMenu) => {
        const aboutToggle = aboutMenu.querySelector<HTMLButtonElement>(".site-nav-about-toggle");
        const aboutLinks = Array.from(aboutMenu.querySelectorAll<HTMLAnchorElement>(".site-nav-about-menu a"));
        const aboutUsLink = aboutLinks.find((link) => link.getAttribute("href") === "/atlanta-watch-service-center-workshop-duluth/");
        const workshopLink = aboutLinks.find((link) => link.getAttribute("href") === "/our-workshop/");
        if (!aboutToggle || !aboutUsLink || !workshopLink) return;
        const aboutUsMobileLink = aboutUsLink.cloneNode(true) as HTMLAnchorElement;
        const workshopMobileLink = workshopLink.cloneNode(true) as HTMLAnchorElement;
        aboutUsMobileLink.textContent = "About Us";
        workshopMobileLink.textContent = "Our Workshop";
        aboutMenu.replaceWith(aboutUsMobileLink, workshopMobileLink);
      });

      const aboutToggle = desktopNav.querySelector<HTMLButtonElement>(".site-nav-about-toggle");
      const aboutMenu = desktopNav.querySelector<HTMLElement>(".site-nav-about");
      const closeAboutMenu = () => aboutToggle?.setAttribute("aria-expanded", "false");
      const toggleAboutMenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        aboutToggle?.setAttribute("aria-expanded", String(aboutToggle.getAttribute("aria-expanded") !== "true"));
      };
      aboutToggle?.addEventListener("click", toggleAboutMenu);
      document.addEventListener("click", closeAboutMenu);
      window.addEventListener("resize", closeAboutMenu, { passive: true });
      cleanups.push(() => aboutToggle?.removeEventListener("click", toggleAboutMenu));
      cleanups.push(() => document.removeEventListener("click", closeAboutMenu));
      cleanups.push(() => window.removeEventListener("resize", closeAboutMenu));

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "mobile-nav-toggle";
      toggle.setAttribute("aria-controls", mobileNav.id);
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open site navigation");
      toggle.innerHTML = '<span aria-hidden="true"></span>';
      headerActions.classList.add("site-header-actions");
      headerActions.insertBefore(toggle, headerActions.firstChild);
      header.appendChild(mobileNav);

      const setMobileNavOpen = (open: boolean) => {
        mobileNav.setAttribute("data-open", String(open));
        mobileNav.style.setProperty("display", open ? "grid" : "none", "important");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close site navigation" : "Open site navigation");
      };
      const onToggle = () => setMobileNavOpen(toggle.getAttribute("aria-expanded") !== "true");
      const onMobileNavClick = () => setMobileNavOpen(false);
      const onResize = () => { if (window.innerWidth > 1180) setMobileNavOpen(false); };
      toggle.addEventListener("click", onToggle);
      mobileNav.addEventListener("click", onMobileNavClick);
      window.addEventListener("resize", onResize, { passive: true });
      cleanups.push(() => toggle.removeEventListener("click", onToggle));
      cleanups.push(() => mobileNav.removeEventListener("click", onMobileNavClick));
      cleanups.push(() => window.removeEventListener("resize", onResize));
    }

    if (chatRoot) {
      const panel = chatRoot.querySelector<HTMLElement>("[data-chat-panel]");
      const toggle = chatRoot.querySelector<HTMLButtonElement>("[data-chat-toggle]");
      const close = chatRoot.querySelector<HTMLButtonElement>("[data-chat-close]");
      const body = chatRoot.querySelector<HTMLElement>("[data-chat-body]");
      const form = chatRoot.querySelector<HTMLFormElement>("[data-chat-form]");
      const input = chatRoot.querySelector<HTMLInputElement>("[data-chat-input]");
      const iconOpen = chatRoot.querySelector<HTMLElement>("[data-chat-icon-open]");
      const iconClose = chatRoot.querySelector<HTMLElement>("[data-chat-icon-close]");
      const dot = chatRoot.querySelector<HTMLElement>("[data-chat-dot]");
      const ring = chatRoot.querySelector<HTMLElement>("[data-chat-ring]");
      let isOpen = false;
      const setOpen = (value: boolean) => {
        isOpen = value;
        if (panel) {
          panel.style.opacity = value ? "1" : "0";
          panel.style.transform = value ? "translateY(0) scale(1)" : "translateY(12px) scale(.98)";
          panel.style.pointerEvents = value ? "auto" : "none";
        }
        if (iconOpen) iconOpen.style.display = value ? "none" : "block";
        if (iconClose) iconClose.style.display = value ? "block" : "none";
        if (dot) dot.style.display = value ? "none" : "block";
        if (ring) ring.style.display = value ? "none" : "block";
        if (value) window.setTimeout(() => input?.focus(), 60);
      };
      const send = (text: string) => {
        const message = text.trim();
        if (!message || !body) return;
        addBubble(body, message, "user");
        window.setTimeout(() => addBubble(body, replyFor(message), "bot"), 700);
      };
      const onToggle = () => setOpen(!isOpen);
      const onClose = () => setOpen(false);
      const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        send(input?.value ?? "");
        if (input) input.value = "";
      };
      toggle?.addEventListener("click", onToggle);
      close?.addEventListener("click", onClose);
      form?.addEventListener("submit", onSubmit);
      chatRoot.querySelectorAll<HTMLElement>("[data-chat-q]").forEach((question) => {
        const onQuestion = () => {
          if (!isOpen) setOpen(true);
          send(question.getAttribute("data-chat-q") ?? "");
        };
        question.addEventListener("click", onQuestion);
        cleanups.push(() => question.removeEventListener("click", onQuestion));
      });
      cleanups.push(() => toggle?.removeEventListener("click", onToggle));
      cleanups.push(() => close?.removeEventListener("click", onClose));
      cleanups.push(() => form?.removeEventListener("submit", onSubmit));
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
      window.clearTimeout(revealTimeout);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [html, title, cta]);

  return <div data-site-content ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
