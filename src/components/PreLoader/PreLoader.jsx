import React, { useRef, useEffect } from "react";
import styles from "./PreLoader.module.css";
import {gsap, Power3} from "gsap";
const PreLoader = () => {
  const preLoaderRef = useRef(null);
  const textsContainerRef = useRef(null);
  const devRef = useRef(null);
  const creatRef = useRef(null);
  const passRef = useRef(null);

  // Define animation functions
  const animateDev = () => {

    gsap.to(devRef.current, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  const animateCreat = () => {

 
    gsap.to(creatRef.current, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  const animatePass = () => {  
    gsap.to(passRef.current, {
      opacity: 1,
      y: -40,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      animateDev()
    }, 300);

    setTimeout(() => {
      animateCreat()
    }, 600);

    setTimeout(() => {
      animatePass()
    }, 900);
    
}, []);

  return (
    <div className={styles.preloader} ref={preLoaderRef}>
      <div className={styles.textsContainer} ref={textsContainerRef}>
        <span className={styles.span} ref={devRef}>Developer,</span>
        <span className={styles.span} ref={creatRef}>Creator,</span>
        <span className={styles.span} ref={passRef}>Passionate.</span>
      </div>
    </div> 
  );
};

export default PreLoader;
