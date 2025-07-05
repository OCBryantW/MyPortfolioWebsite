import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { AnimatedPinDemo } from '../ui/AnimatedPin3D'
import ArrowIndicator from '../ui/ArrowIndicator'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { firstImage, secondImage, thirdImage } from '../../assets/index.jsx';

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const Contacts = () => {

  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
    {
      id: 7,
      content: (
        <div className="w-full  px-4 flex flex-row gap-6 text-tert">
          <FaInstagram className="text-[30px] shrink-0" />
          <FaLinkedinIn className="text-[30px] shrink-0" />
          <FaGithub className="text-[30px] shrink-0" />
        </div>
      ),
    },
  ];
  
  
  
  

  return (
    <section
      className=" w-full flex flex-col justify-center gap-5 "
    >
      <div className="relative flex flex-col justify-center items-center w-full h-fit">
        <h1 className="mt-10 bg-gradient-to-br from-tert to-quart bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-4xl">
          Contacts
        </h1>
        <div className="w-[40rem] relative">
          <div className="absolute inset-x-70 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/8 sm:w-1/4 blur-sm" />
          <div className="absolute inset-x-92 sm:inset-x-1 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/5 sm:w-4/4" />
          <div className="absolute inset-x-70 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/8 sm:w-1/4 blur-sm" />
          <div className="absolute inset-x-40 sm:inset-x-1 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/5 sm:w-4/4" />
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <h3 className='flex justify-center text-lg text-quart'>Follow my social media to know me more</h3>
        <div className='flex gap-4 text-quart xl:text-prim justify-center'>
          <a href="https://www.instagram.com/lhmbrynt/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/oei-bryant-90b764294/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>

          <a href="https://github.com/OCBryantW" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
        </div>

      </div>


      <Swiper
        className="absolute w-[40%] items-center justify-center"
        direction='horizontal'
        modules={[Autoplay]}
        loop={true}
        speed={5000}
        autoplay={{ 
        delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        slidesPerView="auto"
        spaceBetween={1}
        style={{
          transitionTimingFunction: 'linear',
          margin: '0 auto', // Atur margin agar berada di tengah
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='h-25 w-40 mr-0 flex justify-center items-center'>
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className="bg-gradient-to-br from-tert to-quart bg-clip-text text-center text-md font-medium tracking-tight text-transparent md:text-lg">
      “Every pixel tells a story. Thank you for visiting!”
        </h1>
    </section>
  )
}

export default Contacts
