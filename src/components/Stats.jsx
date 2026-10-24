import { STATS } from "../data.js";

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <b>
            <span>{s.value.toFixed(s.dec || 0)}</span>
            {s.sup && <sup>{s.sup}</sup>}
          </b>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
