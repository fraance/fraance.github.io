"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

/**
 * Geometric Compass component inspired by the prototype.
 * Features spinning animation and drag interaction to control rotation.
 */
export function Compass() {
    const compassRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Use refs for animation values to avoid re-renders
    const currentAngleRef = useRef(0);
    const lastAngleRef = useRef(0);
    const velocityRef = useRef(20); // Initial spin velocity

    // Animation loop
    useEffect(() => {
        let animationFrame: number;

        const animate = () => {
            if (!isDragging) {
                // Apply friction when not dragging
                velocityRef.current = velocityRef.current * 0.97; // Dampening factor
                if (Math.abs(velocityRef.current) < 0.01) {
                    velocityRef.current = 0;
                }
                currentAngleRef.current = (currentAngleRef.current + velocityRef.current) % 360;
            } else {
                // Calculate drag velocity
                const velocityOfDrag = currentAngleRef.current - lastAngleRef.current;
                velocityRef.current = velocityRef.current * 0.8 + velocityOfDrag * 0.2;
                lastAngleRef.current = currentAngleRef.current;
            }

            if (compassRef.current) {
                compassRef.current.style.transform = `rotate(${currentAngleRef.current}deg)`;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, [isDragging]);

    const startDrag = () => {
        setIsDragging(true);
        velocityRef.current = 0;
        lastAngleRef.current = currentAngleRef.current;
        document.body.classList.add('is-dragging');
    };

    const endDrag = () => {
        setIsDragging(false);
        document.body.classList.remove('is-dragging');
    };

    const handleDrag = (clientX: number, clientY: number) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) + 90;

        currentAngleRef.current = angle;
    };

    // Mouse events
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX, e.clientY);
        const handleMouseUp = () => endDrag();

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mouseleave', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseUp);
        };
    }, [isDragging]);

    // Touch events
    useEffect(() => {
        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            handleDrag(e.touches[0].clientX, e.touches[0].clientY);
        };

        const handleTouchEnd = () => endDrag();

        if (isDragging) {
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleTouchEnd);
            window.addEventListener('touchcancel', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, [isDragging]);

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

                    {/* Arrows */}
                    {[
                        { cls: "top-[25.3%] left-[25.3%]", shape: "diamond" },
                        { cls: "top-[25.3%] left-[74.7%]", shape: "star" },
                        { cls: "top-[74.7%] left-[25.3%]", shape: "burst" },
                        { cls: "top-[74.7%] left-[74.7%]", shape: "petal" },
                    ].map((arrow, i) => (
                        <div
                            key={i}
                            className={`absolute ${arrow.cls} w-[clamp(18px,2.5vw,28px)] h-[clamp(18px,2.5vw,28px)] -translate-x-1/2 -translate-y-1/2 z-20`}
                        >
                            <Icon 
                                name={arrow.shape as "diamond" | "star" | "burst" | "petal"} 
                                className="w-full h-full text-white" 
                            />
                        </div>
                    ))}

                    {/* Labels */}
                    <div className="absolute top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <span className="text-white text-[clamp(10px,1.2vw,14px)] font-normal whitespace-nowrap tracking-[0.05em] translate-x-[clamp(20px,4vw,40px)] inline-block">
                            Product Design
                        </span>
                    </div>
                    <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 rotate-45">
                        <span className="text-white text-[clamp(10px,1.2vw,14px)] font-normal whitespace-nowrap tracking-[0.05em] -translate-x-[clamp(40px,3vw,20px)] inline-block">
                            UI Design
                        </span>
                    </div>
                    <div className="absolute top-[85%] left-[15%] -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <span className="text-white text-[clamp(10px,1.2vw,14px)] font-normal whitespace-nowrap tracking-[0.05em] -translate-x-[clamp(40px,4vw,20px)] inline-block">
                            Service Design
                        </span>
                    </div>
                    <div className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 rotate-45">
                        <span className="text-white text-[clamp(10px,1.2vw,14px)] font-normal whitespace-nowrap tracking-[0.05em] translate-x-[clamp(20px,3vw,40px)] inline-block">
                            UX Research
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
