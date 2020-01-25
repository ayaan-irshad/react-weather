import axios from 'axios';

export const weather = async query => {
	const response = await axios.get("http://api.weatherstack.com/current", {
		params: {
			access_key: process.env.REACT_APP_API_KEY,
			query: query
		}
	});

	console.log(response.data);
};
