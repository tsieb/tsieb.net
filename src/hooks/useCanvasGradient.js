import { useEffect, useState } from 'react';
import { drawGradient, getRandomRGB } from '../utils';

export const useCanvasGradient = (canvasRef, mousePosition) => {
  const [colorStops, setColorStops] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (!colorStops) {
        const initialColorStops = Array.from({ length: 10 }, () => getRandomRGB());
        setColorStops(initialColorStops);
      }
      drawGradient(canvas, mousePosition.x, mousePosition.y, colorStops);
    }
  }, [canvasRef, mousePosition, colorStops]);

  return colorStops;
};
