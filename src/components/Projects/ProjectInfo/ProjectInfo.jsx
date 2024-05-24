import React, { useEffect } from "react";
import styles from "./ProjectInfo.module.css";
import projects from "../../../data/projects.json";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";


export const Projects = () => {
  const title = "All my porject "
  const titleRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: titleRef,
    offset:['start end','start 0.25']
  })

  const words = title.split(" ")
  
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title} ref={titleRef}>
        {
          words.map((word,i)=>{
            const start = i / words.length
            const end = i + (1/words.length)
            return <Word key={i} range={[start, 1]} progress ={scrollYProgress}>{word}</Word>
          })
        }
        </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};



const Word = ({children, range, progress})=>{
  const opacity = useTransform(progress, range, [0,1])
  return (
      <span className={styles.word} >
        <span className={styles.shadow}> {children}</span>
        <motion.span style={{opacity}}>
          {children}
        </motion.span>
      </span>

  )
}