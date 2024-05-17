import React, { useRef, useLayoutEffect } from "react";
import styles from "./PreLoader.module.css";
import { gsap, Power3 } from 'gsap';

const PreLoader = () => {

  let preLoaderRef = useRef(null)
  let textsContainerRef = useRef(null)
  let spanRef1 = useRef(null)
  let spanRef2 = useRef(null)
  let spanRef3 = useRef(null)

  var tl1 = gsap.timeline({delay: 0.4});
  var tl2 = gsap.timeline({delay: 0.7});
  var tl3 = gsap.timeline({delay: 1});


  useLayoutEffect(() => {
    gsap.to(preLoaderRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 1,
    });

    gsap.from(spanRef1.current, {
      opacity: 0,
      y: 20,
      ease: Power3.easeIn,
    })

    /*gsap.from(spanRef2.current, {
      opacity: 1,
      y: 40,
      ease: Power3.easeIn,
    })

    gsap.from(spanRef3.current, {
      opacity: 1,
      y: 40,
      ease: Power3.easeIn,
    })
*/

    gsap.to(spanRef1.current, {
      opacity: 1,
      y:0,
      ease: Power3.easeOut,
      duration: 1,
    })

/*

    tl2.to(spanRef2.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });

    tl3.to(spanRef3.current, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      duration: 1,
    });
*/
    gsap.to(textsContainerRef.current, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 1,
    });



  }, []);


  
  return (
    <div className={styles.preloader} ref={preLoaderRef}>
      <div className={styles.textsContainer} ref={textsContainerRef}>
        <span ref={spanRef1}>Developer,</span>
        <span ref={spanRef2}>Creator,</span>
        <span ref={spanRef3}>Passionate.</span>
      </div>
    </div>
  );
};

export default PreLoader;