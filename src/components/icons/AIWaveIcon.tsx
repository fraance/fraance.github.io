"use client";

import React from 'react';

interface AIWaveIconProps {
  className?: string;
  active?: boolean;
}

export function AIWaveIcon({ className = "w-20 h-20", active = false }: AIWaveIconProps) {
  return (
    <svg
      className={`ai-icon stroke-white stroke-1 fill-none stroke-linecap-round stroke-linejoin-round transition-transform duration-400 overflow-visible ${className}`}
      viewBox="0 0 100 100"
    >
      {/* Wave paths - only visible when active */}
      <path
        className={`wave wave-1 ${active ? 'animate-wave-1' : 'opacity-0'}`}
        d="M 50,5 C 20,20 20,80 50,95 S 80,80 80,50 C 80,20 60,10 50,5 Z"
        stroke="#ffffff"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ transformOrigin: "center" }}
      />
      <path
        className={`wave wave-2 ${active ? 'animate-wave-2' : 'opacity-0'}`}
        d="M 50,15 C 30,30 30,70 50,85 S 70,70 70,50 C 70,30 65,20 50,15 Z"
        stroke="#ffffff"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ transformOrigin: "center" }}
      />
      <path
        className={`wave wave-3 ${active ? 'animate-wave-3' : 'opacity-0'}`}
        d="M 50,25 C 40,35 40,65 50,75 S 60,65 60,50 C 60,35 55,30 50,25 Z"
        stroke="#ffffff"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ transformOrigin: "center" }}
      />
      <path
        className={`wave wave-4 ${active ? 'animate-wave-4' : 'opacity-0'}`}
        d="M 50,35 C 45,40 45,60 50,65 S 55,60 55,50 C 55,40 52,38 50,35 Z"
        stroke="#ffffff"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ transformOrigin: "center" }}
      />

      {/* Idle dot */}
      <circle
        cx="50"
        cy="50"
        r="6"
        fill="#ffffff"
        stroke="none"
        style={{ transformOrigin: "center" }}
        className={`idle-dot transition-all ${active ? 'opacity-0 scale-0' : 'animate-pulse-idle'}`}
      />
    </svg>
  );
}
