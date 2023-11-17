import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LyricsTest() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with your Genius API access token
    // const accessToken = 'zqKQHTOtoEEA3ahJw5QtPjUQyboUKDI6wsXY0mSd5aTN5B66aG1Jk5TWyABhOO9zt9mRFkwF0wtqdmXFnvAOUg';

    // Replace 'YOUR_GENIUS_API_ENDPOINT' with the actual Genius API endpoint you want to query
    const apiUrl = 'https://api.lyircs.ovh';

    axios
      .get(apiUrl, {
        headers: {
        //   Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setResponse(response.data);
        console.log('here', setResponse)
      })
      .catch((error) => {
        console.error('Error fetching data from Genius API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Genius API Response</h1>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LyricsTest;
