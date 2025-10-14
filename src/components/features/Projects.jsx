import React from 'react'
import { LampDemo } from '../ui/Lamp'
import { CarouselDemo } from '../ui/Carousel'
import { ExpandableCardDemo } from '../ui/ExpandableCards'

const Projects = () => {
    return (
        <>
            <section id='projects' className="w-full pt-10 pb-32 flex flex-col items-center">
                <LampDemo />
                <div className="-mt-20">
                    <CarouselDemo/>
                </div>
                {/* <ExpandableCardDemo/> */}
            </section>
        </>
    )
}

export default Projects