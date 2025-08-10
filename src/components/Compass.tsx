"use client";

import { useRef } from "react";
import { Icon } from "./icons";
import { compassLabels } from "@/data/portfolio";
import { COMPASS_CONFIG } from "@/config/ui";
import { useCompassAnimation } from "@/hooks/useCompassAnimation";
import { useMouseAndTouchEvents } from "@/hooks/useMouseAndTouchEvents";
import { cn } from "@/utils/cn";

/**
 * Geometric Compass component inspired by the prototype.
 * Features spinning animation and drag interaction to control rotation.
 */
export function Compass() {
    const compassRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    const { isDragging, startDrag, endDrag, handleDrag } = useCompassAnimation({
        compassRef,
        containerRef
    });

    useMouseAndTouchEvents({ isDragging, handleDrag, endDrag });

    const compassData = [
        { position: COMPASS_CONFIG.positions.topLeft, icon: 'diamond' as const },
        { position: COMPASS_CONFIG.positions.topRight, icon: 'star' as const },
        { position: COMPASS_CONFIG.positions.bottomLeft, icon: 'burst' as const },
        { position: COMPASS_CONFIG.positions.bottomRight, icon: 'petal' as const }
    ];

    const labelData = [
        {
            position: COMPASS_CONFIG.labelPositions.topRight,
            rotation: '-rotate-45',
            translation: 'translate-x-[clamp(20px,4vw,40px)]',
            text: compassLabels.topRight
        },
        {
            position: COMPASS_CONFIG.labelPositions.topLeft,
            rotation: 'rotate-45',
            translation: '-translate-x-[clamp(40px,3vw,20px)]',
            text: compassLabels.topLeft
        },
        {
            position: COMPASS_CONFIG.labelPositions.bottomLeft,
            rotation: '-rotate-45',
            translation: '-translate-x-[clamp(40px,4vw,20px)]',
            text: compassLabels.bottomLeft
        },
        {
            position: COMPASS_CONFIG.labelPositions.bottomRight,
            rotation: 'rotate-45',
            translation: 'translate-x-[clamp(20px,3vw,40px)]',
            text: compassLabels.bottomRight
        }
    ];

    return (
        <div className="flex justify-center items-center w-[clamp(250px,30vw,350px)] h-[clamp(250px,30vw,350px)] rounded-xl z-10">
            <div
                ref={containerRef}
                className="relative w-[80%] h-[80%] cursor-grab"
                onMouseDown={startDrag}
                onTouchStart={startDrag}
                title="Hover or Click to Spin"
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div ref={compassRef} className="absolute w-full h-full">
                    {/* Diagonal axes */}
                    <div className="absolute left-[15%] top-1/2 w-[70%] h-px bg-white rotate-45 origin-center" />
                    <div className="absolute left-[15%] top-1/2 w-[70%] h-px bg-white -rotate-45 origin-center" />

                    {/* Icons */}
                    {compassData.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "absolute w-[clamp(18px,2.5vw,28px)] h-[clamp(18px,2.5vw,28px)]",
                                "-translate-x-1/2 -translate-y-1/2 z-20",
                                item.position
                            )}
                        >
                            <Icon 
                                name={item.icon} 
                                className="w-full h-full text-white" 
                            />
                        </div>
                    ))}

                    {/* Labels */}
                    {labelData.map((label, i) => (
                        <div key={i} className={cn(
                            "absolute -translate-x-1/2 -translate-y-1/2",
                            label.position,
                            label.rotation
                        )}>
                            <span className={cn(
                                "text-white text-[clamp(10px,1.2vw,14px)] font-normal",
                                "whitespace-nowrap tracking-[0.05em] inline-block",
                                label.translation
                            )}>
                                {label.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
