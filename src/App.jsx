/* ============================================================================
   Joshua Pearre — TIER 4 (Expressive Brand)
   Generated with the website-generator skill · "Court & Console" brand.
   Fully dark, cinematic, oversized type. The centerpiece is a pinned,
   scroll-scrubbed "court → code" My Story sequence whose canvas temperature
   shifts warm→cool as you scroll. Reduced-motion collapses it to a plain read.
   Single-page: Hero → Story(scroll) → Projects → Skills → Timeline → Connect.
   Content: src/data/content.js (shared across all tiers).
   ============================================================================ */
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import StoryScroll from "./components/StoryScroll.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import Connect from "./components/Connect.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoryScroll />
        <Projects />
        <Skills />
        <Timeline />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
