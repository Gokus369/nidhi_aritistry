import { useRef } from "react";
import { ScrollTrigger, useGSAP } from "../lib/motion.js";
import { waUrl } from "../data.js";

// Floating WhatsApp button, shown once the hero is scrolled past.
export default function WhatsAppFloat() {
  const ref = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: (s) => ref.current.classList.toggle("show", s.scroll() > innerHeight * 0.8),
    });
  });

  return (
    <a className="wa" ref={ref} href={waUrl} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.1c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.1c-2 0-3.9-.6-5.5-1.6l-.4-.2-4 1.2 1.3-3.9-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.4 9.8 10.2 5.1 16 5.1s10.6 4.7 10.6 10.5S21.8 26.1 16 26.1zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" /></svg>
    </a>
  );
}
