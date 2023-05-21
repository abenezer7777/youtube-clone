import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'


const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    // 'X-RapidAPI-Key': ProcessingInstruction.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '08cca068f9mshe5aec91f94946c6p187911jsn3c7ba2319c80',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, 
    options);

    return data;
} 