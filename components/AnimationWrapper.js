// components/AnimationWrapper.js
'use client';

import { useEffect } from 'react';
import { initAnimations, initSmoothScroll } from '@/lib/animations';

export default function AnimationWrapper({ children }) {
  useEffect(() => {
    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize animations
    initAnimations();
  }, []);

  return <>{children}</>;
}