import PropTypes from 'prop-types';
import React from 'react';
import styles from './ToggleButton.module.css';

const getImageStyles = (isOpen) => ({
  height: '15px', 
  marginLeft: '10px',
  transition: 'transform 0.3s ease-in-out',
  transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
});

const ToggleButton = ({ isOpen, toggleFunc, label, className, iconSrc, ...rest }) => (
  <div className={styles.toggleParent} {...rest}>
    <button className={`${styles.sectionToggle} ${className}`} onClick={toggleFunc}>
      {label}
      {iconSrc && (
        <img 
          className={styles.invert}
          src={iconSrc} 
          alt="Toggle Icon" 
          style={getImageStyles(isOpen)}
        />
      )}
    </button>
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
