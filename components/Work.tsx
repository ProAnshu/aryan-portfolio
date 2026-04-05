import styles from "./Work.module.css";

const jobs = [
  {
    n: "01",
    company: "HOME",
    role: "Senior Janitor",
    period: "2022 — Present",
    desc: "Leading the whole team of 1 to clean the home.",
    tags: ["Jhadu", "Pochha", "Balti", "Scrubber", "Sabun", "Harpic", "Brush"],
  },
  {
    n: "02",
    company: "HOME",
    role: "Janitor",
    period: "2020 — 2022",
    desc: "Got promoted to cleaning bartan",
    tags: ["Jhadu", "Pochha", "Balti", "Scrubber", "Sabun"],
  },
  {
    n: "03",
    company: "HOME",
    role: "Junior Janitor",
    period: "2018 — 2020",
    desc: "I like Jhadu",
    tags: ["Jhadu", "Pochha", "Balti"],
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Work
          <br />
          Experience.
        </h2>
        <div className={styles.list}>
          {jobs.map((job) => (
            <div key={job.n} className={styles.job}>
              <span className={styles.num}>{job.n}</span>
              <div className={styles.body}>
                <div className={styles.top}>
                  <span className={styles.company}>{job.company}</span>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <p className={styles.role}>{job.role}</p>
                <p className={styles.desc}>{job.desc}</p>
                <div className={styles.tags}>
                  {job.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
