import React from "react";
import Search from "../components/Search";
import axios from "axios";

import Card from "./Card";
import { render } from "@testing-library/react";

require("dotenv").config();
console.log(process.env.REACT_APP_API_KEY);
class App extends React.Component {
	state = {
		data: {},
		error: null
	};

	onSearchSubmit = async term => {
		try {
			const response = await axios.get(
				`${process.env.PROXY}api.weatherstack.com/current`,
				{
					params: {
						access_key: process.env.REACT_APP_API_KEY,
						query: term
					}
				}
			);

			this.setState({ data: response.data });
		} catch (err) {
			alert(err);
			this.setState({ error: err });
		}
	};
	render() {
		return (
			<div className="container">
				<Search onSubmitOwn={this.onSearchSubmit} />
				<Card data={this.state.data} error={this.state.error} />
			</div>
		);
	}
}

export default App;
