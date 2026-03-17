import styles from "./Footer.module.css";
import Image from "next/image"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image
              src="/images/logo-white-short.png"
              alt="Logo"
              width={100}
              height={40}
            />
          </div>

          <div className={styles.info}>
            <p>Tel: +52 81 1234 5678</p>
            <p>Monterrey, México</p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>© {year} FM Structure. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}