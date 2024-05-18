import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../../utils";
import { useRef } from "react";
import {gsap, Power3} from "gsap";

export const ProjectCard = ({
  project: { title, description, skills, imageSrc},
}) => {

  let imageRef = useRef(null)

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.3,
    
    });      
  })

  const onMouseEnterHandler = ()=> {
    gsap.to(imageRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 1,
    }); 
  }

  const onMouseLeaveHandler = ()=> {
    gsap.to(imageRef.current, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 1,
    }); 
  }

  return (
    <div className={styles.container} 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}> {/* Corrected here */}

      <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
      </div>
      <div ref={imageRef} style={{opacity:0}}>
  
        <img
          src={getImageUrl(imageSrc)}
          alt="Hero image of me"
        />
      </div>
    </div>
  );
};
