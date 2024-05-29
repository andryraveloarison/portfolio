import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../../utils.js";
import contacts from "../../../data/contacts.json";
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



      <ul className={styles.links}>

        {
          contacts.map((contact, id) => {
            return(
              <li key={id} className={styles.link}>
                <img src={getImageUrl(contact.imageSrc)} alt="Email icon" className={styles.image}/>
                <a href={contact.source} target="_blank">{contact.name}</a>
              </li>
            )
          })
        }

      </ul>

      <section className={styles.timelineSection}>
        <div className={styles.timelineItems}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2015</div>
            <div className={styles.timelineContent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
    
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2015</div>
            <div className={styles.timelineContent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2015</div>
            <div className={styles.timelineContent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>      

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2015</div>
            <div className={styles.timelineContent}>
              <h3>timeline item title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div> 
          
        </div>
      </section>
    </footer>
  );
};
