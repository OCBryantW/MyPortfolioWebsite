import React from 'react'
import { ExperienceTimelineDemo } from '../ui/ExperienceTimelineDemo'

const Experience = () => {
    return (
        <section id='experience' className="w-full min-h-screen flex flex-col items-center bg-linear-45 from-prim from-50% to-tert">
            <h1 className="mt-30 bg-gradient-to-br from-tert to-quart py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                Work Experience
            </h1>
            <div className="w-[40rem] relative">
                {/* Gradients */}
                <div className="absolute inset-x-70 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/8 sm:w-1/4 blur-sm" />
                <div className="absolute inset-x-92  sm:inset-x-1 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/5 sm:w-4/4" />
                <div className="absolute inset-x-70 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/8 sm:w-1/4 blur-sm" />
                <div className="absolute inset-x-40  sm:inset-x-1 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/5 sm:w-4/4" />
            </div>
            {/* <h1 className="text-quart text-2xl flex mt-26">Experience</h1> */}
            <ExperienceTimelineDemo/>
        </section>
    )
}

export default Experience