import { useState } from "react";
import { asset } from "../lib/asset.js";
import { connect, profile, socials } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Connect() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend in this preview — open the visitor's mail client with the
    // message pre-filled, and show a confirmation. Wire to Formspree/Web3Forms
    // (or the existing JotForm) to capture submissions server-side.
    const f = e.target;
    const subject = encodeURIComponent(`Website message from ${f.name.value}`);
    const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section container" id="connect">
      <Reveal className="section-head">
        <span className="eyebrow">{connect.eyebrow}</span>
        <h2>{connect.heading}</h2>
        <p>{connect.sub}</p>
      </Reveal>

      <div className="connect-grid">
        <Reveal>
          <span className="badge">Open to opportunities</span>
          <div className="contact-card">
            <div className="row"><span className="k">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div className="row"><span className="k">Phone</span><a href={profile.phoneHref}>{profile.phone}</a></div>
            <div className="row"><span className="k">Based</span><span>{profile.location}</span></div>
            <div className="row"><span className="k">Résumé</span><a href={`${import.meta.env.BASE_URL}resume/Joshua Pearre Resume.pdf`} target="_blank" rel="noopener">Download (PDF) ↗</a></div>
          </div>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                <img src={asset(s.icon)} alt={s.label} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          {sent ? (
            <div className="form__ok" style={{ marginBottom: ".9rem" }}>Thanks — your message is ready in your mail app. I read every one. No Joshing.</div>
          ) : null}
          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="A project, a role, or just to talk shop…" />
            </div>
            <button className="btn btn--primary" type="submit">Send message</button>
            <p className="form__note">{connect.formNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
