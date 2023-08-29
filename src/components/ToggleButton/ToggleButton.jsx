import PropTypes from 'prop-types';
import React from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = ({ isOpen, toggleFunc, label, className, iconSrc, ...rest }) => (
  <div className={`${styles.toggleParent} ${className}`} onClick={toggleFunc} {...rest}>
    <button className={styles.sectionToggle}>{label}</button>
    {iconSrc && <img className={`${styles.invert} ${isOpen ? '' : styles.rotate}`} src={iconSrc} alt="Toggle Icon" style={{ height: '15px' }} />}
  </div>
);

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleFunc: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconSrc: PropTypes.string,
};

ToggleButton.defaultProps = {
  className: '',
  iconSrc: 'images/dropdown.png',
};

export default ToggleButton;
