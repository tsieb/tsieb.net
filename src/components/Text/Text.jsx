import React from 'react';
import styles from './Text.module.css';
import useTextCycle from './useTextCycle';

const Text = ({ textArray }) => {
  const currentText = useTextCycle(textArray, 50, 1000, 50, 1000); // Delay timings
  const maxLength = textArray.reduce((max, str) => Math.max(max, str.length), 0);

  // Calculate dynamic right margin
  const marginRight = ((maxLength - currentText.length) / 2) + "ch";

  return (
    <div className={`${styles.wrapper} ${styles.fixedToTop}`}>
      <div className={styles.textCycler}>
        <div className={styles.textCyclerContent} style={{ marginRight }}>
          {currentText}<span className={styles.cursor}>|</span>
        </div>
      </div>
    </div>
  );
};

export default Text;
