import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { SERVICES } from "../data.js";
import SectionHead from "./SectionHead.jsx";

// Desktop: pinned horizontal track. Mobile: stacked cards with reveals.
export default function Services() {
  const root = useRef(null);
  const pin = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);
  const cur = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const panels = gsap.utils.toArray(".svc");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      const dist = () => track.current.scrollWidth - innerWidth;
      const h = gsap.to(track.current, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          id: "services-h", trigger: pin.current, start: "top top", end: () => "+=" + dist(),
          pin: true, scrub: 1, invalidateOnRefresh: true,
          onUpdate: (s) => {
            gsap.set(bar.current, { scaleX: s.progress });
            cur.current.textContent = String(Math.min(panels.length, Math.floor(s.progress * panels.length) + 1)).padStart(2, "0");
          },
        },
      });
      panels.forEach((p) => {
        gsap.fromTo(p.querySelector("img"), { xPercent: -8 }, {
          xPercent: 8, ease: "none",
          scrollTrigger: { trigger: p, containerAnimation: h, start: "left right", end: "right left", scrub: true },
        });
        gsap.from(p.querySelectorAll(".svc-num, h3, p, .tags"), {
          y: 60, opacity: 0, stagger: 0.08, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: p, containerAnimation: h, start: "left 75%" },
        });
      });
    });

    mm.add("(max-width: 899px)", () => {
      panels.forEach((p) => {
        gsap.from(p.querySelector(".svc-img"), {
          clipPath: "inset(100% 0 0 0)", duration: 1.3, ease: "expo.inOut",
          scrollTrigger: { trigger: p, start: "top 85%" },
        });
        gsap.from(p.querySelectorAll(".svc-num, h3, p, .tags"), {
          y: 40, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: p, start: "top 60%" },
        });
      });
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="services" id="services" ref={root}>
      <div className="services-intro">
        <SectionHead line1="What we" line2="create." text="Five crafts, one sensibility. Every frame is planned, lit and edited in-house." />
      </div>
      <div className="svc-pin" ref={pin}>
        <div className="svc-track" ref={track}>
          {SERVICES.map((s, i) => (
            <article className="svc" id={`svc-${i}`} key={s.title}>
              <div className="svc-img" data-cursor="view"><img src={s.image} alt={s.alt} /></div>
              <div>
                <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title} <span className="it">{s.accent}</span></h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="svc-progress"><i ref={bar} /></div>
        <div className="svc-count">
          <span>SCROLL</span>
          <span><b ref={cur}>01</b> / {String(SERVICES.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
