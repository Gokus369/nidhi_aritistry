import { useRef } from "react";
import { useGSAP, prefersReducedMotion, revealLines } from "../lib/motion.js";

export default function SectionHead({ line1, line2, text }) {
  const ref = useRef(null);
  useGSAP(() => { if (!prefersReducedMotion()) revealLines(ref.current); });

  return (
    <div className="sec-head">
      <h2 ref={ref}>
        <span className="line-mask"><span>{line1}</span></span>
        <span className="line-mask"><span className="it">{line2}</span></span>
      </h2>
      <p>{text}</p>
    </div>
  );
}
