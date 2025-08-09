"use client";

/**
 * Tagline component matching the prototype's design and content.
 * Displays the multi-line tagline on the right side of the screen.
 */
export function Tagline() {
  return (
    <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 text-right z-10">
      <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl w-full md:w-[36rem] leading-tight">
        Product-savvy,<br />
        AI-native designer <br />
        blending empathy,<br />
        systems thinking,<br />
        and <br />
        visual excellence.
      </p>
    </div>
  );
}