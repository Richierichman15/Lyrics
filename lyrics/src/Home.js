import axios from 'axios';
import {useState} from 'react';
import './App.css'

export default function Home() {

	const [title, setTitle] = useState('Alan Walker');
	const [searchResults, setSearchResults] = useState(null);
	const [lyrics, setLyrics] = useState(null);

    // async function handler(req, res) {
    //     const options = {
    //       method: "GET",
    //       url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
    //       params: { q: "<REQUIRED>" , per_page: "10", page: "1" },
    //       headers: {
    //         "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
    //         "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    //       },
    //     };
    //     try {
    //       let response = await axios(options);
    //       res.status(200).json(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //   }
      
	const getResults = async () => {
        
		try {
			const res = await axios.get('https://api.genius.com/songs/', {
				params: {q: title },
                headers: {
                    Authorization: "fc4a22df5dmsh43e6348c4cf718ep127404jsncbf660c42355"
                }
			});
			const {data} = res;
			setSearchResults(data.response.hits);
		} catch (error) {
			console.error(error);
		}
	};

    const getLyrics = async id => {
        try {
            setSearchResults(null); 
            const res = await axios.get('https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/', {
                params: {id}
            });
            const {data} = res;
            setLyrics(data.response.lyrics);
        } catch (error) {
            console.error(error);
        }
    };

	return (
		<div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
			<h1 className="text-6xl font-bold text-primary mt-10">
				<span className="text-active">Lyrics</span> App
			</h1>
			<h2 className="text-primary text-2xl font-light mt-6">
				Get the complete lyrics of any given track.
			</h2>
			<form
				className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
				onSubmit={e => {
					getResults(); 
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<input
					type="text"
					className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
					placeholder="Enter a track or artist name eg: Alan Walker"
					onChange={e => {
						setTitle(e.target.value);
						setSearchResults(null);
						setLyrics(null);
					}}
				/>
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:text-active hover:bg-primary sm:px-10"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
			{searchResults && (
				<div className="mt-10">
					<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{searchResults.map(song => (
							<div key={song.result.id} className="pt-6">
								<div className="flow-root bg-light rounded-lg px-4 pb-8">
									<div className="-mt-6">
										<div className="flex items-center justify-center">
											<span className="p-2">
												<img
													src={
														song.result
															.song_art_image_thumbnail_url
													}
													className="w-full h-full rounded-lg"
													alt={
														song.result
															.song_art_image_thumbnail_url
													}
												/>
											</span>
										</div>
										<div className="text-center justify-center items-center">
											<h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
												{song.result.title}
											</h3>
											<span className="mt-2 text-sm text-secondary block">
												{song.result.artist_names}
											</span>
											<button
												className="mt-5 text-md text-active"
												onClick={() => {
													getLyrics(song.result.id);
												}}
											>
												Get Lyrics &rarr;
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}