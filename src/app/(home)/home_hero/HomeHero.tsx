import { FullHeightHero } from "@/components/container";
import styles from "./HomeHero.module.css";

export const HomeHero = () => {
  return (
    <FullHeightHero>
      <h1 className="mx-auto text-center text-6xl lg:text-9xl">
        <span className={`${styles.hero} ${styles.our}`}>Our</span>{" "}
        <span className={`${styles.hero} ${styles.product}`}>product</span>{" "}
        <span className={`${styles.hero} ${styles.is}`}>is</span>
        <span className={`${styles.hero} ${styles.dot}`}>.</span>
      </h1>
    </FullHeightHero>
  );
};
