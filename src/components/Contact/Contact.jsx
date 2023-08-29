import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTitle}>Contact</div>
      <a className={styles.contactLink} href="mailto:trenton@sieb.net">Email Me</a>
    </div>
  );
};

export default Contact;
