import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.chapterLabel}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>CHAPTER 03 · ABOUT ME</span>
      </div>

      <div className={styles.mainGrid}>
        {/* Left: text */}
        <div className={styles.leftCol}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            About<br /><em>Me.</em>
          </motion.h2>

          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p>
              I am <strong>Andry Raveloarison</strong>, a fullstack JavaScript
              developer based in Antananarivo, Madagascar. I build web and mobile
              applications with a strong focus on clean code, user experience,
              and performance.
            </p>
            <p>
              With experience spanning front-end React interfaces to Node.js
              back-ends and Spring Boot APIs, I bring a product-minded approach
              to every project.
            </p>
            <p>
              I am currently open to new opportunities, freelance or full-time,
              local or remote.
            </p>
          </motion.div>

          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Years of<br/>Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Projects<br/>Completed</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Internships<br/>Done</span>
            </div>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.imgFrame}>
            <img
              src={getImageUrl("about/image.jpeg")}
              alt="Andry Raveloarison"
              className={styles.aboutImg}
            />
            <div className={styles.imgCaption}>
              <span>WEB DEVELOPER · MADAGASCAR</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
