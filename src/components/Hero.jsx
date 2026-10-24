import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion, scrollToService } from "../lib/motion.js";
import { HERO_IMAGE, SERVICES } from "../data.js";
import SplitChars from "./SplitChars.jsx";

export default function Hero({ ready }) {
  const root = useRef(null);

  // scroll: the small frame grows to fullscreen while the title halves drift apart
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const startClip = innerWidth <= 700 ? "inset(34% 16% 30% 16% round 4px)" : "inset(30% 34% 30% 34% round 4px)";
    gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=160%", scrub: 1, pin: true } })
      .fromTo(".hero-media", { clipPath: startClip }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" }, 0)
      .to(".hero-media img", { scale: 1, ease: "none" }, 0)
      .to(".hero-title .l", { xPercent: -45, yPercent: -40, opacity: 0, ease: "power1.in" }, 0)
      .to(".hero-title .r", { xPercent: 45, yPercent: 40, opacity: 0, ease: "power1.in" }, 0)
      .to(".hero-meta", { opacity: 0, duration: 0.3 }, 0)
      .to(".hero-caption", { opacity: 1, y: 0, duration: 0.35 }, 0.65);
  }, { scope: root });

  // intro, played once the preloader lifts
  useGSAP(() => {
    if (!ready) {
      gsap.set(".hero-title .ch", { yPercent: 110 });
      gsap.set(".hero-meta > *", { opacity: 0, y: 20 });
      return;
    }
    gsap.timeline({ delay: 0.55 })
      .to(".hero-title .ch", { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.04 })
      .fromTo(".hero-media img", { scale: 1.8 }, { scale: prefersReducedMotion() ? 1 : 1.35, duration: 1.8, ease: "expo.out" }, "<")
      .to(".hero-meta > *", { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "<.3");
  }, { scope: root, dependencies: [ready] });

  return (
    <section className="hero" ref={root}>
      <div className="hero-media">
        <img src={HERO_IMAGE} alt="Bride and groom portrait" />
      </div>
      <h1 className="hero-title" aria-label="Nidhi Artistry">
        <span className="row l"><SplitChars text="Nidhi" /></span>
        <span className="row r"><SplitChars text="Artistry" /></span>
      </h1>
      <div className="hero-meta">
        <span>Photography & Films</span>
        <span className="scroll-cue"><i />Scroll</span>
        <span>Est. in Krishnapuram, Alappuzha</span>
      </div>
      <div className="hero-caption">
        <p className="eyebrow" style={{ margin: "0 0 14px" }}>★ 4.9 · Rated by 77 clients</p>
        <h2>Moments that become <span className="it">heirlooms.</span></h2>
        <p>Weddings, new beginnings, brands and voices, captured with patience and a quiet eye for light.</p>
        <div className="hero-services">
          {SERVICES.map((s, i) => (
            <button type="button" key={s.name} onClick={() => scrollToService(i)}>{s.name}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
