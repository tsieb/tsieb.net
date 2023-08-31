export const config = {
    STAR_COUNT: 50,
    MIN_COLOR_VALUE: 200,
    COLOR_RANGE: 100,
    SIZE: 2,
    MIN_DEPTH: 0,
    MAX_DEPTH: 0.4,
    MIN_COLOR_DURATION: 1,
    COLOR_DURATION_RANGE: 2,
  };
  
  export const getRandom = (min, max) => Math.random() * (max - min) + min;
  
  export const getRandomColor = () => Math.floor(getRandom(config.MIN_COLOR_VALUE, config.MIN_COLOR_VALUE + config.COLOR_RANGE));
  
  export const getRandomRGB = () => `rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`;
  
  export const getColorFromCanvas = (canvas, x, y) => {
    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  };
  
  export const drawGradient = (canvas, focalX, focalY, colorStops) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(focalX, focalY, 0, focalX, focalY, Math.max(window.innerWidth, window.innerHeight));
  
    if (colorStops) {
      colorStops.forEach((color, i) => {
        gradient.addColorStop(i * 0.1, color);
      });
    }
  
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return gradient;
  };
  
  
  
  export const addDynamicStyles = (i, red, green, blue) => {
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
  
  export const createStar = (i, styles) => {
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
  

export const throttle = (func, delay) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= delay) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, delay - (Date.now() - lastRan));
      }
    };
  };
  