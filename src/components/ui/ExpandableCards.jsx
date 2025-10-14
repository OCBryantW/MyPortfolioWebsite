"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion as Motion} from "motion/react";

// Mock hook untuk demo - ganti dengan useOutsideClick asli kamu
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

export function ExpandableCardDemo({activeCard, setActiveCard}) {
  const ref = useRef(null);
  const id = useId();
  const [isClosing, setIsClosing] = useState(false);
  const scrollRef = useRef(null);

  useOutsideClick(ref, () => {
    if(!isClosing) {
      setIsClosing(true);
      setTimeout(() => setActiveCard(null), 250);
    }
  });

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(false);
      }
    }

    const body = document.body;
    let scrollY = 0;

    if (activeCard && typeof activeCard === "object") {
      setIsClosing(false);
      scrollY = window.scrollY || window.pageYOffset;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflow = 'hidden';

      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      // Pastikan kontainer bisa menerima event scroll
      scrollContainer.style.overflowY = "auto";

      const handleWheel = (event) => {
        // Pastikan hanya mencegah scroll halaman utama
        const isScrollable =
          scrollContainer.scrollHeight > scrollContainer.clientHeight;
        if (isScrollable) {
          event.preventDefault();
          scrollContainer.scrollTop += event.deltaY;
        }
      };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
    } else {
      const savedY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      
      if (savedY) {
        window.scrollTo(0, parseInt(savedY || '0') * -1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCard]);

  if (!activeCard) return null;

    

  return (
    <>
      <AnimatePresence>
        {activeCard && typeof activeCard === "object" && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
      {activeCard && typeof activeCard === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <Motion.button
              key={`popup-${activeCard.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-10"
              onClick={() => {
                requestAnimationFrame(() => {
                  if (!isClosing) {
                    setIsClosing(true);
                    setTimeout(() => setActiveCard(null), 250);
                  }
                });
              }}>
              <CloseIcon />
            </Motion.button>

            {/* EXPANDABLE CARD */}
            <Motion.div
              layoutId={`card-${activeCard.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={!isClosing ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="w-full max-w-[340px] max-h-[60%] sm:max-w-[460px] sm:max-h-[70%] md:max-w-[600px] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden">
              
              {/* Image Section */}
              <Motion.div layoutId={`image-${activeCard.title}-${id}`} className="flex-shrink-0">
                <img
                  width={200}
                  height={200}
                  src={activeCard.src}
                  alt={activeCard.title}
                  className="w-full h-80 lg:h-87 rounded-tr-lg rounded-tl-lg object-cover object-top" />
              </Motion.div>

              {/* Content Section - Scrollable */}
              <div ref={scrollRef} className="overflow-y-auto max-h-[80vh] scrollbar-thin no-scrollbar scrollbar-track-transparent">
                <div className="flex justify-between items-start p-4">
                  <div className="flex-1">
                    <Motion.h3
                      layoutId={`title-${activeCard.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {activeCard.title}
                    </Motion.h3>
                    <Motion.p
                      layoutId={`description-${activeCard.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 mt-2">
                      {activeCard.description}
                    </Motion.p>
                  </div>

                  <Motion.a
                    layoutId={`button-${activeCard.title}-${id}`}
                    href={activeCard.link}
                    target="_blank"
                    className="px-3.5 py-2.5 text-sm rounded-full font-bold bg-cyan-500 text-white ml-4 flex-shrink-0">
                    {activeCard.miniButton}
                  </Motion.a>
                </div>
                
                <div className="px-4 pb-6">
                  <Motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base dark:text-neutral-400">
                    {typeof activeCard.content === "function"
                      ? activeCard.content()
                      : activeCard.content}
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          </div>
        ) : null}       
      </AnimatePresence>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <Motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </Motion.svg>
  );
};