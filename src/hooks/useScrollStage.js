import React from 'react';
import { clamp } from '../utils/math';

export function useScrollStage(sectionIds) {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeStage, setActiveStage] = React.useState(0);

  React.useEffect(() => {
    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(clamp(window.scrollY / maxScroll, 0, 1));

      const midpoint = window.scrollY + window.innerHeight * 0.35;
      const positions = sectionIds
        .map((id, index) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { index, top: rect.top + window.scrollY };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      const current = positions.reduce((acc, item) => {
        if (item.top <= midpoint) return item.index;
        return acc;
      }, 0);
      setActiveStage(current);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, [sectionIds]);

  return { scrollProgress, activeStage };
}

