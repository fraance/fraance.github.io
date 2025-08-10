"use client";

import React from 'react';

export type IconName = 
  | 'diamond'
  | 'star' 
  | 'burst'
  | 'petal'
  | 'wave-ai';

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "w-full h-full", size }: IconProps) {
  const sizeProps = size ? { width: size, height: size } : {};

  switch (name) {
    case 'diamond':
      return (
        <svg viewBox="0 0 24 24" className={className} {...sizeProps}>
          <path
            d="M12 2C16 8 16 8 22 12C16 16 16 16 12 22C8 16 8 16 2 12C8 8 8 8 12 2Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={className} {...sizeProps}>
          <path
            d="M12 1.5L13.5 8L20 5L15 9.5L22.5 12L15 14.5L20 19L13.5 16L12 22.5L10.5 16L4 19L9 14.5L1.5 12L9 9.5L4 5L10.5 8Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'burst':
      return (
        <svg viewBox="0 0 24 24" className={className} {...sizeProps}>
          <g fill="currentColor">
            {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((rotation, idx) => (
              <path
                key={idx}
                d="M12 2 C10 7 10 7 12 12 C14 7 14 7 12 2Z"
                transform={`rotate(${rotation} 12 12)`}
              />
            ))}
          </g>
        </svg>
      );

    case 'petal':
      return (
        <svg viewBox="0 0 24 24" className={className} {...sizeProps}>
          <g fill="currentColor">
            {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((rotation, idx) => (
              <path
                key={idx}
                d="M12,2 C9,2 9,10 12,12 C15,10 15,2 12,2Z"
                transform={`rotate(${rotation} 12 12)`}
              />
            ))}
          </g>
        </svg>
      );

    case 'wave-ai':
      return (
        <svg 
          className={className} 
          viewBox="0 0 100 100" 
          {...sizeProps}
        >
          <path
            d="M 50,5 C 20,20 20,80 50,95 S 80,80 80,50 C 80,20 60,10 50,5 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 50,15 C 30,30 30,70 50,85 S 70,70 70,50 C 70,30 65,20 50,15 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 50,25 C 40,35 40,65 50,75 S 60,65 60,50 C 60,35 55,30 50,25 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 50,35 C 45,40 45,60 50,65 S 55,60 55,50 C 55,40 52,38 50,35 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="50"
            cy="50"
            r="6"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    default:
      return null;
  }
}