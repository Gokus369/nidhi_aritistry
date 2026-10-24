import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, anchorClick } from "../lib/motion.js";
import MagneticLink from "./MagneticLink.jsx";

const LINKS = [["#services", "Services"], ["#work", "Work"], ["#studio", "Studio"], ["#contact", "Contact"]];

export default function Nav({ ready }) {
  const ref = useRef(null);

  // hide on scroll down, show on scroll up, go solid after the top
  useGSAP(() => {
    const nav = ref.current;
    ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: (s) => {
        const y = s.scroll();
        nav.classList.toggle("is-hidden", s.direction === 1 && y > 200);
        nav.classList.toggle("is-solid", y > 80);
      },
    });
  });

  useGSAP(() => {
    if (!ready) gsap.set(ref.current, { opacity: 0 });
    else gsap.to(ref.current, { opacity: 1, duration: 0.9, delay: 0.6 });
  }, { dependencies: [ready] });

  return (
    <header className="nav" ref={ref}>
      <a href="#top" className="logo" onClick={anchorClick}>Nidhi<b>.</b></a>
      <nav className="nav-links">
        {LINKS.map(([href, label]) => <a key={href} href={href} onClick={anchorClick}>{label}</a>)}
      </nav>
      <MagneticLink href="#contact" onClick={anchorClick}>Book a shoot</MagneticLink>
    </header>
  );
}
