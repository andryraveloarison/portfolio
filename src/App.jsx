import styles from "./App.module.css";
import PreLoader from "./pages/PreLoader/PreLoader.jsx"
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import Home from "./pages/Home/Home.jsx"
import { Navbar } from "./components/organisms/Navbar/Navbar.jsx";

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
          zIndex: -1
        });

      }, 2500);
    };

    fakeDataFetch();
  }, []);

  return (
    <div className={styles.App}>

      <div className={styles.preloader} ref={preLoaderRef} >
        <PreLoader />
      </div>
      <Navbar />
      <div className="homepageContent">
        <Home />
      </div>
    </div>
  );
}

export default App;
