import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { MARQUEE } from "../data.js";

// Endless strip that speeds up, reverses and skews with scroll velocity.
export default function Marquee() {
  const root = useRef(null);
  const inner = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const loop = gsap.to(inner.current, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
    const skewTo = gsap.quickTo(inner.current, "skewX", { duration: 0.4 });
    ScrollTrigger.create({
      trigger: root.current, start: "top bottom", end: "bottom top",
      onUpdate: (s) => {
        const v = s.getVelocity();
        gsap.to(loop, { timeScale: s.direction * (1 + Math.min(Math.abs(v) / 300, 6)), duration: 0.2, overwrite: true });
        skewTo(gsap.utils.clamp(-8, 8, v / -250));
        gsap.delayedCall(0.2, () => skewTo(0));
      },
    });
  });

  const words = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee-inner" ref={inner}>
        {words.map((w, i) => <span key={i}>{i % 2 ? <em>{w}</em> : w}</span>)}
      </div>
    </div>
  );
}
