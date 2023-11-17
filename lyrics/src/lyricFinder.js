import axios from 'axios';
import React, { useState } from 'react'
// import { useEffect } from 'react'

const LyircFinder = () => {
const [song, setSong] = useState([])

const songTitle = "Virginia Beach";
const apiUrl = `https://api.genius.com/songs/${songTitle}`;
const tokenUrl = 'https://api.genius.com/outh/token';
const clientId = 'w8bCjCdI9PjTs-zl1GCOzFKJATnK4eOpHB9zt3cWQXr80w4w6Mj2ahy5URafsazI'
const apiKey = `zqKQHTOtoEEA3ahJw5QtPjUQyboUKDI6wsXY0mSd5aTN5B66aG1Jk5TWyABhOO9zt9mRFkwF0wtqdmXFnvAOUg`
 
axios.post(tokenUrl, null, {
  auth: {
    username: clientId,
    password: apiKey,
  },
  params: {
    grant_type: 'client_credentials',
  },
})
.then(response => {
  const accessToken= response.date.acces_token
  console.log("Access Token:", accessToken);
})

const config = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
  },
};
axios.get(apiUrl, config)

  .then(response => response.json())
  .then(data => {
    const response = data.response
    setSong(response)
    console.log(setSong)
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  // const postData = () => {
    //   const postData = {
      //     key1: '..',
      //     key2: '..'
      //   };
      
    axios.post(apiUrl)
      .then(response => {
        const artistName = response.data.song.artist_names
        console.log('DRAKE?????????', artistName);
        
      })
      .catch(error => {
        console.error("Error", error);
      });
    
      

  
    return(
      <>
        <div>
          {song.map(song => {
            return <h1>{song.title}</h1>
          })}
        </div>
      </>
    )
        }
export default LyircFinder
