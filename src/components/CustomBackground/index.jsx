import React, { useEffect, useLayoutEffect, useRef, useState, memo } from 'react';
import ReactDOM from 'react-dom';
import styles from './CustomBackground.module.css';
import { useStars } from '../../hooks/useStars';
import { useCanvasGradient } from '../../hooks/useCanvasGradient';
import { getColorFromCanvas, throttle } from '../../utils';

const CustomBackground = () => {
  const starContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stars = useStars(starContainerRef, styles);
  const gradient = useCanvasGradient(canvasRef, mousePosition);
  
  const canvas = canvasRef.current;

  useEffect(() => {
    if (canvas && stars.length > 0) {
      stars.forEach(star => {
        const x = parseFloat(star.style.left) * (canvas.width / 100);
        const y = parseFloat(star.style.top);
        const color = getColorFromCanvas(canvas, x, y);
        star.style.backgroundColor = color;
      });
    }
  }, [gradient]);

  useLayoutEffect(() => {
    const handleScroll = throttle(() => {
      ReactDOM.unstable_batchedUpdates(() => {
        stars.forEach(star => {
          const depth = parseFloat(star.dataset.depth);
          const initialTop = parseFloat(star.dataset.initialTop);
          const offset = window.scrollY * depth;
          star.style.top = `${initialTop + offset}px`;
        });
      });
    }, 100);

    const handleMouseMove = throttle((e) => {
      ReactDOM.unstable_batchedUpdates(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    }, 100);

    const handleResize = throttle(() => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }, 100);

    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [stars]);

  return (
    <>
      <div ref={starContainerRef} className={styles.background} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </>
  );
};

export default memo(CustomBackground);
