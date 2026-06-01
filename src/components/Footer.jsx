import { asset } from "../lib/asset.js";
import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__big">No Joshing around.</div>
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <img src={asset("jp-nojoshin-logo.svg")} alt="" /> Joshua Pearre
            </div>
            <div className="footer__vals">{profile.values}</div>
          </div>
          <div className="footer__contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a><br />
            <a href={profile.phoneHref}>{profile.phone}</a><br />
            {profile.location}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {profile.copyrightYear} Joshua Pearre</span>
          <span>Tier 4 — Expressive Brand · Vite + React + Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
