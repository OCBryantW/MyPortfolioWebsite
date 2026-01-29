import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import { NavbarLink } from '../components/NavbarLink';
import { logoImg } from '../assets/index';
import { HiMenuAlt3 } from 'react-icons/hi';
import LiquidGlass from 'liquid-glass-react';

const Navbar = () => {
    const [open, setOpen] = useState(false); // Default: navbar closed
    const [isInBanner, setIsInBanner] = useState(true); // Track if user is in banner section
    const [useLiquidGlass, setUseLiquidGlass] = useState(false);
    const navbarRef = useRef(null);

    // Browser detection
    useEffect(() => {
        const ua = navigator.userAgent;
        const isFirefox = ua.indexOf("Firefox") > -1;
        const isSafari = ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1;
        setUseLiquidGlass(isFirefox || isSafari);
    }, []);

    // Close navbar when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // sm screen
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Detect scroll position to determine if user is in banner section
    useEffect(() => {
        const handleScroll = () => {
            const bannerSection = document.getElementById('home');
            if (bannerSection) {
                const bannerHeight = bannerSection.offsetHeight;
                const scrollPosition = window.scrollY;
                // User is in banner if scroll position is less than banner height
                setIsInBanner(scrollPosition < bannerHeight - 100);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close navbar when user clicks outside or scrolls
    useEffect(() => {
        const handleInteraction = (event) => {
            if (window.innerWidth < 768 && open) { // Only in sm screen
                if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
        };

        document.addEventListener("click", handleInteraction);
        document.addEventListener("scroll", handleInteraction);
        document.addEventListener("touchstart", handleInteraction);

        return () => {
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("scroll", handleInteraction);
            document.removeEventListener("touchstart", handleInteraction);
        };
    }, [open]);

    const navContent = (
        <div className={`flex place-content-between place-items-center transition-all duration-300 ${useLiquidGlass ? 'h-12 w-[77.72vw] px-6' : 'w-full'}`}>
            <div className='flex items-center gap-x-3 -ml-5 md:-ml-0 top-0'>
                <img src={logoImg} alt="logo" className='h-17 w-17 rounded-full border-3 collapse md:visible' />
                <h3 className={`bg-gradient-to-tr ${useLiquidGlass ? '-ml-3 md:-ml-0' : '-ml-20 md:-ml-0'} text-shadow-md from-tert to-quart py-4 bg-clip-text text-center text-4xl font-normal tracking-tight text-transparent md:text-5xl`}>
                    OCBW
                    <span className='text-quart text-3xl text-shadow-md'>.dev</span>
                </h3>
            </div>

            {/* Menu Container */}
            <div
                className={`fixed z-50 top-4.5 right-3 rounded-xl transition-all duration-300 text-quart p-2 visible lg:collapse ${open ? 'h-70 sm:h-73 w-45 md:h-77 shadow-2xl bg-black/60 backdrop-blur-md border border-white/10' : 'h-15'}`}
            >
                {/* Menu Button */}
                <div className='p-2 flex justify-end sticky text-quart xl:text-prim'>
                    <HiMenuAlt3
                        size={29}
                        className='cursor-pointer top-0'
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    />
                </div>

                {/* Menu Items */}
                <ul className={`text-[17px] flex flex-col ml-5 gap-8 sm:gap-4 items-start transition-all duration-300 ${open ? "opacity-100" : "opacity-0 hidden"} xl:flex xl:opacity-100 lg:collapse md:flex-col md:gap-5`}>
                    {
                        NavbarLink.map(({ _id, title, url }) => (
                            <li
                                key={_id}
                                className="text-quart hover:text-tert cursor-pointer sm:visible sm:mt-4 sm:flex sm:flex-col sm:relative lg:collapse transform duration-300"
                                onClick={() => setOpen(false)} // Close navbar after clicking a menu
                            >
                                <Link
                                    activeClass="active"
                                    to={url}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Desktop Menu */}
            <ul className="text-[17px] flex lg:gap-15 collapse lg:visible">
                {
                    NavbarLink.map(({ _id, title, url }) => (
                        <li
                            className={`collapse text-shadow-lg lg:visible transform duration-300 hover:text-tert cursor-pointer ${isInBanner ? 'xl:text-prim lg:text-quart' : 'text-quart'}`}
                            key={_id}
                        >
                            <Link
                                activeClass="active"
                                to={url}
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                            >{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

    return (
        <nav
            ref={navbarRef}
            className={`sticky z-50 flex place-content-between place-items-center transition-all duration-300 
                ${useLiquidGlass
                    ? "w-[84.99%] h-24  translate-x-11/19 justify-center top-12"
                    : "w-[84.99%] h-24 translate-x-2/20 backdrop-blur-xl bg-white/10 rounded-full shadow-2xl pl-14 pr-10 text-lightText text-quart top-5"
                }`}
        >
            {useLiquidGlass ? (
                <LiquidGlass
                    displacementScale={130}
                    blurAmount={1.5}
                    saturation={120}
                    aberrationIntensity={2}
                    elasticity={0.10}
                    cornerRadius={100}
                    mode='standard'
                    className='mt-10 justify-center object-center text content-center rounded-full'
                >
                    {navContent}
                </LiquidGlass>
            ) : (
                <>
                    {navContent}
                </>
            )}
        </nav>
    );
}

export default Navbar;
