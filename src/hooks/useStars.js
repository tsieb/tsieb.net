import { useEffect, useState } from 'react';
import { config, createStar } from '../utils';

export const useStars = (starContainerRef, styles) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starContainer = starContainerRef.current;
    if (!starContainer) return;

    const newStars = Array.from({ length: config.STAR_COUNT }, (_, i) => createStar(i, styles));
    newStars.forEach(star => starContainer.appendChild(star));
    setStars(newStars);

    newStars.forEach(star => {
      const initialTop = Math.random() * window.innerHeight;
      star.style.top = `${initialTop}px`;
    });

    return () => {
      newStars.forEach(star => starContainer.removeChild(star));
    };
  }, [starContainerRef]);

  return stars;
};
