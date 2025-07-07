"use client";;
import { TbArrowNarrowRight } from "react-icons/tb";
import { useState, useRef, useId, useEffect } from "react";
import { AnimatePresence, motion as Motion} from "motion/react";
import { ExpandableCardDemo } from "./ExpandableCards";

export function CarouselDemo() {
  const slideData = [
    {
      title: "LookSky",
      description: (
        <>
        This project is an implementation of an AI-based application.<br />
        The website provides clothing recommendations based on a sky image uploaded by the user. The AI model classifies the image into one of four weather conditions: Cloudy, Sunny, Rainy, or Foggy.<br />
        This project was developed using Python with the Streamlit framework.<br />
        <br />
        Please note that the web styling may not be fully responsive due to limitations in the current version of Streamlit.<br />
        To view the project in action, you can watch the demo video by clicking the "Explore" button below to download it.<br />
        </>
      ) ,
      button: "Explore Projects",
      miniButton: "Explore",
      src: "/Look.png",
      link: "/Video Demo Website LookSky.mkv",
    },
    {
      title: "Pitchy Arduino & App",
      description: (
        <>
        This Arduino project is built using an ESP32 module, incorporating DHT11, soil moisture, and water level sensors.<br />
        The application is designed to provide real-time remote monitoring of your plants—anytime and anywhere.<br />

        By leveraging Arduino technology and its sensor suite, along with Firebase for cloud data storage and Flutter for the mobile application interface, this project aims to offer users a convenient and accessible plant monitoring solution.<br />

        Pitchy helps you track essential environmental factors such as ambient temperature, soil moisture, and water level to support better plant care.<br />

        You can click the "Explore" button to visit the GitHub repository and learn more about the project.<br />
        </>
      ) ,
      button: "Explore Projects",
      miniButton: "Explore",
      src: "/Circuit AOL ME Smt4.png",
      link: "https://github.com/OCBryantW/Pitchy-Arduino-Apps/",
    },
    {
      title: "Ooga Booga",
      description: (
        <>
          This game project was a collaborative effort developed together with my team. {" "}
          Here are the team members who contributed to the project: {" "}
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <a href="https://github.com/Gleenryan" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                Gleen Ryan (Github)
              </a>
            </li>
            <li>
              <a href="https://github.com/mammami44" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                Mammami44 (GitHub)
              </a>
            </li>
            <li>
              <a href="https://github.com/korneliusztx" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                Kornelius Aldo (Github)
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/fredericasharon/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                Frederica Sharon (IG)
              </a>
            </li>
            <li>
              <a href="https://github.com/OCBryantW" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                Oei Christopher Bryant Widyanata (GitHub)
              </a>
            </li>
          </ul>
          <br />
          The game was developed using Unity 2D as the main development platform.<br />
          For more information and to explore the source code, feel free to visit the GitHub repository by clicking the "Explore" button below.
        </>
      ),
      button: "Explore Projects",
      miniButton: "Explore",
      src: "/OogaBooga.png",
      link: "https://github.com/OCBryantW/Ooga-Booga-Game-Projects",
    },
    {
      title: "Comming Soon",
      description: "Comming Soon",
      button: "Explore Projects",
      miniButton: "Explore",
      src: "/SampleImage.jpg",
      link: "https://example.com",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="relative overflow-hidden w-full h-full -mt-150">
            <Carousel slides={slideData} setActiveCard={setActiveCard} />
            <ExpandableCardDemo activeCard={activeCard} setActiveCard={setActiveCard} />
    </div>
  );
}


const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  setActiveCard 
}) => {

  const { src, title, button } = slide;
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  // const { src, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
        >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}>
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync" />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
            {title}
          </h2>
          <button
              onClick={(e) => {
                e.stopPropagation(); // biar gak trigger slide click
                setActiveCard(slide);
              }}
              className="px-4 py-2 bg-white text-black rounded-lg mt-7"
            >
              {button}
            </button>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-tert focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}>
      <TbArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

export function Carousel({
  slides,
  setActiveCard
}) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick} 
            setActiveCard={setActiveCard} // 👈 passed here
            />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick} />

        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}
