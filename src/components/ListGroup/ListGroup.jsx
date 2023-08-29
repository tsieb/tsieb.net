import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './ListGroup.module.css';

const ImageItem = ({ src, isSelected, onClick }) => (
  <img
    src={src}
    className={isSelected ? styles.listImageSelected : styles.listImageUnselected}
    onClick={onClick}
  />
);

const ListGroup = ({ lists, selected, setSelected }) => {
  const [activeListIndex, setActiveListIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const updateSelectedIndex = useCallback(() => {
    if (activeListIndex !== null) {
      const activeItems = lists[activeListIndex].items;
      const index = activeItems.findIndex(item => item === selected);
      setSelectedIndex(index);
    }
  }, [selected, activeListIndex, lists]);

  useEffect(() => {
    updateSelectedIndex();
  }, [updateSelectedIndex]);

  const renderedLists = useMemo(() => {
    return lists.map((list, index) => (
      <div key={`list-${index}`} onClick={() => setActiveListIndex(index)}>
        <h3>{list.title}</h3>
        <ul>
          {list.items.map((item, i) => (
            <ListItem
              key={`item-${i}`}
              item={item}
              isSelected={selected === item}
              onClick={() => setSelected(selected === item ? null : item)}
            />
          ))}
        </ul>
        {activeListIndex === index && list.images.map((image, i) => (
          <ImageItem
            key={`image-${i}`}
            src={image}
            isSelected={selectedIndex === i}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
    ));
  }, [lists, activeListIndex, selected, selectedIndex]);

  return (
    <div className={styles.listContainer}>
      {renderedLists}
    </div>
  );
};

ListGroup.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

export default ListGroup;
