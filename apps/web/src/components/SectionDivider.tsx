import styles from "./SectionDivider.module.css";

type Props = {
  id?: string;
  index: string;
  label: string;
};

export function SectionDivider({ id, index, label }: Props) {
  return (
    <div id={id} className={`${styles.divider} ripple-bg`}>
      <p className={styles.index}>{index}</p>
      <p className={styles.eyebrowLarge}>{label}</p>
    </div>
  );
}
