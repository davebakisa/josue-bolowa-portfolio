import type { Project } from "../data/content";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  reverse?: boolean;
  onOpenImage: (src: string, alt: string) => void;
};

export function ProjectCard({ project, reverse, onOpenImage }: Props) {
  return (
    <article className={`${styles.project} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.grid}>
        <button
          type="button"
          className={styles.figure}
          onClick={() => onOpenImage(project.image, project.client)}
          aria-label={`Agrandir la planche projet ${project.client}`}
        >
          <img src={project.image} alt={`Déclinaisons de l'identité ${project.client}`} loading="lazy" />
        </button>
        <div>
          <p className={styles.category} style={{ color: project.accent }}>
            {project.category}
          </p>
          <h3 className={styles.title}>{project.client}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tagRow}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
