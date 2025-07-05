import React from 'react'
import { bannerImg } from '../../assets/index'

const RightBanner = () => {
    return (
        <div className='md:shrink-0'>
            <div className='
            w-56 h-56 rounded-full border-4 border-quart left-1/2 -translate-x-1/2 mt-11 items-center
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