import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { cn } from "./utils";
import { FaInstagram, FaLinkedinIn, FaGithub, FaReact, FaCss3, FaUnity } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiPython, SiHtml5, SiC, SiStreamlit, SiArduino } from 'react-icons/si';

export const projects = [
    { title: <SiHtml5/>, percent: 85 },
    { title: <FaCss3/>, percent: 70 },
    { title: <SiTailwindcss/>, percent: 80 },
    { title: <SiPython/>, percent: 80 },
    { title: <SiStreamlit/>, percent: 85},
    { title: <FaReact/>, percent: 69 },
    { title: <SiFigma/>, percent: 68 },
    { title: <FaUnity/>, percent: 71 },
    { title: <SiArduino/>, percent: 62 },
];

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl md:text-4xl text-center mb-5 text-quart">My Skills</h1>
            <HoverEffect items={projects} />
        </div>
    );
}

export const Card = ({ className, children }) => {
    return (
        <div
            className={`rounded-xl h-17 w-17 sm:h-20 sm:w-20 overflow-hidden bg-prim border-transparent dark:border-white/[0.2] group-hover:border-sec relative z-20 ${className}`}
        >
            <div className="relative z-50">
            <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({ className, children, isActive }) => {
    return (
        <h4 className={cn(
            "flex my-[20%] items-center justify-center text-quart font-bold group-hover:text-tert", 
            isActive && "text-tert", // ✅ Change color on selection
            className
        )}>
            {children && React.cloneElement(children, { size: 30 })} {/* ✅ Adjust icon size */}
        </h4>
    );
};

export const HoverEffect = ({ items, className }) => {
    const [currentSkill, setCurrentSkill] = useState(items[0]);
    const [animatedPercent, setAnimatedPercent] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [radius] = useState(80);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShouldAnimate(window.innerWidth > 768); // Adjust the threshold as needed
        };

        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if(!shouldAnimate) {
            setAnimatedPercent(currentSkill.percent);
            return;
        }

        let start = null;
        const duration = 700;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setAnimatedPercent(Math.round(progress * currentSkill.percent));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [currentSkill, shouldAnimate]);

    const strokeDasharray = 2 * Math.PI * radius;
    const strokeDashoffset = strokeDasharray - (animatedPercent / 100) * strokeDasharray;

    return (
        <>
            <div className="flex items-center justify-center relative">
                <svg className="transform -rotate-90 w-72 h-72">
                    <circle cx="145" cy="145" r={radius} stroke="currentColor" strokeWidth="15" fill="transparent" className="text-prim" />
                    
                    <defs>
                        <radialGradient id="progressRadialGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="75%" stopColor="var(--color-prim)" />
                            <stop offset="100%" stopColor="var(--color-tert)" />
                        </radialGradient>
                    </defs>

                    <circle
                        cx="145"
                        cy="145"
                        r={radius}
                        stroke="url(#progressRadialGradient)"
                        strokeWidth="15"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute text-4xl text-quart">{animatedPercent}%</span>
            </div>

            <div className={`grid grid-cols-3 py-7 ${className}`}>
                {items.map((item, idx) => (
                    <a
                        key={idx}
                        onClick={() => {
                            setAnimatedPercent(0);
                            setCurrentSkill(item);
                        }}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={cn(
                            "relative group block p-2 h-full w-full", 
                            currentSkill.title === item.title && "font-bold"
                        )}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && shouldAnimate && (
                                <Motion.span
                                    className="absolute inset-0 h-full w-[88%] sm:w-full bg-neutral-200 dark:bg-tert/[0.8] block rounded-2xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle isActive={currentSkill.title === item.title}>
                                {item.title}
                            </CardTitle>
                        </Card>
                    </a>
                ))}
            </div>
        </>
    );
};
