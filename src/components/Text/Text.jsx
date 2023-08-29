import React from 'react';
import styles from './Text.module.css';
import useTextCycle from './useTextCycle';

const Text = ({ textArray, delay }) => {
  const currentText = useTextCycle(textArray, delay);

  return (
    <div className={styles.wrapper}>
      <div className={styles.textCycler}>
        <div className={styles.textCyclerContent}>
          {currentText}
        </div>
      </div>
    </div>
  );
};

export default Text;
