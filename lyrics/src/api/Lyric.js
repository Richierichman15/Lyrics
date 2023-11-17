import axios from "axios";

 async function Lyric(req, res) {
  const options = {
    method: "GET",
    url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${req.query.id}/lyrics`,
    headers: {
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
};
console.log('here', process.env.NEXT_PUBLIC_RAPIDAPI_KEY)
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
      console.error(error);
  }
};

export default Lyric;