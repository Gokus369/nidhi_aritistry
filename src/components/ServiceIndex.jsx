import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion, scrollToService } from "../lib/motion.js";
import { SERVICES } from "../data.js";

// Big numbered list of the five services, right after the hero.
// Rows wipe in on scroll; hovering shows a floating photo; clicking jumps to the panel.
export default function ServiceIndex() {
  const root = useRef(null);
  const preview = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.utils.toArray(".si-row").forEach((row) => {
      gsap.timeline({ scrollTrigger: { trigger: row, start: "top 88%" } })
        .from(row.querySelector(".si-line"), { scaleX: 0, duration: 1.2, ease: "expo.inOut" })
        .from(row.querySelector(".si-name > span"), { yPercent: 110, duration: 1.1, ease: "expo.out" }, "<.25")
        .from(row.querySelectorAll(".si-num, .si-short, .si-go"), { opacity: 0, y: 16, duration: 0.8, stagger: 0.06 }, "<.2");
    });

    // name slides sideways a touch as the list scrolls through
    gsap.utils.toArray(".si-name").forEach((el, i) => {
      gsap.fromTo(el, { xPercent: i % 2 ? 2 : -2 }, {
        xPercent: i % 2 ? -2 : 2, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const box = preview.current;
    const px = gsap.quickTo(box, "x", { duration: 0.6, ease: "power3" });
    const py = gsap.quickTo(box, "y", { duration: 0.6, ease: "power3" });
    const list = root.current.querySelector(".si-list");
    const move = (e) => { px(e.clientX); py(e.clientY); };
    const enter = () => gsap.to(box, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
    const leave = () => gsap.to(box, { scale: 0.6, opacity: 0, duration: 0.4, ease: "power3.in" });
    gsap.set(box, { xPercent: -50, yPercent: -50, scale: 0.6, opacity: 0 });
    list.addEventListener("mousemove", move);
    list.addEventListener("mouseenter", enter);
    list.addEventListener("mouseleave", leave);
    return () => {
      list.removeEventListener("mousemove", move);
      list.removeEventListener("mouseenter", enter);
      list.removeEventListener("mouseleave", leave);
    };
  }, { scope: root });

  // slide the preview strip so the hovered service's photo shows
  const show = (i) => gsap.to(".si-preview-strip", { yPercent: -100 * i / SERVICES.length, duration: 0.6, ease: "expo.out" });

  return (
    <section className="si" ref={root} aria-labelledby="si-title">
      <div className="si-head">
        <p className="eyebrow" id="si-title">( What we do )</p>
        <p className="si-count"><span>05</span> specialities under one roof</p>
      </div>

      <ol className="si-list">
        {SERVICES.map((s, i) => (
          <li className="si-row" key={s.name} onMouseEnter={() => show(i)}>
            <span className="si-line" />
            <button type="button" onClick={() => scrollToService(i)} aria-label={`See ${s.name}`}>
              <span className="si-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="si-name"><span><span className="si-t">{s.name}</span></span></span>
              <span className="si-short">{s.short}</span>
              <span className="si-go" aria-hidden="true">→</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="si-preview" ref={preview} aria-hidden="true">
        <div className="si-preview-strip">
          {SERVICES.map((s) => <img key={s.name} src={s.image} alt="" />)}
        </div>
      </div>
    </section>
  );
}
