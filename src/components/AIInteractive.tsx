"use client";

import { useState } from "react";
import { AIWaveIcon } from "./icons";
import { aiAgentContent } from "@/data/portfolio";
import { LAYOUT_SPACING } from "@/config/ui";
import { cn } from "@/utils/cn";

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
                className={cn(
                    "flex flex-col items-center gap-3 rounded-2xl p-4",
                    "sm:gap-4 sm:p-5 md:gap-5 md:p-6 lg:gap-6 lg:p-8",
                    "bg-white/5 border border-white/10 backdrop-blur-[5px]",
                    "transition-transform duration-400",
                    active ? 'scale-105' : 'hover:scale-110'
                )}
                aria-label={aiAgentContent.ariaLabel}
            >
                <AIWaveIcon active={active} className="w-16 h-16 sm:w-[70px] sm:h-[70px] md:w-20 md:h-20 lg:w-24 lg:h-24" />
                <p className="font-serif text-xs text-white/60 m-0 sm:text-sm md:text-base lg:text-lg">
                    {aiAgentContent.buttonLabel}
                </p>
            </button>
        </div>
    );
}
