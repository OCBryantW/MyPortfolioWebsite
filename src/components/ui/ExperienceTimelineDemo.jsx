// import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";
import { sampleImg } from "../../assets/index";

export function ExperienceTimelineDemo() {
    const data = [
        {
        title: "Not yet - Not yet",
        content: (
            <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Not Yet
            </p>
            <div className="grid grid-cols-2 gap-4">
                <img 
                src={sampleImg} 
                alt="First Work Img" 
                width={500} height={500} 
                className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                
            </div>
            </div>
        ),
        },
        {
        title: "Not yet - Not yet",
        content: (
            <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Not Yet
            </p>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Not Yet
            </p>
            <div className="grid grid-cols-2 gap-4">
            <img 
                src={sampleImg} 
                alt="Second Work Img" 
                width={500} height={500} 
                className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
            </div>
        ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
        <Timeline data={data} />
        </div>
    );
}
