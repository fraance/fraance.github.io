"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom mouse cursor follower matching the prototype design.
 * Creates a glass-like follower and a dot that trail the mouse.
 */
export function MouseCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Use refs to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const animate = () => {
      // Update positions
      followerPos.current = {
        x: followerPos.current.x + (mousePos.current.x - followerPos.current.x) * 0.2,
        y: followerPos.current.y + (mousePos.current.y - followerPos.current.y) * 0.2,
      };

      dotPos.current = {
        x: dotPos.current.x + (mousePos.current.x - dotPos.current.x) * 0.8,
        y: dotPos.current.y + (mousePos.current.y - dotPos.current.y) * 0.8,
      };

      // Apply transforms directly to DOM
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Glass follower */}
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 rounded-full border border-white/30 backdrop-blur-xs pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className={`fixed w-2 h-2 rounded-full bg-white pointer-events-none z-[9998] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </>
  );
}