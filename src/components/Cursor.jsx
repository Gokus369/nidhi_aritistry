import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";

// Dot + trailing ring; the ring grows into a "View" badge over [data-cursor="view"].
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const dx = gsap.quickTo(dot.current, "x", { duration: 0.1 });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.1 });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const move = (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); };
    const over = (e) => ring.current.classList.toggle("is-view", !!e.target.closest?.('[data-cursor="view"]'));
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  });

  return (
    <>
      <div className="cursor" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true"><span>View</span></div>
    </>
  );
}
