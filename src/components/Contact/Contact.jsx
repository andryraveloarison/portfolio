import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contacts from "../../data/contacts.json";
import line from "/line.gif"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to contact me by email or through my social networks.</p>
      </div>
      <ul className={styles.links}>

        {
          contacts.map((contact) => {
            return(
              <li className={styles.link}>
                <img src={getImageUrl(contact.imageSrc)} alt="Email icon" className={styles.image}/>
                <a href={contact.source}>{contact.name}</a>
              </li>
            )
          })
        }

      </ul>

      <img src={line} className={styles.line}/>
      <div className={styles.footer}>
        <p>Designed and built by Andry </p>
        <p>©Copyright 2024 - Andry RAVELOARISON</p>
      </div>
    </footer>
  );
};
