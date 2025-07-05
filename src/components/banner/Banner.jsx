import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {
    return (

        <section id='home' className='flex flex-col'>
            <RightBanner/>
            <LeftBanner/>
            {/* <div className='bg-gradient-to-b from-transparent to-prim'></div> */}
        </section>
    )
}

export default Banner