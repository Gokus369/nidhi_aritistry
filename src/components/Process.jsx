import { STEPS } from "../data.js";
import SectionHead from "./SectionHead.jsx";

export default function Process() {
  return (
    <section className="process">
      <SectionHead animate={false} line1="How it" line2="unfolds." text="Simple, personal and unhurried, from the first message to the final album." />
      <div className="steps">
        <div className="steps-line"><i /></div>
        {STEPS.map((s) => (
          <div className="step" key={s.title}>
            <em>{s.n}</em><h4>{s.title}</h4><p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
