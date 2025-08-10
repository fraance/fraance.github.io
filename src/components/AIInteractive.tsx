"use client";

import { useState } from "react";
import { AIWaveIcon } from "./icons";

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
                <AIWaveIcon active={active} />

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
