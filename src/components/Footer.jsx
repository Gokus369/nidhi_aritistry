import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";

export default function Footer() {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".foot-big", {
      yPercent: 60, opacity: 0, ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
    });
  }, { scope: root });

  return (
    <footer ref={root}>
      <div className="foot-big">Nidhi Artistry</div>
      <div className="foot-row">
        <span>© {new Date().getFullYear()} Nidhi Artistry</span>
        <span>Photography · Films · Studio</span>
        <span>Alappuzha, Kerala</span>
      </div>
    </footer>
  );
}
