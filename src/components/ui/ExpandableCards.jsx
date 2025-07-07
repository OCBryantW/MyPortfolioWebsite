"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion as Motion} from "motion/react";
import { useOutsideClick } from "./useOutsideClick";

export function ExpandableCardDemo({activeCard, setActiveCard}) {
  const ref = useRef(null);
  const id = useId();
  const [isClosing, setIsClosing] = useState(false);

  useOutsideClick(ref, () => {
    if(!isClosing) {
      setIsClosing(true);
      setTimeout(() => setActiveCard(null), 250); // waktu exit animation
    }
  });

  // useEffect(() => {
  //   function onKeyDown(event) {
  //     if (event.key === "Escape") {
  //       setActiveCard(false);
  //     }
  //   }

  //   if(activeCard) setIsClosing(false);

  //   if (activeCard && typeof activeCard === "object") {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   window.addEventListener("keydown", onKeyDown);
  //   return () => window.removeEventListener("keydown", onKeyDown);
  // }, [activeCard]);
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(false);
      }
    }

    const body = document.body;

    // Simpan posisi scroll sebelum mengunci
    let scrollY = 0;

    if (activeCard && typeof activeCard === "object") {
      setIsClosing(false);

      scrollY = window.scrollY || window.pageYOffset;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflow = 'hidden';
    } else {
      // Ambil kembali posisi scroll sebelumnya
      const savedY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      
      // Scroll balik ke posisi awal
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
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
                ease: [0.25, 0.1, 0.25, 1]  // cubic-bezier ease-in-out
              }}
              className="w-full max-w-[340px] max-h-[60%] sm:max-w-[460px] sm:max-h-[70%] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-x-hidden">
              <Motion.div layoutId={`image-${activeCard.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={activeCard.src}
                  alt={activeCard.title}
                  className="w-full h-80 lg:h-87 rounded-tr-lg rounded-tl-lg object-cover object-top" />
              </Motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <Motion.h3
                      layoutId={`title-${activeCard.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200">
                      {activeCard.title}
                    </Motion.h3>
                    <Motion.p
                      layoutId={`description-${activeCard.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {activeCard.description}
                    </Motion.p>
                  </div>

                  <Motion.a
                    layoutId={`button-${activeCard.title}-${id}`}
                    href={activeCard.link}
                    target="_blank"
                    className="px-3.5 py-2.5 text-sm rounded-full font-bold bg-tert text-white">
                    {activeCard.miniButton}
                  </Motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <Motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
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
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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