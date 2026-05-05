import React from "react";
import styles from "./Skills.module.css";
import skills from "../../../data/skills.json";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";

const CATEGORIES = ["front-end", "back-end", "other"];
const CATEGORY_LABELS = {
  "front-end": "Front-end",
  "back-end": "Back-end",
  "other": "Tools & Other",
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.chapterLabel}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>CHAPTER 05 · SKILLS</span>
      </div>

      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Skills</h2>
      </div>

      <div className={styles.categoriesGrid}>
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat}
            className={styles.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: ci * 0.1 }}
          >
            <div className={styles.catHeader}>
              <span className={styles.catNum}>0{ci + 1}</span>
              <h3 className={styles.catTitle}>{CATEGORY_LABELS[cat]}</h3>
            </div>
            <div className={styles.skillGrid}>
              {skills
                .filter(s => s.category === cat)
                .map((skill, si) => (
                  <div key={si} className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <span className={styles.skillName}>{skill.title}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
