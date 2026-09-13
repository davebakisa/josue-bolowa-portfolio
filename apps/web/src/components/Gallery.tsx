import styles from "./Gallery.module.css";

type Props = {
  title: string;
  description: string;
  image: string;
  onOpenImage: (src: string, alt: string) => void;
};

export function Gallery({ title, description, image, onOpenImage }: Props) {
  return (
    <div className={styles.galleryWrap}>
      <div className={styles.head}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button
        type="button"
        className={styles.figure}
        onClick={() => onOpenImage(image, title)}
        aria-label={`Agrandir : ${title}`}
      >
        <img src={ `${import.meta.env.BASE_URL}${image}` } alt={title} loading="lazy" />
      </button>
    </div>
  );
}
