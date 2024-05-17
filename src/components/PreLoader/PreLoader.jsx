import React, { useRef, useLayoutEffect } from "react";
import styles from "./PreLoader.module.css";
import { gsap, Power3 } from 'gsap';

const PreLoader = () => {

  let preLoaderRef = useRef(null)
  let textsContainerRef = useRef(null)
  let devRef = useRef(null)
  let creatRef = useRef(null)
  let passRef = useRef(null)

  var tlDev = gsap.timeline({delay: 0.3});
  var tlCreate = gsap.timeline({delay: 0.6});
  var tlPass = gsap.timeline({delay: 0.9});


  useLayoutEffect(() => {
    gsap.to(preLoaderRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.from(devRef.current, {
      opacity: 1,
      y: 40,
      ease: Power3.easeIn,
    })

    gsap.from(creatRef.current, {
      opacity: 1,
      y: 39,
      ease: Power3.easeIn,
    })

    gsap.from(passRef.current, {
      opacity: 0,
      y: 40,
      ease: Power3.easeIn,
    })

    tlDev.to(devRef.current, {
      opacity: 1,
      y:0,
      ease: Power3.easeOut,
      duration: 1,
    })


    tlCreate.to(creatRef.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });

    tlPass.to(passRef.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });



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