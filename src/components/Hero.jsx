import { motion, useReducedMotion } from "framer-motion";
import { asset } from "../lib/asset.js";
import { hero, profile } from "../data/content.js";
import Particles from "./Particles.jsx";

export default function Hero() {
  const reduce = useReducedMotion();
  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 40, filter: reduce ? "none" : "blur(12px)" },
    show: (i) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.7, delay: reduce ? 0 : 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };
  const fade = (d) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: reduce ? 0 : d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero4" id="top">
      <Particles density={70} />
      <div className="hero4__mesh" aria-hidden="true" />
      <div className="container hero4__inner">
        <motion.span className="eyebrow" {...fade(0)}>{profile.eyebrow}</motion.span>

        <h1 className="hero4__display" aria-label="No Joshing around">
          <motion.span custom={0} variants={word} initial="hidden" animate="show">No</motion.span>{" "}
          <motion.span custom={1} variants={word} initial="hidden" animate="show">Joshing</motion.span>{" "}
          <motion.span custom={2} variants={word} initial="hidden" animate="show" className="amber">around.</motion.span>
        </h1>

        <motion.p className="hero4__lead" {...fade(0.5)}>{hero.greeting}</motion.p>
        <motion.p className="hero4__sub" {...fade(0.6)}>{hero.subhead}</motion.p>

        <motion.div className="hero4__cta" {...fade(0.7)}>
          <a className="btn btn--amber" href="#projects">See what I've built</a>
          <a className="btn btn--ghost-d" href="#story">Read my story ↓</a>
        </motion.div>

        <motion.div className="hero4__photo" {...fade(0.55)}>
          <img src={asset("umhb-basketball.jpg")} alt="Josh Pearre playing basketball for UMHB" />
        </motion.div>
      </div>

      <motion.div className="container hero4__stats" {...fade(0.85)}>
        {hero.stats.map((s) => (
          <div className="stat" key={s.label}>
            <b>{s.value}<span className="suffix">{s.suffix}</span></b>
            <span>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
