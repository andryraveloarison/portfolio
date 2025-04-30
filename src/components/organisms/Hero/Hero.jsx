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
  

  useLayoutEffect(() => {
    animateHero(helloRef, titleRef, descriptionRef, linkRef);
  }, []);

  return (
    <>
    <section className={styles.container}>
  <div className={styles.backgroundText}>
    ANDRY RAVELOARISON
    </div>

  <img
    src={getImageUrl("hero/profile2.png")}
    alt="Hero image of me"
    className={styles.heroImg}
  />

</section>


<div className={styles.content}>

<p className={styles.description} ref={descriptionRef}>
  <span className={styles.job}># Web developer</span>
  <span className={styles.job}># Mobile developer</span>
  <span className={styles.job}># Data analyste</span>
</p>
<ul className={styles.links} ref={linkRef}>
  {contacts.map((contact, id) => (
    <li key={id} className={styles.link}>
      <a href={contact.source} target="_blank">
        <img
          src={getImageUrl(contact.imageSrc)}
          alt="Email icon"
          className={styles.image}
        />
      </a>
    </li>
  ))}
</ul>
</div>

</>


  );
};
