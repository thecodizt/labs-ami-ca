import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  start: number;
  end: number;
  duration: number; // in milliseconds
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ start, end, duration, className }) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCurrentNumber(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration, isInView]);

  return <span ref={ref} className={className}>{currentNumber.toLocaleString()}</span>;
};

export default AnimatedNumber;