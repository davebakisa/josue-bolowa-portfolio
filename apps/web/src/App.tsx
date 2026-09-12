import { useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Lightbox } from "./components/Lightbox";
import { ProjectCard } from "./components/ProjectCard";
import { SectionDivider } from "./components/SectionDivider";
import {
  brandProjects,
  campaignProject,
  musicProject,
  packagingProject,
  socialGalleries,
} from "./data/content";

type LightboxState = { src: string; alt: string } | null;

export default function App() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openImage = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />

        <SectionDivider id="identite" index="01" label="identité de marque" />
        <section className={styles.workSection} aria-label="Identité de marque">
          <div className="container">
            <div className={styles.workIntro}>
              <h2 className="section-heading">Des marques qui se distinguent</h2>
              <p className="section-lede">
                Quatre univers, quatre publics : de la restauration rapide à la
                sécurité électronique, chaque logo est pensé pour tenir sur un
                badge comme sur une devanture.
              </p>
            </div>
            {brandProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                reverse={i % 2 === 1}
                onOpenImage={openImage}
              />
            ))}
          </div>
        </section>

        <SectionDivider id="packaging" index="02" label="packaging" />
        <section className={styles.workSection} aria-label="Packaging">
          <div className="container">
            <div className={styles.workIntro}>
              <h2 className="section-heading">Du produit à l'étagère</h2>
              <p className="section-lede">
                Penser le packaging comme un support de marque à part entière :
                lisible en rayon, cohérent en affichage, prêt pour la rue.
              </p>
            </div>
            <ProjectCard project={packagingProject} onOpenImage={openImage} />
          </div>
        </section>

        <SectionDivider id="communication" index="03" label="communication" />
        <section className={`${styles.workSection} ${styles.gallerySection}`} aria-label="Communication digitale">
          <div className="container">
            <div className={styles.workIntro}>
              <h2 className="section-heading">Visible sur tous les écrans</h2>
              <p className="section-lede">
                Affiches, statuts et campagnes : des visuels pensés pour être
                compris en une seconde de défilement.
              </p>
            </div>
            {socialGalleries.map((g) => (
              <Gallery key={g.title} {...g} onOpenImage={openImage} />
            ))}
            <Gallery {...campaignProject} onOpenImage={openImage} />
          </div>
        </section>

        <SectionDivider index="04" label="direction artistique" />
        <section className={styles.workSection} aria-label="Direction artistique musicale">
          <div className="container">
            <div className={styles.workIntro}>
              <h2 className="section-heading">Une image pour chaque voix</h2>
              <p className="section-lede">
                Pochettes et visuels d'artistes : donner à chaque sortie
                musicale une identité qui lui appartient.
              </p>
            </div>
            <Gallery {...musicProject} onOpenImage={openImage} />
          </div>
        </section>
      </main>
      <Footer />

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
