import React, { useEffect, useState } from 'react'
import { useGetGenreList } from '../hooks/useGetGenreList';

const GenreList = ({setGenreId}) => {

    const { data, isLoading, error } = useGetGenreList();
    const [ genreList, setGenreList ] = useState([]);
    const [ activeItem, setActiveItem] = useState(0);

    useEffect(()=>{
        if (data) {
            setGenreList(data.results);
            // console.log("ttt : ", data.results)
        }
    }, [data])

    if (isLoading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    return (
        <div className='flex flex-col pe-25 gap-1'>
            <h2 className='text-[30px] font-bold'>Genres</h2>
            {
                genreList.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-3 cursor-pointer rounded-lg p-2 ${
                            activeItem === idx ? 'bg-gray-300/25' : 'hover:bg-gray-300/25'
                        } group`} 
                        onClick={() => {
                            setActiveItem(idx);
                            setGenreId(item.id)
                        }}
                    >
                        <img
                            src={item.image_background}
                            className={`w-[40px] h-[40px] object-cover rounded-lg transition-transform duration-300 ease-out transform origin-center will-change-transform 
                            ${activeItem === idx ? 'scale-105' : 'group-hover:scale-105'}`} 
                        />
                        <h3
                            className={`text-[20px] transition-all duration-300 
                            ${activeItem === idx ? 'font-bold' : 'group-hover:font-bold'}`} 
                        >
                            {item.name}
                        </h3>
                    </div>
                ))
            }
        </div>
    )
}

export default GenreList