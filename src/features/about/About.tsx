import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.decorativeLine} />

        <h2 className={styles.title}>
          Tu proyecto merece <span className={styles.highlight}>claridad</span>.
        </h2>

        <div className={styles.content}>
          <p>
            Trabajamos cada proyecto con responsabilidad y cuidado,
            porque entendemos que no es solo una página:
            es una herramienta que representa tu trabajo.
          </p>

          <p>
            Creamos experiencias digitales simples, funcionales y bien pensadas.
            Desarrolladas con tecnologías actuales y estándares modernos,
            para que funcionen hoy y sigan funcionando mañana.
          </p>
        </div>

      </div>
    </section>
  );
}