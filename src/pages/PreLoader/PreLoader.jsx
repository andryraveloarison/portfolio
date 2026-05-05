import { useEffect, useRef } from "react";
import styles from "./PreLoader.module.css";
import { gsap } from "gsap";

const NAME1 = "ANDRY".split("");
const NAME2 = "RAVELOARISON".split("");

const PreLoader = ({ onComplete }) => {
  const lettersRef = useRef([]);
  const letters2Ref = useRef([]);
  const counterRef = useRef(null);
  const progressFillRef = useRef(null);
  const topBarRef = useRef(null);
  const bottomBarRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    // Initial states
    gsap.set(lettersRef.current, { y: 110, opacity: 0 });
    gsap.set(letters2Ref.current, { y: 40, opacity: 0 });
    gsap.set(topBarRef.current, { opacity: 0 });
    gsap.set(bottomBarRef.current, { opacity: 0 });
    gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(progressFillRef.current, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    });

    // Top/bottom bars fade in
    tl.to([topBarRef.current, bottomBarRef.current], {
      opacity: 1, duration: 0.5, ease: "power2.out"
    });

    // Big letters stagger in
    tl.to(lettersRef.current, {
      y: 0, opacity: 1,
      duration: 0.9,
      stagger: 0.07,
      ease: "power4.out"
    }, "-=0.2");

    // Subtitle letters
    tl.to(letters2Ref.current, {
      y: 0, opacity: 1,
      duration: 0.6,
      stagger: 0.03,
      ease: "power3.out"
    }, "-=0.5");

    // Divider line draws
    tl.to(dividerRef.current, {
      scaleX: 1, duration: 1,
      ease: "power3.inOut"
    }, "-=0.7");

    // Counter + progress
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 2.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            String(Math.floor(counter.val)).padStart(3, "0");
        }
      }
    });

    gsap.to(progressFillRef.current, {
      scaleX: 1, duration: 2.6, ease: "power2.inOut"
    });

  }, []);

  return (
    <div className={styles.preloader}>
      {/* Top bar */}
      <div className={styles.topBar} ref={topBarRef}>
        <span className={styles.label}>— PORTFOLIO · 2024</span>
        <span className={styles.label}>ANDRY RAVELOARISON</span>
      </div>

      {/* Center content */}
      <div className={styles.center}>
        <div className={styles.nameRow}>
          {NAME1.map((letter, i) => (
            <span
              key={i}
              className={styles.bigLetter}
              ref={el => lettersRef.current[i] = el}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className={styles.divider} ref={dividerRef} />

        <div className={styles.nameRow2}>
          {NAME2.map((letter, i) => (
            <span
              key={i}
              className={styles.subLetter}
              ref={el => letters2Ref.current[i] = el}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar} ref={bottomBarRef}>
        <span className={styles.tagline}>
          FULLSTACK DEVELOPER · CREATOR · PASSIONATE
        </span>
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} ref={progressFillRef} />
          </div>
          <span className={styles.counter} ref={counterRef}>000</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
