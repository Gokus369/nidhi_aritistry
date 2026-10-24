import { anchorClick } from "../lib/motion.js";
import { STUDIO_IMAGE, RENTALS } from "../data.js";

export default function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="studio-img"><img src={STUDIO_IMAGE} alt="Baby portrait in studio" loading="lazy" /></div>
      <div>
        <p className="eyebrow">( Krishnapuram Studio )</p>
        <h2>A space built<br />for <span className="it">your story.</span></h2>
        <p>Our studio near Health Center, Krishnapuram, has themed newborn sets, controlled lighting and a media room, and it's available to rent for creators and brands.</p>
        <ul className="rent">
          {RENTALS.map((r) => (
            <li key={r.title}>
              <div><h4>{r.title}</h4><small>{r.text}</small></div>
              <a href="#contact" onClick={anchorClick}>Ask price →</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
