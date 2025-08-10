/**
 * Custom hook for handling mouse and touch events
 * Separates event handling logic from components
 */

import { useEffect } from "react";

interface UseMouseAndTouchEventsProps {
  isDragging: boolean;
  handleDrag: (clientX: number, clientY: number) => void;
  endDrag: () => void;
}

export function useMouseAndTouchEvents({ 
  isDragging, 
  handleDrag, 
  endDrag 
}: UseMouseAndTouchEventsProps) {
  
  // Mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX, e.clientY);
    const handleMouseUp = () => endDrag();

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, handleDrag, endDrag]);

  // Touch events
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchEnd = () => endDrag();

    if (isDragging) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchcancel', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, handleDrag, endDrag]);
}