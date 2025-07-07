import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaInstagram, FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiPython, SiHtml5, SiC, SiStreamlit } from 'react-icons/si';
import '../../App.css'
// import { useEffect, useState } from "react";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["College Student.", "UI Designer.", "Mid Coder."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (    
        <>
            <section className="mt-0 pt-0 bg-none 
            md:max-w-[97.5%] 2xl:max-w-373 md:h-auto md:pb-0 xl:pb-68 bg-quart">
                <div className='md:flex'>
                    <div className={`flex flex-col gap-15 
                    mt-0 pt-65 w-full h-290 sm:h-220 ml-0 pb-184
                    md:pb-100 md:pt-65 md:h-220
                    xl:mt-25 xl:pt-20 xl:w-200 xl:h-110 xl:ml-60 xl:pb-100 bg-prim`}
                    >
                        <div className=' flex flex-col gap-5 text-quart pt-15 justify-center px-6 lg:pt-0 sm:pl-10 sm:justify-items-start sm:px-0 md:items-center lg:items-start'>
                            <h1 className='text-lg'>WELCOME TO MY WEBSITE</h1>
                            <h1 className='text-6xl font-bold text-quart'>
                                Hi, I'm {" "}
                                <span className='text-tert capitalize'>Bryant</span>
                            </h1>
                            <h2 className='text-4xl font-bold text-quart'>
                                {["A", "E", "I", "O", "U"].includes(text.charAt(0).toUpperCase()) ? "an " : "a "}
                                <span>{text}</span>
                                <Cursor
                                    cursorBlinking="false"
                                    cursorStyle="|"
                                    cursorColor="#00adb5"
                                />
                            </h2>
                            <p className='max-w-120'>
                                Hello, I'm Oei Christopher Bryant Widyanata, a Computer Science undergraduate at Bina Nusantara University.
                                I have a strong interest in web development and a passion for exploring new technologies. With experience in various programming languages and their practical implementation in projects, I continuously seek opportunities to expand my skills and stay current with industry trends.
                            </p>
                        </div>
                        <div className='relative  flex left-0 bottom-0
                        ml-8 mt-0 flex-col gap-15
                        sm:ml-0
                        sm:justify-center sm:flex-row sm:gap-18 md:gap-40
                        xl:-ml-80 xl:mt-15 xl:flex-row xl:gap-15'>
                            <div>
                                <h2 className='text-base uppercase mb-4 pl-10 text-quart xl:text-prim'>
                                    Find me in
                                </h2>
                                <div className='flex gap-4 text-quart xl:text-prim'>
                                    <span className='bannerIcon'>
                                        <FaInstagram/>
                                    </span>
                                    <span className='bannerIcon'>
                                        <FaLinkedinIn/>
                                    </span>
                                    <span className='bannerIcon'>
                                        <FaGithub/>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-base uppercase text-quart
                                mb-4 pl-10 xl:text-prim'>
                                    Best skill on
                                </h2>
                                <div className='flex flex-col gap-y-4 text-quart xl:text-prim'>
                                    <div className='flex flex-row gap-4'>
                                        <span className='bannerIcon'>
                                            <SiTailwindcss/>
                                        </span>
                                        <span className='bannerIcon'>
                                            <SiFigma/>
                                        </span>
                                        <span className='bannerIcon'>
                                            <SiPython/>
                                        </span>
                                        <span className='bannerIcon'>
                                            <SiHtml5/>
                                        </span>
                                    </div>
                                    <div className='flex flex-row gap-4'>
                                        <span className='bannerIcon'>
                                            <FaReact/>
                                        </span>
                                        <span className='bannerIcon'>
                                            <SiC/>
                                        </span>
                                        <span className='bannerIcon'>
                                            <SiStreamlit/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeftBanner