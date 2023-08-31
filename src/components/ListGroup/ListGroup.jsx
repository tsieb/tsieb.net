import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ImageItem from './ImageItem';
import styles from './ListGroup.module.css';

const renderList = (list, index, selected, setSelected, activeListIndex, activeImageURL) => (
  <div key={`list-${index}`} className={styles.listIndividual}>
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
    {activeListIndex === index && activeImageURL && (
      <div className={styles.imageContainer}>
        <ImageItem
          src={activeImageURL}
          isSelected={true}
        />
      </div>
    )}
  </div>
);



const ListGroup = ({ lists, selected, setSelected }) => {
  const activeListIndex = lists.findIndex(list => list.items.includes(selected));
  const activeImageURL = activeListIndex !== -1 ? lists[activeListIndex].images[lists[activeListIndex].items.indexOf(selected)] : null;

  return (
    <div className={styles.listContainer}>
      {lists.map((list, index) => renderList(list, index, selected, setSelected, activeListIndex, activeImageURL))}
    </div>
  );
};

ListGroup.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

export default ListGroup;
