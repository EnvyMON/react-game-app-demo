import React, { useEffect, useState } from 'react'

const TrendingGames = ({gameList}) => {

    const [items, setItems] = useState();

    useEffect(()=>{
        if (gameList) {
            setItems(gameList.slice(0, 4));
        }
        // console.log(gameList)
    }, [gameList])

    return (
        <div className='hidden md:block mt-7'>
            <h2 className='font-bold text-[30px] mb-5'>Trending Games</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    items?.map((item, idx)=>(
                        <div key={idx} className='bg-slate-900 rounded-2xl cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out will-change-transform'>
                            <img src={item.background_image} className='h-[250px] w-full object-cover object-top rounded-t-2xl'/>
                            <h2 className='text-[20px] font-bold p-2 text-white'>{item.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>    
    )
}

export default TrendingGames