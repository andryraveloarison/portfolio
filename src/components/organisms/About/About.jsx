import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";


export const About = () => {

  const constraintsRef = useRef(null);

  const title = "ABOUT ME "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")

  const handleMouseDown = () => {
    document.body.style.cursor = 'grabbing';
  };

  // Fonction pour restaurer le curseur normal
  const handleMouseUp = () => {
    document.body.style.cursor = '';
  };

  return (
    <section className={styles.container} id="about">
      
      <h2 className={styles.title} ref={titleRef}> 
        {
          words.map((word,i)=>{
            const start = i / words.length
            return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
          })
        }
      </h2>
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

        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h1 >Web Developer</h1>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>

        </div>
        </div>

      </div>
      </motion.div>

    </section>
  );
};
