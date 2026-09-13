import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.image}
        src="/banner.png"
        alt="Event venue background"
        fill
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.subtitle}>
          Finding the perfect venue has never been easier. Whether it&apos;s
          a wedding, corporate event, or private party, we&apos;re connecting
          people to the perfect place.
        </p>
      </div>
    </div>
  );
}
