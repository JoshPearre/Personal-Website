import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

const pillarClass = (p) =>
  p.startsWith("AI") ? "pillar--ai"
  : p.startsWith("Full") ? "pillar--full"
  : p.startsWith("Data") ? "pillar--data"
  : "pillar--design";

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal className="section-head">
        <span className="eyebrow">{projects.eyebrow}</span>
        <h2 className="big-h2">{projects.heading}</h2>
        <p>{projects.sub}</p>
      </Reveal>

      <div className="proj4-grid">
        {projects.items.map((p, i) => (
          <Reveal as="article" className={`proj4${p.featured ? " feat" : ""}`} key={p.id} delay={(i % 2) * 0.08}>
            <div className="proj4__num">{String(i + 1).padStart(2, "0")}</div>
            <div className="proj4__body">
              <div className="proj4__top">
                <span className={`proj__pillar ${pillarClass(p.pillar)}`}>{p.pillar}</span>
                {p.featured && <span className="proj__star">★ Featured</span>}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="proj__tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
