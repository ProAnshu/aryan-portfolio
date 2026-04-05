import styles from "./Nav.module.css";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        AR
      </Link>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/resume.pdf"
        className={styles.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé ↗
      </a>
    </nav>
  );
}
