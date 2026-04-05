import styles from "./About.module.css";

const stats = [
  { n: "70+", label: "Years experience" },
  { n: "300+", label: "Projects shipped" },
  { n: "0", label: "Open source libs" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            About
            <br />
            Me.
          </h2>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <p>
            I am a python developer, yeah you wanna do something about that. Huh
            that's right you can't anything about that, now shut up.
          </p>
          <p>
            My background is pygame and my families background is also pygame,
            we were all pythons that were passionate of gaming. Our family
            history is so rich and filled with our love for games.
          </p>
          <p>
            Outside of work, I contribute to the growth of python species, write
            about how pythons will dominate the world, and enjoy a dinner with
            them.
          </p>
          <a href="#contact" className={styles.cta}>
            Work with me :) →
          </a>
        </div>
      </div>
    </section>
  );
}
