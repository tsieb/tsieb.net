import React, { useState, useRef, useEffect } from 'react';
import styles from './Timeline.module.css';
import { dateToPosition } from './utils';

const Timeline = ({ projects, selectedCategory, selected, setSelected }) => {
  const widthRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [limits, setLimits] = useState([new Date("2015-03-25"), new Date("2016-03-25")]);
  const [hoveredId, setHoveredId] = useState(null);
  const [maxRow, setMaxRow] = useState(0);

  useEffect(() => {
    const width = widthRef.current.offsetWidth;
    const numOfLines = Math.floor(width / 40) + 1;
    setLines(Array.from({ length: numOfLines }, (_, i) => i));
  }, []);

  useEffect(() => {
    const [minDate, maxDate] = projects.reduce(
      ([min, max], project) => [
        project.start < min ? project.start : min,
        project.end > max ? project.end : max
      ],
      [new Date(), new Date(0)]
    );
    setLimits([minDate, maxDate]);
    setMaxRow(Math.max(...projects.map(p => p.row)));
  }, [projects]);

  const handleMouseEnter = id => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);
  const handleClick = id => setSelected(selected === id ? null : id);

  return (
    <div className={styles.fullDiv}>
      <div ref={widthRef} className={styles.horizontalLineContainer}>
        <div className={styles.horizontalLine} style={{ height: `${maxRow * 40 + 80}px` }} />
        {lines.map((_, index) => (
          <div key={index} className={styles.verticalLine} style={{ left: `${index * 40}px` }} />
        ))}
        <div>
          {projects.map((project, index) => {
            const [left, right] = dateToPosition(project.start, project.end, limits[0], limits[1]);
            return (
              <div key={index}
                className={styles.project}
                style={{
                  borderColor: selected === index ? 'blue' : hoveredId === index ? 'red' : 'white',
                  borderWidth: project.topics.includes(selectedCategory) ? '4px' : '2px',
                  borderStyle: project.topics.includes(selectedCategory) || selectedCategory === null ? 'solid' : 'dashed',
                  left: `${left * 100}%`,
                  right: `${100 - right * 100}%`,
                  top: `${project.row * 40 + 20}px`
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
    </div>
  );
};

export default Timeline;
