import styles from "./Projects.module.css";

const projects = [
  {
    name: "Snake Game :)",
    year: "2025",
    desc: "You really need a description for the Nokia snake game, shame on you",
    tags: ["Python", "Pygame", "Open Source"],
    github: "https://github.com/scienmanas/Nokia-Snake-Game",
    demo: null,
    stars: "1.2k ★",
  },
  {
    name: "Snake Game AI",
    year: "2025",
    desc: "Sadly didn't work",
    tags: ["Python", "Pygame", "AI"],
    github: "https://github.com/AvinashReddy3108/YetAnotherSMSBomber",
    demo: null,
    stars: "834 ★",
  },
  {
    name: "Skydivers",
    year: "2026",
    desc: "You gotta shoot the aliens, not the survivors. You stupid!",
    tags: ["Python", "Pygame"],
    github: "https://github.com/adeemm/WinAPI-Fun",
    demo: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
    stars: "562 ★",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Selected
          <br />
          Projects.
        </h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.year}>{p.year}</span>
                <span className={styles.stars}>{p.stars}</span>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub ↗
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
