import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion, revealImage, revealLines, anchorClick } from "../lib/motion.js";
import { STUDIO_IMAGE, RENTALS } from "../data.js";

export default function Studio() {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    revealImage(root.current.querySelector("[data-reveal]"));
    revealLines(root.current.querySelector("h2"));
    gsap.fromTo(".studio-img img", { yPercent: -10 }, {
      yPercent: 0, ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.from(".rent li", {
      x: 40, opacity: 0, stagger: 0.12, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".rent", start: "top 85%" },
    });
  }, { scope: root });

  return (
    <section className="studio" id="studio" ref={root}>
      <div className="studio-img" data-reveal><img src={STUDIO_IMAGE} alt="Baby portrait in studio" /></div>
      <div>
        <p className="eyebrow">( Krishnapuram Studio )</p>
        <h2>
          <span className="line-mask"><span>A space built</span></span>
          <span className="line-mask"><span>for <span className="it">your story.</span></span></span>
        </h2>
        <p>Our studio near Health Center, Krishnapuram, has themed newborn sets, controlled lighting and a media room, and it's available to rent for creators and brands.</p>
        <ul className="rent">
          {RENTALS.map((r) => (
            <li key={r.title}>
              <div><h4>{r.title}</h4><small>{r.text}</small></div>
              <a href="#contact" onClick={anchorClick}>Ask price →</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
