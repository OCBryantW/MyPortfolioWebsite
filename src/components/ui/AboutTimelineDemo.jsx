// import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";
import { collegeImg, schoolImg } from "../../assets/index";

const CollegePeriod = () => {
    // Ambil tanggal sekarang
    const today = new Date();
    // Buat batas waktu, misalnya 1 Juli 2027
    const mid2027 = new Date('2027-07-01');
    return today >= mid2027 ? 'Mid 2023 - Mid 2027' : 'Mid 2023 - Now';
};

export function AboutTimelineDemo() {
    const data = [
        {
        title: "2020 - 2022",
        content: (
            <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                I completed my senior high school education at Terang Bangsa Christian Senior High School in Semarang, Indonesia.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <img 
                src={schoolImg} 
                alt="School Img" 
                width={500} height={500} 
                className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                
            </div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mt-8">
                Achieved an overall average score of 89.2 across all subjects. <br />
            </p>
            </div>
        ),
        
        },
        {
        title: CollegePeriod(),
        content: (
            <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
                In September 2023, I began my undergraduate studies in Computer Science at BINUS University, Semarang, and I am currently continuing this program.
            </p>
            <div className="grid grid-cols-2 gap-4">
            <img 
                src={collegeImg} 
                alt="College Img" 
                width={500} height={500} 
                className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mt-8">
                Current GPA: 3.64 (on a 4.0 scale) <br />
            </p>
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
