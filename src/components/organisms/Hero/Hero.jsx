import React, { useLayoutEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { animateHero } from "../../../animations";

export const Hero = () => {
  const helloRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);
  const bgTextRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    animateHero(helloRef, titleRef, descriptionRef, linkRef, bgTextRef, imageRef);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.badge}>
          <span>💡 Passionate Developer</span>
        </div>
        <h1 className={styles.title} ref={titleRef}>
          Fullstack JS <span className={styles.highlight}>Developer</span>
        </h1>
        <p className={styles.description} ref={descriptionRef}>
          I am a <strong>fullstack developer</strong> passionate about creating innovative and high-performance digital products. I specialize in web and mobile development, and I am also experienced in artificial intelligence.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.backgroundText} ref={bgTextRef}>ANDRY</div>
        <img
          src={getImageUrl("hero/pdc.png")}
          alt="Andry Raveloarison"
          className={styles.heroImg}
          ref={imageRef}
        />
      </div>

      <div className={styles.linksContainer}>
        <ul className={styles.links} ref={linkRef}>
          {contacts.map((contact, id) => (
            <li key={id} className={styles.link}>
              <a href={contact.source} target="_blank" rel="noreferrer">
                <img
                  src={getImageUrl(contact.imageSrc)}
                  alt={contact.name}
                  className={styles.image}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
