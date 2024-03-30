import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        <div  className={styles.skill}>
          <h1 className={styles.skillTitle}>Front-end</h1>
            {skills.map((skill, id) => {
              if(skill.category == "front-end"){
                return(
                  <div className={styles.skillInfo}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              } 
            })}
        </div>

        <div  className={styles.skill}>
          <h1 className={styles.skillTitle}>Back-end</h1>
          {skills.map((skill, id) => {
              if(skill.category == "back-end"){
                return(
                  <div className={styles.skillInfo}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              } 
            })}
        </div>

        <div  className={styles.skill}>
          <h1 className={styles.skillTitle}>Other</h1>
          {skills.map((skill, id) => {
              if(skill.category == "other"){
                return(
                  <div className={styles.skillInfo}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              } 
            })}
        </div>


        </div>
      </div>
    </section>
  );
};
