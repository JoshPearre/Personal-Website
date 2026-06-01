import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { asset } from "../lib/asset.js";
import { story, images } from "../data/content.js";

/* ---- one cross-fading / parallaxing chapter layer ---- */
function ChapterLayer({ progress, i, total, ch }) {
  const seg = 1 / total;
  const c = (i + 0.5) * seg;
  const opacity = useTransform(progress, [c - 0.5 * seg, c - 0.32 * seg, c + 0.32 * seg, c + 0.5 * seg], [0, 1, 1, 0]);
  const y = useTransform(progress, [c - 0.5 * seg, c + 0.5 * seg], [60, -60]);
  const imgY = useTransform(progress, [c - 0.5 * seg, c + 0.5 * seg], [90, -90]);
  const imgScale = useTransform(progress, [c - 0.5 * seg, c, c + 0.5 * seg], [1.08, 1, 1.08]);

  return (
    <motion.div className="cs-layer" style={{ opacity }}>
      <div className="container cs-grid">
        <motion.div className="cs-text" style={{ y }}>
          <span className="cs-num">{ch.eyebrow.split("—")[0].trim()}<i>/0{total}</i></span>
          <h3>{ch.title}</h3>
          <p>{ch.body}</p>
        </motion.div>
        <div className="cs-media">
          <motion.img src={asset(images[ch.image])} alt={ch.imageAlt} style={{ y: imgY, scale: imgScale }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ---- the pinned, scroll-scrubbed sequence ---- */
function PinnedStory() {
  const ref = useRef(null);
  const total = story.chapters.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Court (warm) → Code (cool ink): the canvas temperature shifts as you scroll.
  const bg = useTransform(scrollYProgress, [0, 0.34, 0.7, 1], ["#1a1206", "#0E1116", "#0c1322", "#0a0f1a"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["18%", "82%"]);
  const rail = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="storyscroll" id="story" ref={ref} style={{ height: `${total * 100}vh` }}>
      <div className="cs-stage">
        <motion.div className="cs-bg" style={{ background: bg }} />
        <motion.div className="cs-glow" style={{ left: glowX }} />
        <div className="container cs-head">
          <span className="eyebrow">01 — The Story</span>
          <h2>{story.heading}</h2>
        </div>
        {story.chapters.map((ch, i) => (
          <ChapterLayer key={ch.id} progress={scrollYProgress} i={i} total={total} ch={ch} />
        ))}
        <div className="cs-rail"><motion.span style={{ height: rail }} /></div>
        <div className="cs-hint">scroll ↓</div>
      </div>
    </section>
  );
}

/* ---- reduced-motion / fallback: a plain stacked read ---- */
function SimpleStory() {
  return (
    <section className="section container" id="story">
      <div className="section-head">
        <span className="eyebrow">01 — The Story</span>
        <h2>{story.heading}</h2>
      </div>
      {story.chapters.map((ch) => (
        <div className="chapter" key={ch.id}>
          <div className="chapter__media"><img src={asset(images[ch.image])} alt={ch.imageAlt} /></div>
          <div className="chapter__body">
            <span className="eyebrow">{ch.eyebrow}</span>
            <h3>{ch.title}</h3>
            <p>{ch.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function StoryScroll() {
  const reduce = useReducedMotion();
  return (
    <>
      {reduce ? <SimpleStory /> : <PinnedStory />}
      <p className="pullquote container">
        The court taught me to trust the process. Software is where I get to <span className="amber">build it</span>.
      </p>
    </>
  );
}
