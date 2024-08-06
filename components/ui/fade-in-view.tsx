"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from '@/hooks/useInView';

type FadeInRenderProp = (inView: boolean) => React.ReactNode;

interface FadeInSectionProps {
  children: React.ReactNode | FadeInRenderProp;
  className?: string;
  isOnce?: boolean;
}

export function FadeInSection({ children, className = "", isOnce = false }: FadeInSectionProps) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && isOnce && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, isOnce, hasAnimated]);

  const shouldAnimate = isOnce ? (inView || hasAnimated) : inView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldAnimate ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {typeof children === 'function'
        ? (children as FadeInRenderProp)(shouldAnimate)
        : children}
    </motion.div>
  );
}