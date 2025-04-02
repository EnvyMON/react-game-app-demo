import React, { useState } from 'react'
import logo from '../assets/images/game_logo.png'

// icon
import { MdSearch } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from '../stores/appTheme';

const Headers = () => {

	const [toggle, setToggle] = useState(false);

	const { bgThemeMode, changeBgThemeMode } = useTheme();

	const handleThemeMode = (text) => {
		changeBgThemeMode(text)
	}

    return (
		<div className='flex items-center p-3'>
			<img src={logo} className='w-20' />
			<div className='flex bg-slate-200 p-2 w-full items-center rounded-full mx-5 px-4'>
				<MdSearch size={25}/>
				<input type='text' className='px-2 outline-none w-full' placeholder='Search games ... '/>
			</div>
			<div className='me-3'>
				{
					bgThemeMode == 'light' ? <FaMoon size={40} className='bg-slate-200 rounded-full p-2 cursor-pointer' onClick={()=>(handleThemeMode('dark'))}/> 
					: <FaSun size={40} className='bg-slate-200 rounded-full p-2 cursor-pointer' onClick={()=>(handleThemeMode('light'))}/> 
				}
			</div>
		</div>
    )
}

export default Headers