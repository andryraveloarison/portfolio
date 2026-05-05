import styles from "./App.module.css";
import PreLoader from "./pages/PreLoader/PreLoader.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import Home from "./pages/Home/Home.jsx";
import { Navbar } from "./components/organisms/Navbar/Navbar.jsx";

function App() {
  const preLoaderRef = useRef(null);

  const handlePreloaderComplete = () => {
    gsap.to(preLoaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        if (preLoaderRef.current) {
          preLoaderRef.current.style.display = "none";
        }
      }
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.preloader} ref={preLoaderRef}>
        <PreLoader onComplete={handlePreloaderComplete} />
      </div>
      <Navbar />
      <div className="homepageContent">
        <Home />
      </div>
    </div>
  );
}

export default App;
