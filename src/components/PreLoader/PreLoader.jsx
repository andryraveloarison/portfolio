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
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  const animateCreat = () => {

 
    gsap.to(creatRef.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  const animatePass = () => {  
    alert('transform')
    gsap.to(passRef.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });
  };

  const initialise= () => {

    gsap.from(devRef.current, {
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.from(creatRef.current, {
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      duration: 1,
    });
    
    gsap.from(passRef.current, {
      opacity: 0,
      y: 40,
      ease: Power3.easeOut,
      duration: 1,
    });
  }
  useEffect(() => {

    initialise()
    // Animate elements sequentially
    setTimeout(() => {
      alert('test')
      animatePass()
    }, 2000);
    //setTimeout(animateDev, 300); // Delayed by 0.3 seconds
    //setTimeout(animateCreat, 600); // Delayed by 0.6 seconds
    //setTimeout(animatePass, 900); // Delayed by 0.9 seconds
  }, []);

  return (
    <div className={styles.preloader} ref={preLoaderRef}>
      <div className={styles.textsContainer} ref={textsContainerRef}>
        <span ref={devRef}>Developer,</span>
        <span ref={creatRef}>Creator,</span>
        <span ref={passRef}>Passionate.</span>
      </div>
    </div>
  );
};

export default PreLoader;
