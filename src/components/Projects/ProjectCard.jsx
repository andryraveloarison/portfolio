import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p class="text-2xl">👀</p>
      </div>
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
  );
};
