import React from "react";
import "./Search.css";

var city;

class Search extends React.Component {
	state = {
		term: ""
	};

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onSubmitOwn(this.state.term);
	};
	render() {
		return (
			<form className="form" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					placeholder="Enter place"
					className="form--field"
					value={this.state.term}
					onChange={e => this.setState({ term: e.target.value })}
				/>
				<input type="submit" value="Submit" className="form--submit" />
			</form>
		);
	}
}

export default Search;
