import React, { useRef, useEffect } from "react";
import styles from "./PreLoader.module.css";
import { animatePreloader } from '../../animations'; // Importation des fonctions

const PreLoader = () => {
  const devRef = useRef(null);
  const creatRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    animatePreloader(devRef,creatRef,passRef)
  }, []);

  return (
    <div className={styles.preLoaderRef}>
      <div className={styles.textsContainer}>
        <span className={styles.span} ref={devRef}>Developer,</span>
        <span className={styles.span} ref={creatRef}>Creator,</span>
        <span className={styles.span} ref={passRef}>Passionate.</span>
      </div>
    </div> 
  );
};

export default PreLoader;
