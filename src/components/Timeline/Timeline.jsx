import React, { useState, useRef, useEffect } from 'react';
import styles from './Timeline.module.css';
import { dateToPosition } from './utils';

const Line = React.memo(({ index }) => (
  <div
    className={styles.verticalLine}
    style={{ left: `${index * 40}px`, top: "0", bottom: "0" }}
  />
));

const Timeline = ({ projects, selectedCategory, selected, setSelected, isTimelineVisible }) => {
  const widthRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [limits, setLimits] = useState([new Date("2015-03-25"), new Date("2016-03-25")]);
  const [hoveredId, setHoveredId] = useState(null);
  const [maxRow, setMaxRow] = useState(0);

  useEffect(() => {
    const updateLines = () => {
      const width = widthRef.current.offsetWidth;
      const numOfLines = Math.floor(width / 40) + 1;
      setLines(Array.from({ length: numOfLines }, (_, i) => i));
    };
    updateLines();
    window.addEventListener('resize', updateLines);

    return () => window.removeEventListener('resize', updateLines);
  }, []);

  useEffect(() => {
    const updateLimitsAndRows = () => {
      const [minDate, maxDate] = projects.reduce(
        ([min, max], project) => [
          project.start < min ? project.start : min,
          project.end > max ? project.end : max
        ],
        [new Date(), new Date(0)]
      );
      setLimits([minDate, maxDate]);
      setMaxRow(Math.max(...projects.map(p => p.row)));

      let newHeight;
    if (isTimelineVisible) {
      newHeight = (maxRow + 1) * 70 + 60;
    } else {
      newHeight = (maxRow + 1) * 70 + 20; 
    }
      
      widthRef.current.style.height = `${newHeight}px`;
    };

    updateLimitsAndRows();
  }, [projects, isTimelineVisible]);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleClick = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fullDiv} ref={widthRef}>
        { isTimelineVisible && <div className={styles.horizontalLine} /> }
        { isTimelineVisible && lines.map((_, index) => (
            <Line key={index} index={index} />
        ))}
        {projects.map((project, index) => {
        const [left, right] = dateToPosition(project.start, project.end, limits[0], limits[1]);
        const width = right - left; 
        const isSelected = selected === index;
        const isHovered = hoveredId === index;
        const isSameCategory = project.topics.includes(selectedCategory);

        return (
          <div key={index}
            className={`${styles.project} ${isSelected ? styles.selected : ''} ${isSameCategory ? 'sameCategory' : ''}`}  /* Conditional classname */
            style={{
              width: `${width * 100}%`,
              left: `${left * 100}%`,
              top: `${project.row * 40 + 20}px`,
              zIndex: isSelected || isHovered ? 2 : 1,  /* Elevated zIndex if selected or hovered */
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
          {project.title}
        </div>
      );
    })}
    </div>
  </div>
  );
};

export default Timeline;

