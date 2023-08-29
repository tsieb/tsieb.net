import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListGroup.module.css';

const ListItem = ({ item, isSelected, onClick }) => {
  const listItemClass = isSelected ? styles.listItemSelected : styles.listItemUnselected;

  return (
    <li className={`${styles.listItem} ${listItemClass}`} onClick={onClick}>
      {item}
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
