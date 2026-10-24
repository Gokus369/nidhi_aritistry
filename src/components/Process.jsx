import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { STEPS } from "../data.js";
import SectionHead from "./SectionHead.jsx";

export default function Process() {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.to(".steps-line i", {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: ".steps", start: "top 80%", end: "bottom 60%", scrub: true },
    });
    gsap.from(".step", {
      y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".steps", start: "top 75%" },
    });
  }, { scope: root });

  return (
    <section className="process" ref={root}>
      <SectionHead line1="How it" line2="unfolds." text="Simple, personal and unhurried, from the first message to the final album." />
      <div className="steps">
        <div className="steps-line"><i /></div>
        {STEPS.map((s) => (
          <div className="step" key={s.title}>
            <em>{s.n}</em><h4>{s.title}</h4><p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
