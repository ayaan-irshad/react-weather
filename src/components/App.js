import React from "react";
import Search from "../components/Search";
import axios from "axios";

import Card from "./Card";
import { render } from "@testing-library/react";

require("dotenv").config();
console.log(process.env.REACT_APP_API_KEY);
class App extends React.Component {
	state = {
		data: {}
	};

	onSearchSubmit = async term => {
		const response = await await axios.get(
			"http://api.weatherstack.com/current",
			{
				params: {
					access_key: process.env.REACT_APP_API_KEY,
					query: term
				}
			}
		);

		console.log(response);

		this.setState({ data: response.data });
	};
	render() {
		return (
			<div className="container">
				<Search onSubmitOwn={this.onSearchSubmit} />
				<Card data={this.state.data} />
			</div>
		);
	}
}

export default App;
