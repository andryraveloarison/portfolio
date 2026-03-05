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
          <span>💡 Première ESN franco-malgache en 2025</span>
        </div>
        <h1 className={styles.title} ref={titleRef}>
          A propos de <span className={styles.highlight}>Fluentech</span>
        </h1>
        <p className={styles.description} ref={descriptionRef}>
          Une équipe <strong>franco-malgache</strong> qui accompagne les entreprises dans la <strong>conception</strong> et le <strong>développement</strong> de produits digitaux d'excellence, transparence et
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
