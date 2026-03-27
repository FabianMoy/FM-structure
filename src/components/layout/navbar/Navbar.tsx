import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image"
import {navLinks} from '@/data'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo-white.png"
          alt="Umbra Studio logo"
          width={120}
          height={60}
        />
      </Link>

        <nav className={styles.links} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#" className={styles.cta}>
          Contactar
        </Link>
      </div>
    </header>
  );
}