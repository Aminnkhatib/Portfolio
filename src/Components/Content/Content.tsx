import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <h1>Hello I'm Aminn</h1>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={process.env.PUBLIC_URL + "./computerImage.svg"}
          alt="computerImage"
          className={styles.computerImage}
        />
      </div>
    </div>
  );
}

export default Content;
