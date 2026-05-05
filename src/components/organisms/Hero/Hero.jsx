import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import contacts from "../../../data/contacts.json";
import { gsap } from "gsap";

const TICKER_ITEMS = [
  "FULLSTACK DEVELOPER",
  "REACT · NODE · SPRING BOOT",
  "ANTANANARIVO, MADAGASCAR",
  "OPEN TO OPPORTUNITIES",
  "WEB · MOBILE · AI",
  "TYPESCRIPT · POSTGRESQL",
];

export const Hero = () => {
  const chapterRef = useRef(null);
  const nameRef = useRef(null);
  const yearRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const linksRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const delay = 0.1; // preloader is gone, small offset

    gsap.set([chapterRef.current, descRef.current, linksRef.current], {
      opacity: 0, y: 30
    });
    gsap.set(nameRef.current, { opacity: 0, y: 60 });
    gsap.set(yearRef.current, { opacity: 0, x: 40 });
    gsap.set(imgRef.current, { opacity: 0, y: 30 });

    const tl = gsap.timeline({ delay });

    tl.to(chapterRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .to(nameRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to(yearRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .to(imgRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.5")
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .to(linksRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
  }, []);

  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className={styles.container} id="hero">
      {/* Chapter label */}
      <div className={styles.chapterLabel} ref={chapterRef}>
        <span className={styles.chapterLine} />
        <span className={styles.chapterText}>
          CHAPTER 01 · ANTANANARIVO · FULLSTACK JS DEVELOPER
        </span>
      </div>

      {/* Main editorial grid */}
      <div className={styles.mainGrid}>
        {/* Left column */}
        <div className={styles.leftCol}>
          <div className={styles.nameWrap} ref={nameRef}>
            <h1 className={styles.bigName}>ANDRY</h1>
          </div>

          <div className={styles.descBlock} ref={descRef}>
            <p className={styles.description}>
              I am a <em>fullstack developer</em> passionate about crafting
              innovative, high-performance digital products.
              Specialised in web &amp; mobile with AI experience.
            </p>
            <div className={styles.links} ref={linksRef}>
              {contacts.map((c, i) => (
                <a key={i} href={c.source} target="_blank" rel="noreferrer"
                  className={styles.socialLink}>
                  <img src={getImageUrl(c.imageSrc)} alt={c.name} />
                  <span>{c.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.rightCol}>
          <div className={styles.yearLabel} ref={yearRef}>{currentYear}<span>年</span></div>
          <div className={styles.imgWrap} ref={imgRef}>
            <img
              src={getImageUrl("hero/pdc.png")}
              alt="Andry Raveloarison"
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {tickerContent.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDot}>●</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
