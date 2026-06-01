import { useState } from "react";
import { asset, resumeUrl } from "../lib/asset.js";

const links = [
  { label: "Story", href: "#story" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#connect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#top">
          <img src={asset("jp-nojoshin-logo.svg")} alt="Josh Pearre logo" />
          <span>Joshua Pearre</span>
        </a>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <ul className={`nav__links${open ? " is-open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a className="btn btn--primary" href={resumeUrl} target="_blank" rel="noopener">Résumé</a></li>
        </ul>
      </div>
    </header>
  );
}
