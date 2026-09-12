import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#a-propos", label: "À propos" },
  { href: "#identite", label: "Identité de marque" },
  { href: "#packaging", label: "Packaging" },
  { href: "#communication", label: "Communication" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setOnDark(window.scrollY < window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={`${styles.mark} ${onDark && !scrolled ? styles.markOnDark : ""}`}
        >
          Josue Bolowa
        </a>
        <nav
          className={`${styles.nav} ${onDark && !scrolled ? styles.navOnDark : ""}`}
          aria-label="Navigation principale"
        >
          <ul>
            {LINKS.map((link) => (
              <li key={link.href} style={{ display: "inline" }}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className={styles.cta} style={{ textDecoration: "none" }}>
          <span className="tag">Discutons</span>
        </a>
        <button
          type="button"
          className={`${styles.toggle} ${onDark && !scrolled ? styles.markOnDark : ""}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileTop}>
            <span className={`${styles.mark} ${styles.markOnDark}`}>
              Josue Bolowa
            </span>
            <button
              type="button"
              className={`${styles.toggle} ${styles.markOnDark}`}
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className={styles.mobileNav}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
