/**
 * Custom hook for compass animation logic
 * Separates animation concerns from component rendering
 */

import { useEffect, useRef, useState, RefObject } from "react";
import { ANIMATION_CONFIG } from "@/config/ui";

interface UseCompassAnimationProps {
  compassRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
}

export function useCompassAnimation({ compassRef, containerRef }: UseCompassAnimationProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  // Animation state refs to avoid re-renders
  const currentAngleRef = useRef(0);
  const lastAngleRef = useRef(0);
  const velocityRef = useRef(ANIMATION_CONFIG.compass.initialVelocity);

  // Main animation loop
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (!isDragging) {
        // Apply friction when not dragging
        velocityRef.current = velocityRef.current * ANIMATION_CONFIG.compass.dampening;
        if (Math.abs(velocityRef.current) < ANIMATION_CONFIG.compass.velocityThreshold) {
          velocityRef.current = 0;
        }
        currentAngleRef.current = (currentAngleRef.current + velocityRef.current) % 360;
      } else {
        // Calculate drag velocity
        const velocityOfDrag = currentAngleRef.current - lastAngleRef.current;
        velocityRef.current = velocityRef.current * ANIMATION_CONFIG.compass.dragMomentum + 
                              velocityOfDrag * ANIMATION_CONFIG.compass.dragInfluence;
        lastAngleRef.current = currentAngleRef.current;
      }

      if (compassRef.current) {
        compassRef.current.style.transform = `rotate(${currentAngleRef.current}deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging, compassRef]);

  const startDrag = () => {
    setIsDragging(true);
    velocityRef.current = 0;
    lastAngleRef.current = currentAngleRef.current;
    document.body.classList.add('is-dragging');
  };

  const endDrag = () => {
    setIsDragging(false);
    document.body.classList.remove('is-dragging');
  };

  const handleDrag = (clientX: number, clientY: number) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) + 90;

    currentAngleRef.current = angle;
  };

  return {
    isDragging,
    startDrag,
    endDrag,
    handleDrag
  };
}