"use client";

import { useRef } from 'react';

export function Tagline() {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-tight flex flex-wrap justify-center text-center md:justify-end md:text-right">
        Product-savvy, <br />
        AI-native designer <br />
        blending empathy, <br />
        systems thinking, <br />
        and <br />
        visual excellence.<br />
      </p>
    </div>
  );
}
