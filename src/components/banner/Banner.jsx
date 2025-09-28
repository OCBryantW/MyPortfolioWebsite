import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
// import Items from './Items';

const Banner = () => {
    return (

        <section id='home' className="mt-0 pt-0 bg-none max-w-[100%]
             md:h-full md:pb-0  bg-quart flex flex-col items-center">
            {/* <RightBanner/> */}
            <LeftBanner/>
            {/* <Items/> */}
            {/* <div className='bg-gradient-to-b from-transparent to-prim'></div> */}
        </section>
    )
}

export default Banner