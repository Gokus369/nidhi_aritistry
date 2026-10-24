import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Shared Lenis instance, set by App so anchor links can use smooth scrolling.
let lenis = null;
export const setLenis = (l) => { lenis = l; };

export function scrollToTarget(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}

// Scroll to service panel `i`.
export function scrollToService(i) {
  scrollToTarget(`#svc-${i}`);
}

// Masked line reveal for headings built from .line-mask > span.
export function revealLines(heading) {
  gsap.from(heading.querySelectorAll(".line-mask > span"), {
    yPercent: 110, duration: 1.2, ease: "expo.out", stagger: 0.1,
    scrollTrigger: { trigger: heading, start: "top 85%" },
  });
}

// onClick handler for in-page "#id" links.
export function anchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || href.length < 2 || !href.startsWith("#")) return;
  e.preventDefault();
  scrollToTarget(href);
}
