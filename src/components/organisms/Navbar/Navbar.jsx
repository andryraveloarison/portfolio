import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experiences" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <a href="/" className={styles.logo}>AR</a>

        <div className={styles.desktopLinks}>
          {navLinks.map((l, i) => (
            <a key={i} href={l.href} className={styles.navLink}>{l.label}</a>
          ))}
        </div>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <div className={styles.overlayInner}>
          {navLinks.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={styles.overlayLink}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className={styles.overlayNum}>0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>
        <div className={styles.overlayFooter}>
          <span>ANDRY RAVELOARISON · FULLSTACK JS DEVELOPER</span>
        </div>
      </div>
    </>
  );
};
