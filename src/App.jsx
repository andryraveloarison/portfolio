import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import PreLoader from "./components/PreLoader/PreLoader";
import { useRef, useEffect } from "react";
import {gsap, Power3} from "gsap";


function App() {
  const preLoaderRef = useRef(null);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        gsap.to(preLoaderRef.current, {
          opacity: 0.9,
          y: 900,
          ease: Power3.easeOut,
          duration: 3,
        });      

      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return (
    <div className={styles.App}>

          <div className={styles.preloader} ref={preLoaderRef} >
            <PreLoader />  
          </div>
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />

    </div>
  );
}

export default App;
