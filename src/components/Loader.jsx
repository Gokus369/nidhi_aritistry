import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";

// Counts 0→100, then lifts like a curtain. `onDone` fires as the curtain starts to rise.
export default function Loader({ onDone }) {
  const root = useRef(null);
  const count = useRef(null);

  useGSAP(() => {
    const d = prefersReducedMotion() ? 0.3 : 1.8;
    const counter = { v: 0 };
    gsap.timeline()
      .to(".loader-name span", { y: 0, duration: 1, ease: "power4.out", stagger: 0.12 })
      .to(counter, {
        v: 100, duration: d, ease: "power2.inOut",
        onUpdate: () => { count.current.textContent = Math.round(counter.v); },
      }, 0)
      .to(".loader-bar", { scaleX: 1, duration: d, ease: "power2.inOut" }, 0)
      .call(onDone, null, "+=.15")
      .to(root.current, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, "<")
      .set(root.current, { display: "none" });
  }, { scope: root });

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader-top eyebrow"><span>Photography & Films</span><span>Alappuzha · Kerala</span></div>
      <div>
        <div className="loader-name"><span>Nidhi&nbsp;</span><span className="it">Artistry</span></div>
      </div>
      <div className="loader-count" ref={count}>0</div>
      <div className="loader-bar" />
    </div>
  );
}
