import { asset } from "../lib/asset.js";
import { story, images } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Story() {
  return (
    <section className="section container" id="story">
      <Reveal className="section-head">
        <span className="eyebrow">01 — The Story</span>
        <h2>{story.heading}</h2>
        <p>Four chapters — from a high-school court to AI systems. Same process, start to finish.</p>
      </Reveal>

      {story.chapters.map((ch, i) => (
        <Reveal className="chapter" key={ch.id} delay={0.04}>
          <div className="chapter__media">
            <img src={asset(images[ch.image])} alt={ch.imageAlt} loading="lazy" />
          </div>
          <div className="chapter__body">
            <span className="eyebrow">{ch.eyebrow}</span>
            <h3>{ch.title}</h3>
            <p>{ch.body}</p>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <p className="pullquote">
          The court taught me to trust the process. Software is where I get to <span className="amber">build it</span>.
        </p>
      </Reveal>
    </section>
  );
}
