import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListGroup.module.css';

const ImageItem = ({ src, isSelected, onClick }) => (
  <img
    src={src}
    className={isSelected ? styles.listImageSelected : styles.listImageUnselected}
    onClick={onClick}
  />
);

ImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ImageItem;
