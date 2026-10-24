import { SERVICES } from "../data.js";
import SectionHead from "./SectionHead.jsx";

// Static stacked cards, image side alternating on desktop.
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-intro">
        <SectionHead animate={false} line1="What we" line2="create." text="Five crafts, one sensibility. Every frame is planned, lit and edited in-house." />
      </div>
      <div className="svc-list">
        {SERVICES.map((s, i) => (
          <article className="svc" id={`svc-${i}`} key={s.title}>
            <div className="svc-img" data-cursor="view"><img src={s.image} alt={s.alt} loading="lazy" /></div>
            <div>
              <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title} <span className="it">{s.accent}</span></h3>
              <p>{s.text}</p>
              <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
