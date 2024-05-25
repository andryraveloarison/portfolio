import styles from "./Home.module.css";
import { Contact } from "../../components/organisms/Contact/Contact.jsx";
import { Skills } from "../../components/organisms/Skills/Skills.jsx";
import { Hero } from "../../components/organisms/Hero/Hero.jsx";
import { Navbar } from "../../components/organisms/Navbar/Navbar.jsx";
import { Projects } from "../../components/organisms/Projects/ProjectInfo/ProjectInfo.jsx";
import {About} from "../../components/organisms/About/About.jsx"

function Home() {

  return (
    <div className={styles.Home}>
          <Navbar />
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
    </div>
  );
}

export default Home;
