"use client";

import { taglineContent } from "@/data/portfolio";

export function Tagline() {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-tight flex flex-wrap justify-center text-center md:justify-end md:text-right">
        {taglineContent.lines.map((line, index) => (
          <span key={index}>
            {line}
            {index < taglineContent.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}
