import { useState, useEffect } from 'react';

const useTextCycle = (textArray, typeDelay, pauseDelay, eraseDelay, switchDelay) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDelay);
    } else {
      const typingEffect = () => {
        if (!isDeleting && charIndex < textArray[textIndex].length) {
          setCurrentText((prev) => prev + textArray[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting((prev) => !prev);
          if (!isDeleting) {
            setIsPaused(true);
          }
        }
      };

      const delay = isDeleting ? eraseDelay : typeDelay;
      timer = setTimeout(typingEffect, delay);

      if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setIsPaused(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentText, textIndex, charIndex, isDeleting, isPaused]);

  return currentText;
};

export default useTextCycle;
