import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";
import { CONFIG, CONTACT_IMAGE, waUrl, telUrl } from "../data.js";
import SplitChars from "./SplitChars.jsx";
import MagneticLink from "./MagneticLink.jsx";

export default function Contact() {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".contact h2 .ch", {
      yPercent: 110, stagger: 0.025, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: ".contact h2", start: "top 80%" },
    });
    gsap.fromTo(".contact-bg img", { scale: 1.25 }, {
      scale: 1, ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
    });
    gsap.from(".contact-actions .btn, .contact-grid > div", {
      y: 30, opacity: 0, stagger: 0.07, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: ".contact-actions", start: "top 90%" },
    });
  }, { scope: root });

  return (
    <section className="contact" id="contact" ref={root}>
      <div className="contact-bg"><img src={CONTACT_IMAGE} alt="" /></div>
      <p className="eyebrow" style={{ marginBottom: 28 }}>( Let's talk )</p>
      <h2>
        <span className="line-mask"><span><SplitChars text="Let's create" /></span></span>
        <span className="line-mask"><span className="it"><SplitChars text="something timeless." /></span></span>
      </h2>
      <div className="contact-actions">
        <MagneticLink className="solid" href={waUrl} target="_blank" rel="noopener">WhatsApp us</MagneticLink>
        <MagneticLink href={telUrl}>Call the studio</MagneticLink>
        <MagneticLink href={CONFIG.mapsUrl} target="_blank" rel="noopener">Get directions</MagneticLink>
      </div>
      <div className="contact-grid">
        <div><h5>Studio</h5><p>Health Center, Krishnapuram,<br />Alappuzha 690533, Kerala</p></div>
        <div><h5>Hours</h5><p><span className="open-dot" />Open daily until 6:00 pm</p></div>
        <div><h5>Speak</h5><p><a className="u" href={telUrl}>{CONFIG.phoneDisplay}</a></p></div>
        <div>
          <h5>Follow</h5>
          <p>
            <a className="u" href={CONFIG.instagram} target="_blank" rel="noopener">Instagram</a>
            {" · "}
            <a className="u" href={CONFIG.youtube} target="_blank" rel="noopener">YouTube</a>
          </p>
        </div>
      </div>
    </section>
  );
}
