"use client";

import { useEffect, useRef } from "react";

type Props = { title: string; html: string };

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

function replyFor(message: string) {
  const input = message.toLowerCase();
  if (/hour|open|close|when/.test(input)) return "We’re open Monday to Friday 10 to 6, Saturday 10 to 4, and closed Sunday. Walk-ins are always welcome.";
  if (/repair|fix|batter|servic|overhaul|crystal|seal/.test(input)) return "Most repairs are walk-in, no appointment needed. You can start one on our Watch Repairs page or call 770-442-9854.";
  if (/sell|valu|buy|worth|trade|price|offer/.test(input)) return "We’d be glad to value your watch, running or not. Bring it in or call 770-442-9854 and a certified watchmaker will help.";
  return "Thanks for your message. A specialist will be with you shortly. For the fastest answer, call 770-442-9854.";
}

export function SiteContent({ title, html }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = title;
    const root = rootRef.current;
    if (!root) return;

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
  }, [html, title]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
