import { useState, useEffect } from 'react';

const useSelectedCategory = (initialValue) => {
  const [selectedCategory, setSelectedCategory] = useState(initialValue);
  useEffect(() => {
    setSelectedCategory(null);
  }, [selectedCategory]);
  return [selectedCategory, setSelectedCategory];
};

export default useSelectedCategory;
