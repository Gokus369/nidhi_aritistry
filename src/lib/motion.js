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

// Scroll to service panel `i`. On desktop the panels live in a pinned horizontal
// track, so map the panel's x offset onto the pinned scroll range.
export function scrollToService(i) {
  const panel = document.getElementById(`svc-${i}`);
  if (!panel) return;
  const st = ScrollTrigger.getById("services-h");
  if (!st) return scrollToTarget(`#svc-${i}`);
  const track = panel.parentElement;
  const dist = track.scrollWidth - innerWidth;
  const x = Math.min(Math.max(panel.offsetLeft - track.offsetLeft - (innerWidth - panel.offsetWidth) / 2, 0), dist);
  const y = Math.ceil(st.start + (x / dist) * (st.end - st.start)) + 4; // nudge past the trigger edge
  if (lenis) lenis.scrollTo(y, { duration: 1.8 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

// Masked line reveal for headings built from .line-mask > span.
export function revealLines(heading) {
  gsap.from(heading.querySelectorAll(".line-mask > span"), {
    yPercent: 110, duration: 1.2, ease: "expo.out", stagger: 0.1,
    scrollTrigger: { trigger: heading, start: "top 85%" },
  });
}

// Clip-path wipe for [data-reveal] image frames.
export function revealImage(el) {
  gsap.timeline({ scrollTrigger: { trigger: el, start: "top 88%" } })
    .to(el, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "expo.inOut" })
    .to(el.querySelector("img"), { scale: 1, duration: 1.8, ease: "expo.out" }, "<.1");
}

// onClick handler for in-page "#id" links.
export function anchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || href.length < 2 || !href.startsWith("#")) return;
  e.preventDefault();
  scrollToTarget(href);
}
