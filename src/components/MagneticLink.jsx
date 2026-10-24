import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/motion.js";

// An <a> that leans toward the cursor on fine-pointer devices.
export default function MagneticLink({ className = "", children, ...props }) {
  const ref = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const el = ref.current;
    const mx = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1,.4)" });
    const my = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1,.4)" });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      mx((e.clientX - r.left - r.width / 2) * 0.3);
      my((e.clientY - r.top - r.height / 2) * 0.4);
    };
    const leave = () => { mx(0); my(0); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  });

  return <a ref={ref} className={`btn magnetic ${className}`.trim()} {...props}>{children}</a>;
}
