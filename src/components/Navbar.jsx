import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import { NavbarLink } from '../components/NavbarLink';
import { logoImg } from '../assets/index';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const [open, setOpen] = useState(false); // Default: navbar closed
    const navbarRef = useRef(null);

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

    return (
        <nav ref={navbarRef} className="w-full h-20 lg:sticky lg:top-0 z-50 pl-10 pr-13 bg-linear-45 from-tert to-prim text-lightText text-quart flex place-content-between place-items-center">
            <div className='flex items-center gap-x-3 -ml-5 md:-ml-0 top-0'>
                <img src={logoImg} alt="logo" className='h-17 w-17 rounded-full border-3'/>
                <h3 className="bg-gradient-to-tr from-tert to-quart py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                    OCBW
                    <span className='text-quart text-3xl'>.dev</span>
                </h3>
            </div>

            {/* Menu Container */}
            <div 
                className={`fixed z-50 top-2.5 right-3 bg-black/40 backdrop-blur-md ${open ? 'h-70 sm:h-73 w-45 md:h-77' : 'h-15'} transition-all duration-300 text-quart p-2 visible lg:collapse`}
            >
                {/* Menu Button */}
                <div className='p-2 flex justify-end sticky'>
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
                    NavbarLink.map(({_id, title, url}) => (
                        <li className="collapse lg:visible transform duration-300 text-quart hover:text-tert cursor-pointer" 
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
        </nav>
    );
}

export default Navbar;
