import React, { useEffect, useRef } from 'react';
import styles from './SingleStar.module.css';

const SingleStar = () => {
  const starContainerRef = useRef(null);

  const createStar = () => {
    const star = document.createElement('div');
    star.className = styles.star;
  
    const sizeDuration = 5; // 5 seconds for size fluctuation
  
    star.style.animation = `sizeFluctuation ${sizeDuration}s infinite alternate`;
  
    star.style.left = '50%';
    star.style.top = '50%';
    addDynamicStyles();
    return star;
  };

  const addDynamicStyles = () => {
    const styleSheet = document.styleSheets[0];
    if (!styleSheet) return; // Error handling for styleSheet

    const sizeKeyframes = `
      @keyframes sizeFluctuation {
        0% { transform: scale(1); }
        100% { transform: scale(1.5); }
      }
    `;
    styleSheet.insertRule(sizeKeyframes, styleSheet.cssRules.length);
  };

  useEffect(() => {
    const starContainer = starContainerRef.current;
    if (!starContainer) return; // Error handling for starContainer

    const star = createStar();
    starContainer.appendChild(star);

    starContainer.classList.add(styles.fadeIn);
  }, []);

  return <div ref={starContainerRef} className={styles.background}></div>;
};

export default SingleStar;
