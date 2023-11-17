import Home from './Home.js';
import 'tailwindcss/tailwind.css';
import React, {useState, useEffect } from 'react';
import LyircFinder from './LyricFinder.js';
import LyricsTest from './LyricsTest.js'
import { Lyric } from './api/Lyric.js';


const App = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		Lyric()
			.then((data) => {
				console.log('here', data);
				setInfo(data)
			})
	}, [])
	return (
		<>
      <Home />
			{/* <LyircFinder /> */}
			{/* <LyricsTest /> */}
		</>
	);
}
export default App;