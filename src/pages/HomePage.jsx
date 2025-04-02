import React, { useEffect, useState } from 'react'
import { useTheme } from '../stores/appTheme'
import GenreList from '../components/GenreList';
import { useGetGameList } from '../hooks/useGetGameList';
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GameByGenreId from '../components/GameByGenreId';
import { useGetGameByGenre } from '../hooks/useGetGameByGenre';



const HomePage = () => {

	const { bgThemeMode } = useTheme();
	const { data, isLoading, error } = useGetGameList();
	const [ gameList, setGameList ] = useState([]);
	const [ genreId, setGenreId ] = useState(4);
	

	useEffect(()=>{
		if (data) {
			setGameList(data.results)
			// console.log(gameList)
		}
	}, [data])

    return (
        <div className={`grid grid-cols-4 ${bgThemeMode == 'dark' ? 'text-white' : 'text-black'} px-8`}>
			<div className='h-full hidden md:block'>
				<GenreList setGenreId={setGenreId}/>
			</div>
			<div className='col-span-4 md:col-span-3'>
				{
					gameList.length > 0 ? (
						<div>
							<Banner gameBanner={gameList?.[0]}/>
							<TrendingGames gameList={gameList}/>
							<GameByGenreId genreId={genreId}/>
						</div>
					) 
					: (null)
				}
			</div>
        </div>
    )
}

export default HomePage