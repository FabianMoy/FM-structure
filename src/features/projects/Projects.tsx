import Image from "next/image"
import styles from "./Projects.module.css"
import {projects} from "@/data"

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <span className={styles.line}></span>
          <h2>Proyectos</h2>
        <span className={styles.line}></span>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}