import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { cn } from "./utils";

export function AnimatedPinDemo({ title, src, description }) {
    return (
        <div className="h-[32rem] sm:h-[44rem] w-full lg:max-w-[24rem] xl:w-full flex items-center justify-center ">
            <PinContainer title={`/My-${title}`} href={src}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] lg:w-63 xl:w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                            {description}
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>
    );
}

export const PinContainer = ({ children, title, href, className, containerClassName }) => {
    const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg) scale(1)");
    const [showCircularPerspective, setShowCircularPerspective] = useState(false);
    const [showFloatingPin, setShowFloatingPin] = useState(false);
    const cardRef = useRef(null);
    const intervalRef = useRef(null);

    const triggerAnimation = useCallback(() => {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.9)");
        setShowCircularPerspective(true); // Show Circular Perspective
        setShowFloatingPin(true);

        setTimeout(() => {
            setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
            setShowCircularPerspective(false); // Hide Circular Perspective after animation
            setShowFloatingPin(false);

        }, 4500);
    }, [setTransform, setShowCircularPerspective, setShowFloatingPin]);

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1280) {
            // Clear any existing interval when switching to lg or larger screens
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }

            // Reset animation states when switching to lg screen
            setShowCircularPerspective(false);
            setShowFloatingPin(false);
            setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
        }
    };

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && window.innerWidth < 1024) {
            triggerAnimation(); // Start animation when in viewport

            // Clear previous interval if it exists
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            // Set new interval
            intervalRef.current = setInterval(triggerAnimation, 7000);
        } else {
            // Stop interval if the element is out of the viewport or screen size changes
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);

    // Attach the resize listener
    window.addEventListener("resize", handleResize);

    return () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
}, [triggerAnimation]); // Add triggerAnimation as a dependency

    

    return (
        <a
            id="card"
            ref={cardRef}
            className={cn("relative group/pin cursor-pointer", containerClassName)}
            onMouseEnter={window.innerWidth >= 1024 ? () => {
                setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
                setShowFloatingPin(true);
            } : undefined}

            onMouseLeave={window.innerWidth >= 1024 ? () => {
                setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
                setShowFloatingPin(false);
            } : undefined}
            href={href || "/"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div
                style={{ perspective: "1000px" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={{
                        transform,
                        transition: "transform 0.7s ease",
                    }}
                    className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] overflow-hidden"
                >
                    <div className={cn("relative", className)}>{children}</div>
                </div>
            </div>
            <PinPerspective/>
            <AnimatePresence>
                {showFloatingPin && (
                    <FloatingPin key="floating-pin" title={title} href={href} />
                )}
            </AnimatePresence>
            {showCircularPerspective && <CircularPerspective/>}
        </a>
    );
};

export const PinPerspective = () => {
    const perspectiveRef = useRef(null);
    // const intervalRef = useRef(null);

    return (
        <Motion.div
            ref={perspectiveRef}
            className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition duration-500"
        >
            <div className="w-full h-full flex-none inset-0">
                <CircularPerspective />
            </div>
        </Motion.div>
    );
};

export const FloatingPin = ({ title, href }) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 inset-x-0 flex justify-center"
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
                <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                    {title}
                </span>
                <span className="absolute -bottom-[1px] left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 group-hover/pin:opacity-40"></span>
            </a>
        </Motion.div>
    );
};

export const CircularPerspective = () => {
    return (
        <>
            {/* Circular animations */}
            <div
            style={{
                perspective: "1000px",
                transform: "rotateX(70deg) translateZ(0)",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                {[0, 2, 4].map((delay) => (
                    <Motion.div
                        key={delay}
                        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
                        transition={{ duration: 6, repeat: Infinity, delay }}
                        className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                    />
                ))}
            </div>
        
            <Motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[0px] w-px h-35 lg:h-20 group-hover/pin:h-40 blur-[2px]" />
            <Motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[0px] w-px h-35 lg:h-20  group-hover/pin:h-40  " />
            <Motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[0px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
            <Motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[0px] w-[2px] h-[2px] rounded-full z-40 " />
        
        </>
    );
};
