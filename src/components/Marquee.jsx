import { MARQUEE } from "../data.js";

// Static band of service names.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-inner">
        {MARQUEE.map((w, i) => <span key={w}>{i % 2 ? <em>{w}</em> : w}</span>)}
      </div>
    </div>
  );
}
