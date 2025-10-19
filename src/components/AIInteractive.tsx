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
                    "flex flex-col items-center gap-4 rounded-2xl p-5",
                    "bg-white/5 border border-white/10 backdrop-blur-[5px]",
                    "transition-transform duration-400",
                    active ? 'scale-105' : 'hover:scale-110'
                )}
                aria-label={aiAgentContent.ariaLabel}
            >
                <AIWaveIcon active={active} className="w-[70px] h-[70px]" />
                <p className="font-serif text-sm text-white/60 m-0 lg:text-base">
                    {aiAgentContent.buttonLabel}
                </p>
            </button>
        </div>
    );
}
