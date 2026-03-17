import styles from "./Services.module.css";
import {services} from '@/data'

export default function Services() {
  return (
    <section id='services' className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.line}></span>
          <h2>Servicios</h2>
          <span className={styles.line}></span>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}