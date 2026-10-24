import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion, revealImage } from "../lib/motion.js";
import { GALLERY, img } from "../data.js";
import SectionHead from "./SectionHead.jsx";

// Three columns drifting at different speeds; each frame wipes in.
export default function Gallery() {
  const root = useRef(null);
  const grid = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.utils.toArray("[data-reveal]").forEach(revealImage);
    gsap.utils.toArray(".g-col").forEach((col) => {
      gsap.to(col, {
        yPercent: +col.dataset.speed, ease: "none",
        scrollTrigger: { trigger: grid.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  }, { scope: root });

  return (
    <section className="gallery" id="work" ref={root}>
      <SectionHead line1="Selected" line2="frames." text="A glimpse from recent sessions: weddings, little ones and everything in between." />
      <div className="g-grid" ref={grid}>
        {GALLERY.map((col, c) => (
          <div className="g-col" data-speed={col.speed} key={c}>
            {col.items.map((it) => (
              <figure className={`g-item ${it.shape}`} data-reveal data-cursor="view" key={it.id}>
                <img src={img(it.id, 900)} alt={it.label} loading="lazy" />
                <figcaption>{it.label}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
