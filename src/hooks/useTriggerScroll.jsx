import { useEffect, useState } from 'react';

const useTriggerScroll = (position) => {
  const [isTrigged, setIsTrigged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = position;

      if (scrollPosition > triggerPosition) {
        setIsTrigged(true);
      } else {
        setIsTrigged(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isTrigged;
};

export default useTriggerScroll;
