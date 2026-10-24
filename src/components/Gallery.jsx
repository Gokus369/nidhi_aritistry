import { GALLERY, img } from "../data.js";
import SectionHead from "./SectionHead.jsx";

export default function Gallery() {
  return (
    <section className="gallery" id="work">
      <SectionHead animate={false} line1="Selected" line2="frames." text="A glimpse from recent sessions: weddings, little ones and everything in between." />
      <div className="g-grid">
        {GALLERY.map((col, c) => (
          <div className="g-col" key={c}>
            {col.items.map((it) => (
              <figure className={`g-item ${it.shape}`} data-cursor="view" key={it.id}>
                <img src={img(it.id, 900)} alt={it.label} loading="lazy" />
                <figcaption>{it.label}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
