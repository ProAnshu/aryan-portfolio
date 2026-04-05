import styles from "./Contact.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  {
    label: "Twitter / X",
    href: "https://x.com/DailyLoud/status/2040645344732574122",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>— Let's build something</p>
        <h2 className={styles.heading}>
          Got a project?
          <br />
          Let's talk.
        </h2>
        <a href="mailto:aryan@aryanraj.com" className={styles.email}>
          aryan@aryanraj.com
        </a>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
