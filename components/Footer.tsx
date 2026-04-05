import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>AR.</span>
      <span>© {new Date().getFullYear()} Aryan Raj. Built with Next.js.</span>
      <a href="#" className={styles.top}>
        Back to top ↑
      </a>
    </footer>
  );
}
