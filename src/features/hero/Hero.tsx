import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero"  className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Construimos activos digitales
            para empresas que piensan
            en grande.
          </h1>

          <p className={styles.subtitle}>
            Diseño y desarrollo web estratégico.
            <br />
            Enfoque claro. Ejecución impecable.
          </p>

          <Link href="#contact" className={styles.button}>
            Agendar consultoría
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-pattern.png"
            alt="Ilustración de plataforma digital desarrollada por FM Structure"
            width={900}
            height={700}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}