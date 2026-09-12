import { profile } from "../data/content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <h1 className={styles.wordmarkRow}>
        <span>Josue</span>
        <span className={styles.wordmarkAccent}>Bolowa</span>
      </h1>
      <div className={styles.subrow}>
        <span className={styles.roleTag}>{profile.role}</span>
        <span className={styles.location}>{profile.location}</span>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        Défiler
      </div>
    </section>
  );
}
