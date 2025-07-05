import React from 'react'
import { LampDemo } from '../ui/Lamp'
import { CarouselDemo } from '../ui/Carousel'
import { ExpandableCardDemo } from '../ui/ExpandableCards'

const Projects = () => {
    return (
        <>
            <section id='projects' className="w-full h-[1200px] pt-10 pb-20 flex flex-col items-center ">
                <LampDemo />
                <CarouselDemo/>
                {/* <ExpandableCardDemo/> */}
            </section>
        </>
    )
}

export default Projects