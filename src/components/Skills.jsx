import { skills } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <Reveal className="section-head">
        <span className="eyebrow">{skills.eyebrow}</span>
        <h2>{skills.heading}</h2>
        <p>{skills.sub}</p>
      </Reveal>

      <div className="skills-grid">
        {skills.groups.map((g) => (
          <Reveal className="skill-group" key={g.label}>
            <h3>{g.label}</h3>
            {g.caption && <p className="cap">{g.caption}</p>}
            <div className="chips">
              {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="certs">
        {skills.certifications.map((c) => (
          <div className="cert" key={c.title}>
            <h4>{c.title}</h4>
            <span>{c.issuer}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
