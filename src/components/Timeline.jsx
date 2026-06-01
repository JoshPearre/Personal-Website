import { timeline } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function Track({ title, modifier, items }) {
  return (
    <div className={`track ${modifier}`}>
      <h3>{title}</h3>
      {items.map((it, i) => (
        <div className="tl-item" key={i}>
          <span className="date">{it.dates}</span>
          <h4>{it.role}</h4>
          <span className="org">{it.org}</span>
          <p>{it.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="section container" id="timeline">
      <Reveal className="section-head">
        <span className="eyebrow">{timeline.eyebrow}</span>
        <h2>{timeline.heading}</h2>
        <p>{timeline.sub}</p>
      </Reveal>
      <Reveal className="timeline">
        <Track title="Professional" modifier="track--pro" items={timeline.professional} />
        <Track title="Athletics & Academics" modifier="track--ath" items={timeline.athletic} />
      </Reveal>
    </section>
  );
}
