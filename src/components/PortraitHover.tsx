"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Portrait image that follows the mouse cursor when hovering over the "About me" link.
 * Matches the prototype's portrait hover functionality.
 */
export function PortraitHover() {
    const imgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const aboutMeLink = document.getElementById("about-me-link");
        const portrait = imgRef.current;

        if (!aboutMeLink || !portrait) return;

        const showPortrait = () => {
            portrait.style.opacity = "1";
        };

        const hidePortrait = () => {
            portrait.style.opacity = "0";
        };

        const updatePosition = (e: MouseEvent) => {
            portrait.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`;
        };

        aboutMeLink.addEventListener("mouseenter", showPortrait);
        aboutMeLink.addEventListener("mouseleave", hidePortrait);
        window.addEventListener("mousemove", updatePosition);

        return () => {
            aboutMeLink.removeEventListener("mouseenter", showPortrait);
            aboutMeLink.removeEventListener("mouseleave", hidePortrait);
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <div
            ref={imgRef}
            className="fixed w-[200px] h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] opacity-0 pointer-events-none transition-[opacity,transform] duration-300 ease-out z-[999]"
            aria-hidden
        >
            <Image
                src="https://res.cloudinary.com/dj4fpmfdn/image/upload/c_fill,w_720,h_1080/v1754751862/portrait_session5267_wnlq6y.jpg"
                alt="Portrait of France Hémain"
                width={200}
                height={300}
                className="rounded-xl"
                priority
            />
        </div>
    );
}
