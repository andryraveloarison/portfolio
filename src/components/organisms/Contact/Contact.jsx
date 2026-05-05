import React from "react";
import styles from "./Contact.module.css";
import contacts from "../../../data/contacts.json";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.chapterLabel}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>CHAPTER 06 · GET IN TOUCH</span>
      </div>

      <div className={styles.mainContent}>
        <motion.h2
          className={styles.bigCta}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Let's work<br /><em>together.</em>
        </motion.h2>

        <motion.div
          className={styles.rightBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className={styles.contactText}>
            Feel free to reach out via email or connect on social media.
            I'm always open to discussing new projects and opportunities.
          </p>

          <div className={styles.contactLinks}>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.source}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <img src={getImageUrl(c.imageSrc)} alt={c.name} />
                <span>{c.name}</span>
                <span className={styles.arrow}>↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer bottom bar */}
      <div className={styles.footerBar}>
        <span className={styles.footerLeft}>
          © {new Date().getFullYear()} — ANDRY RAVELOARISON
        </span>
        <span className={styles.footerRight}>
          DESIGNED &amp; BUILT BY ANDRY
        </span>
      </div>
    </footer>
  );
};
