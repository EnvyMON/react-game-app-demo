import React from 'react'

import { FcRating } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { useGetGameByGenre } from '../hooks/useGetGameByGenre';

const GameByGenreId = ({genreId}) => {

    const { data, isLoading, error } = useGetGameByGenre(genreId, !!genreId);

    if (isLoading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-[30px] mb-5'>Popular Games</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data?.results && data.results.map((item, idx)=>(
                        <div key={idx} className='rounded-md p-3 bg-gray-600 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out will-change-transform'>
                            <img src={item.background_image} className='rounded-md w-full h-[200px] object-cover object-top'/>
                            <h2 className='text-[20px] font-bold p-2 text-white'>{item.name}</h2>
                            <div className='flex gap-3 ps-2 text-white'>
                                <div className='flex items-center gap-3'> 
                                    <FaRegStar />
                                    {item.rating}
                                </div>
                                <div className='flex items-center gap-3'> 
                                    <FaRegComment />
                                    {item.reviews_count}
                                </div>
                                <div className='flex items-center gap-3'> 
                                    <HiThumbUp />
                                    {item.suggestions_count}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GameByGenreId