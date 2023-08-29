import { useState, useEffect } from 'react';

const useTextCycle = (textArray, delay) => {
  const [currentText, setCurrentText] = useState(textArray[0]);
  let textIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      textIndex = (textIndex + 1) % textArray.length;
      setCurrentText(textArray[textIndex]);
    }, delay);

    return () => clearInterval(interval);
  }, [textArray, delay]);

  return currentText;
};

export default useTextCycle;
