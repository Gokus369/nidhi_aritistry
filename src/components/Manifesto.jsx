import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { MANIFESTO } from "../data.js";

// Words brighten one by one as the paragraph scrolls through.
export default function Manifesto() {
  const ref = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.to(ref.current.querySelectorAll(".w"), {
      opacity: 1, stagger: 0.08, ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
    });
  });

  return (
    <section className="manifesto">
      <p className="eyebrow">( The Studio )</p>
      <p id="manifesto" ref={ref}>
        {MANIFESTO.map((w, i) =>
          typeof w === "string"
            ? <span className="w" key={i}>{w}</span>
            : <span className="w it" key={i}>{w.it}</span>
        )}
      </p>
    </section>
  );
}
