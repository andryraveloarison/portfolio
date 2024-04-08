import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import contacts from "../../data/contacts.json";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.hello}>Hello word, I'm -</h2>
        <h1 className={styles.title}>Andry RAVELOARISON</h1>
        <p className={styles.description}>
          <span className={styles.job}>Web developer. </span> 
          <span> I build things for web</span>
        </p>
        <ul className={styles.links}>
          {
            contacts.map((contact) => {
              return(
                <li className={styles.link}>
                  
                  <a href={contact.source}>
                    <img src={getImageUrl(contact.imageSrc)} alt="Email icon" href={contact.source} className={styles.image}/>
                  </a>
                </li>
              )
            })
          }
          </ul>
      </div>
      <img
        src={getImageUrl("hero/profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
