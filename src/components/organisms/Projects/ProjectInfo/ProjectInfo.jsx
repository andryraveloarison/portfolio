import React from "react";
import styles from "./ProjectInfo.module.css";
import projects from "../../../../data/projects.json";
import { getImageUrl } from "../../../../utils";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      {/* Chapter label */}
      <div className={styles.chapterLabel}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>CHAPTER 02 · SELECTED WORK</span>
      </div>

      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Projects</h2>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, id) => (
          <motion.div
            key={id}
            className={styles.projectRow}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: id * 0.1, ease: "easeOut" }}
          >
            <div className={styles.projectTop}>
              <span className={styles.projectNum}>{project.index}</span>
              <h3 className={styles.projectName}>{project.title}</h3>
              <span className={styles.projectDate}>{project.date}</span>
              <div className={styles.projectLinks}>
                <a href={project.source} target="_blank" rel="noreferrer" className={styles.projectLink}>
                  Source ↗
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className={styles.projectLink}>
                  Demo ↗
                </a>
              </div>
            </div>

            <div className={styles.projectBottom}>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.techList}>
                {project.skills.map((skill, si) => (
                  <span key={si} className={styles.techTag}>{skill}</span>
                ))}
              </div>
            </div>

            <div className={styles.projectDivider} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
