import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.label}>— Pygame Enthusiast</div>

      <h1 className={styles.name}>
        <span className={styles.line1}>Aryan</span>
        <span className={styles.line2}>
          Raj
          <span className={styles.dot}>.</span>
        </span>
      </h1>

      <div className={styles.bottom}>
        <p className={styles.tagline}>
          I build silly games, and personal project. Learning Unity so I can
          develop better games.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            See my work
          </a>
          <a href="#contact" className={styles.secondary}>
            Let's talk
          </a>
        </div>
      </div>

      <div className={styles.marqueeWrap} aria-hidden>
        <div className={styles.marquee}>
          {Array(3)
            .fill([
              "Python",
              "PyGame",
              "Again Python",
              "Hindi",
              "English",
              "C# 😏",
              "Did I say English?",
            ])
            .flat()
            .map((t, i) => (
              <span key={i} className={styles.marqueeItem}>
                {t} <span className={styles.sep}>✦</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
