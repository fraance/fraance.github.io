'use client';

import { useEffect } from 'react';

export function ProjectScrollAnimations() {
  useEffect(() => {
    const initScrollAnimations = () => {
      const animateElements = document.querySelectorAll('.scroll-animate');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt((entry.target as HTMLElement).dataset.delay || '0');
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      animateElements.forEach(element => {
        observer.observe(element);
      });
    };

    initScrollAnimations();
  }, []);

  return null;
}