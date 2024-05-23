import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useRef } from "react";


export const About = () => {

  const constraintsRef = useRef(null);

  const handleMouseDown = () => {
    document.body.style.cursor = 'grabbing';
  };

  // Fonction pour restaurer le curseur normal
  const handleMouseUp = () => {
    document.body.style.cursor = '';
  };

  return (
    <section className={styles.container} id="about">
      
      <h2 className={styles.title}>About</h2>
      <motion.div className={styles.containerMotion} ref={constraintsRef}>
      <div className={styles.content}>
          <motion.div className={styles.itemMotion} drag dragConstraints={constraintsRef} 
          >               
              <img src={getImageUrl("about/aboutImage.png")}
                  alt="Me sitting with a laptop"
                  className={styles.aboutImage}
                  style={{ pointerEvents: 'none' }} // Ajoutez cette ligne
                />
          </motion.div>
        <div>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
        </div>

      </div>
      </motion.div>

    </section>
  );
};
