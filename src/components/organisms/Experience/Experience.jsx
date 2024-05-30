import React from "react";
import styles from "./Experience.module.css";
import experiences from "../../../data/experiences.json";
import { useRef } from "react";
import Word from "../../atoms/Word/Word.jsx";
import { useScroll } from "framer-motion";


export const Experience = () => {

  const title = "MY EXPERIENCE "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")

  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title} ref={titleRef}> 
          {
            words.map((word,i)=>{
              const start = i / words.length
              return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
            })
          }
        </h2>
      </div>



      <section className={styles.timelineSection}>
        <div className={styles.timelineItems}>

      {
          experiences.map((experience, id) => {
            return(
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineDate}>{experience.date}</div>
                <div className={styles.timelineContent}>
                  <h3>{experience.title}</h3>
                  <p> {experience.contents} </p>
                </div>
              </div>
            )
          })
        }
          
        </div>
      </section>
    </footer>
  );
};
