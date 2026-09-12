import { profile } from "../data/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className="eyebrow" style={{ color: "var(--teal-1)" }}>
              travaillons ensemble
            </p>
            <h2 className={styles.heading}>Un projet en tête ?</h2>
            <a className={styles.emailLink} href={`mailto:${profile.email}`}>
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.details}>
            <div className={styles.detailGroup}>
              <h4>Téléphone / WhatsApp</h4>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </div>
            <div className={styles.detailGroup}>
              <h4>Basé à</h4>
              <p>{profile.location}</p>
            </div>
            <div className={styles.detailGroup}>
              <h4>Réseaux</h4>
              <ul className={styles.socials}>
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {profile.name} — {profile.studio}
          </span>
          <span>Conçu &amp; codé avec soin.</span>
        </div>
      </div>
    </footer>
  );
}
