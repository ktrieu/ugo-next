import styles from "./HomeHero.module.css";

export const HomeHero = () => {
  return (
    <h1 className="mx-auto text-9xl text-center my-40">
      <span className={`${styles.hero} ${styles.our}`}>Our</span>{" "}
      <span className={`${styles.hero} ${styles.product}`}>product</span>{" "}
      <span className={`${styles.hero} ${styles.is}`}>is</span>
      <span className={`${styles.hero} ${styles.dot}`}>.</span>
    </h1>
  );
};
