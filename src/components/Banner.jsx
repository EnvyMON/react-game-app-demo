import React from 'react'

const Banner = ({gameBanner}) => {
    return (
        <div className='relative md:h-[400px]'>
            <img src={gameBanner.background_image} className='w-full rounded-2xl md:h-[400px] object-cover object-top'/>
            <div className='absolute bottom-0 p-5 w-full h-[50%] rounded-b-2xl bg-gradient-to-t from-black to-transparent flex flex-col items-start'>
                <h2 className='font-bold text-3xl mb-1 md:mt-20 text-white'>{gameBanner.name}</h2>
                <button className='bg-blue-500 py-2 px-3 rounded-xl font-bold w-auto text-white cursor-pointer hover:bg-blue-700' >Get Now</button>
            </div>
        </div>
    )
}

export default Banner 