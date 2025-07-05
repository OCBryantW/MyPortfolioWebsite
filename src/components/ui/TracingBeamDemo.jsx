"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useTransform, useScroll, useVelocity, useSpring } from "motion/react";
import '../../App.css'

export const PreviewTracingBeam = ({ contentRef }) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll(); 

    const scrollYProgressVelocity = useVelocity(scrollYProgress);
    const [velo, setVelocity] = useState(0);
    const [svgHeight, setSvgHeight] = useState(0);

  // Measure the content container's height
    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                setSvgHeight(contentRef.current.offsetHeight - 24);
            }
        };

        // Create a ResizeObserver to watch for size changes
        const resizeObserver = new ResizeObserver(updateHeight);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, [contentRef]);

    // console.log(svgHeight)

    useEffect(() => {
        return scrollYProgressVelocity.on("change", (latestVelocity) => {
        setVelocity(latestVelocity);
        });
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 500]),
        { stiffness: 500, damping: 90 }
    );

    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 2000]),
        { stiffness: 500, damping: 90 }
    );

    return (
        <div ref={containerRef} className="w-10">
        <Motion.div className="absolute h-10 w-10 right-2.5 max-w-4xl mx-auto z-40" style={{height: svgHeight}}>
            <div className="">
            <Motion.div className="ml-[27px] h-4 w-4 rounded-full border border-quart shadow-sm flex items-center justify-center">
                <Motion.div
                transition={{ duration: 0.2, delay: 0.5 }}
                animate={{
                    backgroundColor: scrollYProgress.get() === 0 ? "var(--color-quart)" : scrollYProgress.get() < 0.5 ? "var(--color-sec)" : "var(--emerald-500)",
                    borderColor: scrollYProgress.get() > 0 ? "var(--color-sec)" : "var(--emerald-600)",
                }}
                className="h-2 w-2 rounded-full border border-quart bg-quart"
                />
            </Motion.div>
            <svg
                viewBox={`0 0 20 ${svgHeight}`}
                width="20"
                height={`${svgHeight}`}
                className="ml-4 hidden sm:block"
                aria-hidden="true"
            >
                <Motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.195} l -18 24 V ${svgHeight * 0.385} l 18 24 V ${svgHeight * 0.63}  l -18 24 V ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.26"
                transition={{ duration: 10 }}
                />
                <Motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.195} l -18 24 V ${svgHeight * 0.385} l 18 24 V ${svgHeight * 0.63}  l -18 24 V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.85"
                className="motion-reduce:hidden"
                transition={{ duration: 10 }}
                />
                <defs>
                <Motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2} transition={{ duration: 10 }}>
                    <stop stopColor="#18CCFC" stopOpacity="0" />
                    <stop stopColor="#18CCFC" />
                    <stop offset="0.325" stopColor="#6344F5" />
                    <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                </Motion.linearGradient>
                </defs>
            </svg>
            </div>
        </Motion.div>
        </div>
    );
};
