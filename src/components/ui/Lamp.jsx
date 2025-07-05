"use client";
import React, { useState, useEffect } from "react";
import {motion as Motion} from "motion/react"
import { cn } from "./utils";


const AnimatedLine = ({isTabletOrLarger}) => {
    const [lineWidth, setLineWidth] = useState("20rem"); // default buat mobile

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth >= 640) { // sm breakpoint
            setLineWidth("30rem");
            } else {
            setLineWidth("20rem");
            }
        };

        updateWidth(); // run saat mount
        window.addEventListener("resize", updateWidth); // update saat resize

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <Motion.div
            initial={isTabletOrLarger ? { width: "15rem" } : true}
            whileInView={{ width: lineWidth }}
            transition={
                isTabletOrLarger
                    ? {
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }
                : {duration: 0}
            }
            className="absolute inset-auto z-50 h-0.5 w-[33rem] -translate-y-[23rem] bg-quart"
        />
    );
};

export function LampDemo() {
    const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsTabletOrLarger(window.innerWidth >= 640); // sm breakpoint
        }

        checkWidth(); // run saat mount
        window.addEventListener("resize", checkWidth); // update saat resize
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <LampContainer isTabletOrLarger={isTabletOrLarger}>
        <Motion.h1
            initial={isTabletOrLarger ? { opacity: 0.5, y: 100 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={
                isTabletOrLarger
                ? {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }
                : {duration: 0}
            }
            className="-mt-86 bg-gradient-to-br from-tert to-quart py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl lg:text-7xl">
            My Projects
        </Motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
    isTabletOrLarger
}) => {
    const baseTransition = isTabletOrLarger
    ?{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
    }
    : {duration: 0};

    const baseInitial = isTabletOrLarger ? { opacity: 0.5, width: "15rem" } : false;

    return (
        <div
        className={cn(
            "flex min-h-full flex-col items-center justify-center overflow-hidden bg-linear-90 from-tert to-prim w-full rounded-md z-0",
            className
        )}>
        <div
            className=" flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            <Motion.div
            initial={baseInitial}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={baseTransition}
            style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-quart via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
            <div
                className="absolute  w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div
                className="absolute  w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </Motion.div>
            <Motion.div
            initial={baseInitial}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={baseTransition}
            style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/12 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-quart text-white [--conic-position:from_290deg_at_center_top]">
            <div
                className="absolute  w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div
                className="absolute  w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </Motion.div>
            <div
            className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
            <div
            className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-66 rounded-full bg-quart opacity-50 blur-3xl"></div>
            <Motion.div
            initial={isTabletOrLarger ? { width: "8rem" } : false}
            whileInView={{ width: "16rem" }}
            transition={baseTransition}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[23rem] rounded-full bg-quart blur-2xl"></Motion.div>
            {/* <Motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[33rem] -translate-y-[23rem] bg-quart "></Motion.div> */}
            <AnimatedLine isTabletOrLarger = {isTabletOrLarger}/>

            <div
            className="absolute inset-auto z-50 h-66 w-full -translate-y-[31.4rem] bg-linear-90 from-tert to-prim"></div>
        </div>
        <div className="relative z-50 flex -translate-y-140 flex-col items-center px-5">
            {children}
        </div>
        </div>
    );
};
