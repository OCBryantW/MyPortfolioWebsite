import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaInstagram, FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiPython, SiHtml5, SiC, SiStreamlit } from 'react-icons/si';
import '../../App.css'
// import { useEffect, useState } from "react";

// Tombol link (rantai)
function LinkButton({ link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-prim border text-prim hover:text-quart border-gray-300 rounded-full p-2 shadow transition-colors w-fit flex gap-4 items-center px-4 py-3"
            title="Open CV Link"
            aria-label="Open CV Link"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
            >
                <path
                    d="M13.5442 10.4558C11.8385 8.75022 9.07316 8.75022 7.36753 10.4558L4.27922 13.5442C2.57359 15.2498 2.57359 18.0152 4.27922 19.7208C5.98485 21.4264 8.75021 21.4264 10.4558 19.7208L12 18.1766"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.4558 13.5442C12.1614 15.2498 14.9268 15.2498 16.6324 13.5442L19.7207 10.4558C21.4264 8.75021 21.4264 5.98485 19.7207 4.27922C18.0151 2.57359 15.2497 2.57359 13.5441 4.27922L12 5.82338"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <h3>View Resume</h3>
        </a>
    );
}

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
            md:max-w-[97.5%] 2xl:max-w-[100%] md:h-auto md:pb-0 xl:pb-68 bg-quart">
                <div className='md:flex'>
                    <div className={`flex flex-col gap-15 
                    mt-0 pt-65 w-full h-290 sm:h-220 ml-0 pb-184
                    md:pb-100 md:pt-65 md:h-260
                    xl:mt-25 xl:pt-20 xl:w-200 xl:h-133 xl:ml-60 xl:pb-100 bg-prim`}
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
                            <LinkButton link={"https://drive.google.com/file/d/13SjT10aezbXpE8Ync9-aZ2Cy9CgxXnU2/view?usp=sharing"}/>
                        </div>
                        <div className='relative flex left-0 bottom-0
                        ml-8 mt-0 flex-col gap-15
                        sm:ml-0
                        sm:justify-center sm:flex-row sm:gap-18 md:gap-40
                        xl:-ml-80 xl:flex-row xl:gap-15'>
                            <div>
                                <h2 className='text-base uppercase mb-4 pl-10 w-full sm:text-center sm:pl-0 text-quart xl:text-prim'>
                                    Find me in
                                </h2>
                                <div className='flex gap-4 text-quart xl:text-prim'>
                                    <span className='bannerIcon'>
                                        <a href="https://www.instagram.com/lhmbrynt/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram/>
                                        </a>
                                    </span>
                                    <span className='bannerIcon'>
                                        <a href="https://www.linkedin.com/in/oei-bryant-90b764294/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn/>
                                        </a>
                                    </span>
                                    <span className='bannerIcon'>
                                        <a href="https://github.com/OCBryantW" target="_blank" rel="noopener noreferrer">
                                            <FaGithub/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-base uppercase text-quart
                                mb-4 pl-10 w-full sm:text-center sm:pl-0 xl:text-prim'>
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