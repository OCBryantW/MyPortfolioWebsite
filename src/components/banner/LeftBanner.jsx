import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { bannerImg } from '../../assets/index'
import '../../App.css'
import Items from './Items';
import CVPDF from '../../assets/CV_Oei_C.Bryant_W.pdf'
import { Download } from 'lucide-react';

// Tombol link (rantai)
function LinkButton() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = CVPDF;
        link.download = 'CV_Oei_C.Bryant_W.pdf';
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
    }

    return (
        <button
            onClick={handleDownload}
            className="bg-white hover:bg-prim border text-prim hover:text-quart border-gray-300 rounded-full p-2 shadow transition-colors w-fit flex gap-4 items-center px-4 py-3"
            title="Download CV"
            aria-label="Download CV"
        >
            <Download/>
            <h3>Download CV</h3>
        </button>
    );
}

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["College Student.", "UI Designer.", "Code Enthusiast."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    // const [pdfFile, setPdfFile] = useState('');

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
                        <div className='relative flex flex-col gap-5 text-quart pt-15 justify-center items-center px-7
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
                                
                                <LinkButton/>
                                
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