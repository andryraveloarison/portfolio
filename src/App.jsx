import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import PreLoader from "./components/PreLoader/PreLoader";
import { useState, useEffect } from "react";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return (
    <div className={styles.App}>
      {
        isLoading ? 
        <PreLoader/> 
        :
        <>
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </>
    }

    </div>
  );
}

export default App;
