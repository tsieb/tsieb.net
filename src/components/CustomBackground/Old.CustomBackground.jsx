import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './CustomBackground.module.css';

const config = {
  STAR_COUNT: 100,
  MIN_COLOR_VALUE: 200,
  COLOR_RANGE: 100,
  SIZE: 2,
  MIN_DEPTH: 0,
  MAX_DEPTH: 0.1,
  MIN_COLOR_DURATION: 1,
  COLOR_DURATION_RANGE: 2,
};

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomColor = () => Math.floor(getRandom(config.MIN_COLOR_VALUE, config.MIN_COLOR_VALUE + config.COLOR_RANGE));
const getRandomRGB = () => `rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`;

const getColorFromCanvas = (canvas, x, y) => {
  const ctx = canvas.getContext('2d');
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
};

const drawGradient = (canvas, focalX, focalY) => {
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(focalX, focalY, 0, focalX, focalY, Math.max(window.innerWidth, window.innerHeight));

  // Add color stops
  const colorStops = Array.from({ length: 10 }, () => getRandomRGB());
  colorStops.forEach((color, i) => {
    gradient.addColorStop(i * 0.1, color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return gradient;
};

const addDynamicStyles = (i, red, green, blue) => {
  const styleSheet = document.styleSheets[0];
  if (!styleSheet) return;

  const colorKeyframes = `
    @keyframes colorShift${i} {
      0% { background-color: rgb(${red}, ${green}, ${blue}); }
      100% { background-color: rgb(${red + 50}, ${green + 50}, ${blue + 50}); }
    }
  `;
  styleSheet.insertRule(colorKeyframes, styleSheet.cssRules.length);
};

const createStar = (i) => {
  const star = document.createElement('div');
  star.className = styles.star;

  const red = getRandomColor();
  const green = getRandomColor();
  const blue = getRandomColor();
  const depth = getRandom(config.MIN_DEPTH, config.MAX_DEPTH);

  const colorDuration = Math.random() * config.COLOR_DURATION_RANGE + config.MIN_COLOR_DURATION;

  star.style.setProperty('--color-duration', `${colorDuration}s`);
  star.style.setProperty('--initial-color', `rgb(${red}, ${green}, ${blue})`);

  star.style.left = `${Math.random() * 100}vw`;
  const initialTop = Math.random() * window.innerHeight;
  star.style.top = `${initialTop}px`;
  star.dataset.initialTop = initialTop;

  star.dataset.depth = depth;

  addDynamicStyles(i, red, green, blue);
  return star;
};

const useStars = (starContainerRef) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starContainer = starContainerRef.current;
    if (!starContainer) return;

    const newStars = Array.from({ length: config.STAR_COUNT }, (_, i) => createStar(i));
    newStars.forEach(star => starContainer.appendChild(star));
    setStars(newStars);

    return () => {
      newStars.forEach(star => starContainer.removeChild(star));
    };
  }, [starContainerRef]);

  return stars;
};


const useCanvasGradient = (canvasRef, mousePosition) => {
  let gradient;
  useEffect(() => {
    const { x, y } = mousePosition;
    const canvas = canvasRef.current;
    if (canvas) {
      gradient = drawGradient(canvas, x, y);
    }
  }, [canvasRef, mousePosition]);

  return gradient;
};

const CustomBackground = () => {
  const starContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stars = useStars(starContainerRef);
  const gradient = useCanvasGradient(canvasRef, mousePosition);
  
  const canvas = canvasRef.current;
  const starContainer = starContainerRef.current;

  useEffect(() => {
    if (canvas && stars.length > 0) {
      stars.forEach(star => {
        const x = parseFloat(star.style.left) * (canvas.width / 100);
        const y = parseFloat(star.style.top);
        const color = getColorFromCanvas(canvas, x, y);
        star.style.backgroundColor = color;
      });
    }
  }, [gradient, stars, mousePosition]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      stars.forEach(star => {
        const depth = parseFloat(star.dataset.depth);
        const initialTop = parseFloat(star.dataset.initialTop);
        const offset = window.scrollY * depth;
        star.style.top = `${initialTop + offset}px`;
      });
    };
    
    const handleResize = () => {
      if (canvas) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawGradient(canvas, mousePosition.x, mousePosition.y);
      }
    };
  
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    // Initialize canvas
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGradient(canvas, mousePosition.x, mousePosition.y);
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

export default CustomBackground;