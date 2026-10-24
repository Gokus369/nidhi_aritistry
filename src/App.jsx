import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion, setLenis } from "./lib/motion.js";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ServiceIndex from "./components/ServiceIndex.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Services from "./components/Services.jsx";
import Marquee from "./components/Marquee.jsx";
import Gallery from "./components/Gallery.jsx";
import Stats from "./components/Stats.jsx";
import Studio from "./components/Studio.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  const [ready, setReady] = useState(false);
  const [lenis, setLenisState] = useState(null);

  // smooth scroll, held until the preloader finishes
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const l = new Lenis({ lerp: 0.09, smoothWheel: true });
    const tick = (t) => l.raf(t * 1000);
    l.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    l.stop();
    setLenis(l);
    setLenisState(l);
    return () => {
      gsap.ticker.remove(tick);
      l.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    lenis?.start();
    ScrollTrigger.refresh();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [ready, lenis]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Loader onDone={() => setReady(true)} />
      <Nav ready={ready} />
      <main id="top">
        <Hero ready={ready} />
        <ServiceIndex />
        <Manifesto />
        <Services />
        <Marquee />
        <Gallery />
        <Stats />
        <Studio />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
