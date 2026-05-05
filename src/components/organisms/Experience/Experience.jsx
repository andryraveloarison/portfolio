import React from "react";
import styles from "./Experience.module.css";
import experiences from "../../../data/experiences.json";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className={styles.container} id="experiences">
      <div className={styles.chapterLabel}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>CHAPTER 04 · EXPERIENCE</span>
      </div>

      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Experience</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, id) => (
          <motion.div
            key={id}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: id * 0.12, ease: "easeOut" }}
          >
            <div className={styles.timelineLeft}>
              <span className={styles.expNum}>0{id + 1}</span>
              <span className={styles.expDate}>{exp.date}</span>
            </div>

            <div className={styles.timelineSep}>
              <div className={styles.dot} />
              <div className={styles.line} />
            </div>

            <div className={styles.timelineRight}>
              <h3 className={styles.expTitle}>{exp.title}</h3>
              <p className={styles.expContent}>{exp.contents}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
