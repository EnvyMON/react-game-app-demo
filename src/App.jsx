import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Headers from './components/Headers'
import { useTheme } from './stores/appTheme'

//<div className={`${bgThemeMode}`}>

function App() {

	const { bgThemeMode } = useTheme();

	return (
		<div className={`${bgThemeMode} ${bgThemeMode == 'dark' ? 'bg-[#121212]': null} min-h-[100vh] `}>
			<Headers />
			<HomePage />
		</div>
	)
}

export default App
