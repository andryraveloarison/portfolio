import React, { useLayoutEffect, useRef } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { animateHero } from "../../../animations";

export const Hero = () => {

  let helloRef = useRef(null)
  let titleRef = useRef(null)
  let descriptionRef = useRef(null)
  let linkRef = useRef(null)

  useLayoutEffect(() => {

    animateHero(helloRef,titleRef,descriptionRef,linkRef)

  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.hello} ref={helloRef}>Hello world, I'm -</h2>
        <h1 className={styles.title} ref={titleRef}>Andry RAVELOARISON</h1>
        <p className={styles.description} ref={descriptionRef}>
          <span className={styles.job}>Web developer. </span> 
          <span> I build things for web</span>
        </p>
        <ul className={styles.links} ref={linkRef}>
          {
            contacts.map((contact, id) => {
              return(
                <li key={id} className={styles.link}>
                  <a href={contact.source} target="_blank">
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
