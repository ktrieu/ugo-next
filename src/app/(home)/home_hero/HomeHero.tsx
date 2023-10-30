import { FullHeightHero, ResponsiveContainer } from "@/components/container";
import styles from "./HomeHero.module.css";

import hero from "public/third_party/hero_space/image.jpg";

export const HomeHero = () => {
  return (
    <FullHeightHero
      background={{
        src: hero,
        alt: "The Earth from space at night.",
        priority: true,
      }}
    >
      <ResponsiveContainer>
        <h1 className="mx-auto text-center text-6xl lg:text-9xl text-white">
          <span className={`${styles.hero} ${styles.our}`}>Our</span>{" "}
          <span className={`${styles.hero} ${styles.product}`}>product</span>{" "}
          <span className={`${styles.hero} ${styles.is}`}>is</span>
          <span className={`${styles.hero} ${styles.dot}`}>.</span>
        </h1>
      </ResponsiveContainer>
    </FullHeightHero>
  );
};
