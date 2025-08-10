"use client";

import { useState } from "react";

/**
 * AI Interactive component matching the prototype design.
 * Features wave animations and idle pulsing dot.
 */
export function AIInteractive() {
    const [active, setActive] = useState(false);

    return (
        <div>
            <button
                onClick={() => setActive(!active)}
                className={`flex flex-col items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-[5px] transition-transform duration-400 ${active ? 'scale-105' : 'hover:scale-110'}`}
                aria-label="Talk with my AI agent"
            >
                <svg
                    className="w-20 h-20 stroke-white stroke-1 fill-none stroke-linecap-round stroke-linejoin-round transition-transform duration-400 overflow-visible"
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
                        className={`${active ? 'opacity-0 scale-0' : 'animate-pulse-idle'}`}
                    />
                </svg>

                <p className="font-serif text-sm text-white/60 m-0lg:text-base">Talk with my AI agent</p>
            </button>

            <style jsx>{`
                @keyframes pulse-idle {
                    0% { transform: scale(0.8); opacity: 0.7; }
                    50% { transform: scale(1.4); opacity: 1; }
                    100% { transform: scale(0.8); opacity: 0.7; }
                }
                
                @keyframes draw-wave {
                    0% { 
                        stroke-dashoffset: 800; 
                        opacity: 0; 
                        transform: scale(0.3); 
                        stroke-width: 0.5; 
                    }
                    20% { 
                        opacity: 1; 
                        stroke-width: 1.5; 
                    }
                    70% { 
                        stroke-dashoffset: 0; 
                        opacity: 1; 
                        transform: scale(1); 
                        stroke-width: 1; 
                    }
                    100% { 
                        stroke-dashoffset: -200; 
                        opacity: 0; 
                        transform: scale(1.1); 
                        stroke-width: 0; 
                    }
                }
                
                .animate-pulse-idle {
                    animation: pulse-idle 3s ease-in-out infinite;
                }
                
                .animate-wave-1 {
                    animation: draw-wave 3s cubic-bezier(0.3, 0, 0.1, 1) infinite;
                }
                
                .animate-wave-2 {
                    animation: draw-wave 3s cubic-bezier(0.3, 0, 0.1, 1) infinite;
                    animation-delay: 0.5s;
                }
                
                .animate-wave-3 {
                    animation: draw-wave 3s cubic-bezier(0.3, 0, 0.1, 1) infinite;
                    animation-delay: 1.0s;
                }
                
                .animate-wave-4 {
                    animation: draw-wave 3s cubic-bezier(0.3, 0, 0.1, 1) infinite;
                    animation-delay: 1.5s;
                }
            `}</style>
        </div>
    );
}
