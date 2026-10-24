import { CONFIG, CONTACT_IMAGE, waUrl, telUrl } from "../data.js";
import MagneticLink from "./MagneticLink.jsx";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg"><img src={CONTACT_IMAGE} alt="" /></div>
      <p className="eyebrow" style={{ marginBottom: 28 }}>( Let's talk )</p>
      <h2>
        Let's create<br />
        <span className="it">something timeless.</span>
      </h2>
      <div className="contact-actions">
        <MagneticLink className="solid" href={waUrl} target="_blank" rel="noopener">WhatsApp us</MagneticLink>
        <MagneticLink href={telUrl}>Call the studio</MagneticLink>
        <MagneticLink href={CONFIG.mapsUrl} target="_blank" rel="noopener">Get directions</MagneticLink>
      </div>
      <div className="contact-grid">
        <div><h5>Studio</h5><p>Health Center, Krishnapuram,<br />Alappuzha 690533, Kerala</p></div>
        <div><h5>Hours</h5><p><span className="open-dot" />Open daily until 6:00 pm</p></div>
        <div><h5>Speak</h5><p><a className="u" href={telUrl}>{CONFIG.phoneDisplay}</a></p></div>
        <div>
          <h5>Follow</h5>
          <p>
            <a className="u" href={CONFIG.instagram} target="_blank" rel="noopener">Instagram</a>
            {" · "}
            <a className="u" href={CONFIG.youtube} target="_blank" rel="noopener">YouTube</a>
          </p>
        </div>
      </div>
    </section>
  );
}
