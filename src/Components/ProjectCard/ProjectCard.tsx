import styles from "./ProjectCard.module.scss";

function ProjectCard({
  cardCaption,
  src,
}: {
  cardCaption: string;
  src: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + src})` }}
      >
        <div className={styles.cardCaption}>{cardCaption}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
