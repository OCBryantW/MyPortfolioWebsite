import React from "react";

const ArrowIndicator = ({className}) => {
  return (
    <>
      <style>
        {`
          @keyframes scrollFade {
            0% { opacity: 0; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          .scroll-arrow {
            display: block;
            width: 16px;
            height: 16px;
            border-right: 2px solid white;
            border-bottom: 2px solid white;
            transform: rotate(45deg);
          }

          .animate-scroll {
            animation: scrollFade 1s infinite alternate;
          }

          .delay-0 { animation-delay: 0s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>

      <div className="flex flex-col items-center mt-2">
        {/* Scroll Arrows */}
        <div className={`flex flex-col items-center space-y-1 ${className}`}>
          <span className="scroll-arrow animate-scroll delay-0"></span>
          <span className="scroll-arrow animate-scroll delay-200"></span>
          <span className="scroll-arrow animate-scroll delay-400"></span>
        </div>
      </div>
    </>
  );
};

export default ArrowIndicator;
