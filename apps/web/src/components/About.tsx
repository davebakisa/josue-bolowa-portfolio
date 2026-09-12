import {
  experience,
  languages,
  profile,
  tools,
} from "../data/content";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="a-propos" className={styles.about}>
      <div className="container">
        <p className="eyebrow">à propos</p>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <h2 className="section-heading">
              Je m'appelle {profile.name.split(" ")[0]}
            </h2>
            <p className="section-lede">{profile.bio}</p>

            <div className={styles.columns} style={{ marginTop: "2.5rem" }}>
              <div className={styles.block}>
                <h3>Langues</h3>
                {languages.map((lang) => (
                  <div className={styles.langRow} key={lang.code}>
                    <span className={styles.langCode}>{lang.code}</span>
                    <div
                      className={styles.langBar}
                      role="img"
                      aria-label={`${lang.label} : niveau ${lang.level}%`}
                    >
                      <div
                        className={styles.langBarFill}
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.block}>
                <h3>Outils</h3>
                <ul className={styles.toolsList}>
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.block} style={{ marginTop: "2.5rem" }}>
              <h3>Contact</h3>
              <div className={styles.contactBlock}>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h3>Expérience</h3>
            <ol className={styles.timeline}>
              {experience.map((item) => (
                <li className={styles.timelineItem} key={`${item.year}-${item.org}`}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <div>
                    <p className={styles.timelineRole}>{item.role}</p>
                    <p className={styles.timelineOrg}>{item.org}</p>
                    <p className={styles.timelineDetail}>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
