import React from 'react'
import { bannerImg } from '../../assets/index'

const RightBanner = () => {
    return (
        <div className='md:shrink-0'>
            <div className='
            w-56 h-56 rounded-full border-4 border-quart 
            sm:[left:clamp(100px,52%,1200px)] 
            md:[left:clamp(100px,51%,1200px)] 
            lg:[left:clamp(100px,50%,1200px)] 
            xl:[left:clamp(100px,55%,1200px)] 
            2xl:[left:clamp(100px,53%,1200px)] 
            -translate-x-1/2 z-20 mt-11 items-center
            md:
            lg:w-100 lg:h-123 lg:rounded-xl lg:border-4 lg:border-quart lg:ml-65 lg:-translate-x-1/2 lg:mt-20 lg:items-center
            xl:w-95 xl:h-120 xl:rounded-xl xl:border-t-[6px] xl:border-l-[6px] xl:border-t-quart xl:border-l-quart  
                xl:mt-48 xl:ml-60
            absolute overflow-hidden drop-shadow-lg drop-shadow-tert'>
                <img src={bannerImg} alt='bannerImg' className='w-full h-full object-cover ' />
            </div>
        </div>
    )
}

export default RightBanner