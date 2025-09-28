import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { bannerImg } from '../../assets/index'
import '../../App.css'
import Items from './Items';
// import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// function CenteredItems() {
//   const [centerStyle, setCenterStyle] = useState({});

//   useEffect(() => {
//     function updateCenter() {
//       const screenWidth = window.innerWidth;
//       const itemWidth = 200; // misalnya lebar tetap <Items />
//       const left = (screenWidth - itemWidth) / 5;
//       setCenterStyle({ width: itemWidth, marginLeft: left });
//     }

//     updateCenter();
//     window.addEventListener("resize", updateCenter);
//     return () => window.removeEventListener("resize", updateCenter);
//   }, []);

//   return (
    
//       <div style={centerStyle}>
//         <Items />
//       </div>
//   );
// }


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
                <div className='w-full mt-0 pt-0 bg-none ml-0
             md:h-auto  bg-quart flex flex-col'>
                    <div className=' flex flex-col h-full xl:flex-row xl:justify-center xl:gap-80 lg:justify-between lg:gap-1'>
                        <div className={` h-full
                        xl:-ml-50
                        mt-0 pt-65 
                        md:pt-65
                        lg:pt-35
                         xl:w-200 
                        bg-prim xl:bg-transparent
                        `}
                        >
                            <div className='relative flex flex-col gap-5 text-quart pt-15 justify-center
                                lg:pt-0 sm:justify-items-start sm:px-0 sm:items-center lg:ml-16 xl:ml-5 xl:px-10 xl:py-5 lg:items-start xl:bg-prim'>
                                <div className='py-10 flex flex-col gap-5'>
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
                            </div>
                            <div className='xl:translate-x-[13%]'>
                                <Items />
                            </div>
                        </div>
                        <div className='flex w-66 h-66 rounded-full border-4 border-quart z-20 mt-11 self-center absolute overflow-hidden drop-shadow-lg drop-shadow-tert
                        lg:w-100 lg:h-123 lg:rounded-xl lg:border-4 lg:border-quart lg:ml-[90%] lg:-translate-x-1/2 lg:mt-30 lg:items-center
                        xl:w-95 xl:h-120 xl:rounded-xl xl:border-t-[6px] xl:border-l-[6px] xl:border-t-quart xl:border-l-quart xl:-mt-47 xl:ml-255
                        '>
                            <img src={bannerImg} alt='bannerImg' className='w-full h-full object-cover ' />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LeftBanner