import React from 'react';
import styles from './Header.module.css';
import Text from '../Text/Text';

const Header = ({ textArray, delay }) => {
  return (
    <div className={styles.header}>
      <Text textArray={textArray} delay={delay} />
    </div>
  );
};

export default Header;
