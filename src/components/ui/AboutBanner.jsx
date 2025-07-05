"use client";;
import React, { useRef, useState, useEffect } from 'react';
import { CardHoverEffectDemo } from './HoverEffect';

import 'react-medium-image-zoom/dist/styles.css';
import { createPortal } from 'react-dom';
import { sampleImg } from '../../assets/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

// Fungsi download reusable
export function downloadFileAtUrl(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch file');
            return response.blob();
        })
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const fileName = url.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobUrl;
            aTag.setAttribute('download', fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(err => {
            alert('Gagal mengunduh file: ' + err.message);
            console.error(err);
        });
}

// Tombol download SVG
function DownloadButton({ url }) {
    return (
        <button
            onClick={() => downloadFileAtUrl(url)}
            className="bg-white hover:bg-prim hover:text-quart border border-gray-300 rounded-full p-2 shadow transition-colors"
            title="Download image"
            aria-label="Download image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
        </button>
    );
}

// Tombol link (rantai)
function LinkButton({ link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-prim border hover:text-quart border-gray-300 rounded-full p-2 shadow transition-colors"
            title="Open Certificate Link"
            aria-label="Open Certificate Link"
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
        </a>
    );
}

// Tombol close (X)
function CloseButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-white hover:bg-prim hover:text-quart border border-gray-300 rounded-full p-2 shadow transition-colors"
            title="Close"
            aria-label="Close"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
}


function ZoomModal({ 
    images, 
    currentIndex, 
    onClose, 
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(currentIndex); // Lacak index aktif
    const swiperRef = useRef(null); // Gunakan useRef untuk menangkap instance Swiper

    useEffect(() => {
        setIsMounted(true);
        document.body.style.overflow = 'hidden';
        return () => {
            setIsMounted(false);
            document.body.style.overflow = '';
        };
    }, []);

    const currentImage = images[currentIndex];

    return createPortal(
        <div className={`fixed top-0 left-0 w-full h-full bg-prim bg-opacity-80 flex justify-center items-center z-[9999] transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full flex justify-center items-center">
                <div className='relative max-w-[80%]'>
                    <Swiper
                        // onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // update index aktif
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Navigation]}
                        initialSlide={currentIndex}
                        loop={images.length > 1} // Looping jika ada lebih dari satu gambar
                        spaceBetween={40}
                        slidesPerView={1}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="mx-auto mb-12 max-w-full max-h-[70vh] sm:max-h-[60vh] object-contain rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Tombol di pojok kanan atas */}
                    {/* <div className="fixed top-10 -translate-x-1/2 sm:right-20 flex  gap-2"> */}
                    <div className="fixed top-10 left-1/2 -translate-x-1/2 sm:left-auto sm:right-20 flex items-center justify-center gap-2 z-50">

                        <DownloadButton url={images[activeIndex]?.src} /> {/* hanya satu tombol */}
                        <LinkButton link={currentImage.link} />
                        <CloseButton onClick={onClose} />
                    </div>

                    {/* Tombol navigasi custom */}
                    {images.length > 1 && (
                        <>
                            <button
                                className="custom-prev absolute left-[35%] top-[115%] md:left-[-60px] md:top-1/2 -translate-y-1/2 bg-white hover:bg-prim hover:text-quart border border-gray-300 rounded-full p-1 md:p-2 shadow-lg z-50"
                                // onClick={handlePrev}
                                onClick={() => swiperRef.current?.slidePrev()} // Geser ke kiri
                            >
                                <IoIosArrowBack size={window.innerWidth <= 640 ? 22 : 24 } />
                            </button>
                            <button
                                className="custom-next absolute right-[35%] top-[115%] md:right-[-60px] md:top-1/2 -translate-y-1/2 bg-white hover:bg-prim hover:text-quart border border-gray-300 rounded-full p-1 md:p-2 shadow-lg z-50"
                                // onClick={handleNext}
                                onClick={() => swiperRef.current?.slideNext()} // Geser ke kanan
                            >
                                <IoIosArrowForward size={window.innerWidth <= 640 ? 22 : 24 } />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}


export function CertificateSection() {
    const certifData = [
        {
            image: {
                src: sampleImg,
                alt: 'Certificate 1',
                link: 'https://example.com/cert1'
            },
            description: 'Not Yet',
        },
        {
            image: {
                src: sampleImg,
                alt: 'Certificate 2',
                link: 'https://example.com/cert2'
            },
            description: 'Not Yet',
        },
            
    ];

    return (<AboutBanner certif={certifData} />);
}

export function AboutBanner({ certif }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const openModal = (index) => {
        setCurrent(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex gap-16 flex-col lg:flex-row w-full sm:px-15 px-3 xl:px-35 '>
            <div className="mt-10 max-w-full md:w-full lg:w-[70%] p-10 h-auto bg-black/30 backdrop-blur-md rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-4xl w-full flex justify-center items-center mb-[40px] sm:mb-8 text-black dark:text-white max-w-4xl">
                    Certification
                </h2>
                <div className='w-full flex justify-center items-center'></div>
                <ul className={`flex flex-col justify-center items-center gap-10`}>
                
                    {(certif || []).map((item, index) => (
                        <li key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                            <img
                                src={item.image.src}
                                alt={item.image.alt}
                                className="rounded-lg cursor-zoom-in w-[370px] sm:w-[360px] h-auto transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                                onClick={() => openModal(index)}
                            />
                            <p className="max-w-80 text-sm text-neutral-800 dark:text-neutral-200">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
                {isModalOpen && (
                    <ZoomModal
                        images={certif.map((item) => item.image)}
                        currentIndex={current}
                        onClose={closeModal}
                    />
                )}
            </div>
            <CardHoverEffectDemo />
        </div>
    )
}
