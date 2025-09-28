import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiPython, SiHtml5, SiC, SiStreamlit } from 'react-icons/si';
import '../../App.css'

const Items = () => {
    return(
        <div className=' flex left-0 bottom-0
        ml-8 mt-0 flex-col gap-15
        sm:ml-0
        sm:justify-center sm:flex-row sm:gap-18 md:gap-25 py-13 xl:py-18 
         xl:flex-row xl:gap-15'>
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
    )
}

export default Items