import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";
import { useMenuAnimation } from "../../../animations/navMenuAnimation";

export const Navbar = () => {
  const { openMenu, closeMenu, isAnimating } = useMenuAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    if (isAnimating.current) return;
    if (menuOpen) closeMenu();
    else openMenu();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <a className={styles.title} href="/">
          {menuOpen ? "Andry" : scrolled ? "Portfolio" : ""}
        </a>
        <div className={styles.menu}>


          <div
            className={`${styles.navToggle} ${scrolled ? styles.fadeIn : styles.fadeOut
              }`}
            onClick={handleToggle}
          >
            <p>{menuOpen ? "Close" : "Menu"}</p>
          </div>
        </div>
      </nav>

      {/* Full screen overlay */}
      <div className={`nav-menu-overlay ${styles.menuOverlay}`}>
        <div className={`nav-menu-content ${styles.menuContent}`}>
          <div className={styles.menuItems}>
            <div className={`nav-menu-link ${styles.menuLink}`} onClick={handleToggle}>
              <a href="#projects">Projects</a>
            </div>
            <div className={`nav-menu-link ${styles.menuLink}`} onClick={handleToggle}>
              <a href="#about">About</a>
            </div>
            <div className={`nav-menu-link ${styles.navMenuLink} ${styles.menuLink}`} onClick={handleToggle}>
              <a href="#experiences">Experiences</a>
            </div>
            <div className={`nav-menu-link ${styles.menuLink}`} onClick={handleToggle}>
              <a href="#skills">Skills</a>
            </div>
            <div className={`nav-menu-link ${styles.menuLink}`} onClick={handleToggle}>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
