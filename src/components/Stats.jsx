import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { STATS } from "../data.js";

export default function Stats() {
  const root = useRef(null);
  const reduce = prefersReducedMotion();

  useGSAP(() => {
    if (reduce) return;
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const o = { v: 0 };
      const dec = +(el.dataset.dec || 0);
      gsap.to(o, {
        v: +el.dataset.count, duration: 2, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => { el.textContent = o.v.toFixed(dec); },
      });
    });
  }, { scope: root });

  return (
    <section className="stats" ref={root}>
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <b>
            <span data-count={s.value} data-dec={s.dec || 0}>{reduce ? s.value.toFixed(s.dec || 0) : 0}</span>
            {s.sup && <sup>{s.sup}</sup>}
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
