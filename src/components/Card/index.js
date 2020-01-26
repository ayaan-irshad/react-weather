import React, { Fragment } from "react";
import "./Card.css";
import mySvg from "../../icons/sunny.svg";

var desColor = "green";
var d = new Date();
var months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
class Card extends React.Component {
	state = {
		data: {}
	};

	renderContent() {
		if (this.state.new !== undefined) {
			return (
				<div className="card">
					<div className="card--details">
						<h3 className="card--details__heading">
							{this.state.new.request.query}
						</h3>
						<h4
							className="card--details__description"
							style={{ color: desColor }}
						>
							{this.state.new.current.weather_descriptions[0]}
						</h4>
						<h5 className="card--details__date">{`${d.getDate()} ${
							months[d.getMonth()]
						}, ${d.getFullYear()}`}</h5>
					</div>
					<h1>{`${this.state.new.current.temperature} °C`}</h1>
					<img
						src={this.state.new.current.weather_icons[0]}
						alt="sunny weather icon"
						className="card--img"
					/>
				</div>
			);
		} else if (this.state.new === undefined) {
			return (
				<div className="card">
					<div className="card--details">
						<h3 className="card--details__heading">
							{this.state.data.location}
						</h3>
						<h4
							className="card--details__description"
							style={{ color: desColor }}
						>
							{this.state.data.description}
						</h4>
						<h5 className="card--details__date">{`${d.getDate()} ${
							months[d.getMonth()]
						}, ${d.getFullYear()}`}</h5>
					</div>

					<img src={mySvg} alt="sunny weather icon" className="card--img" />
				</div>
			);
		}
	}
	componentDidMount() {
		return (
			<div className="card">
				<div className="card--details">
					<h3 className="card--details__heading">Berlin</h3>
					<h4
						className="card--details__description"
						style={{ color: desColor }}
					>
						Sunny
					</h4>
					<h5 className="card--details__date">{`${d.getDate()} ${
						months[d.getMonth()]
					}, ${d.getFullYear()}`}</h5>
				</div>

				<img src={mySvg} alt="sunny weather icon" className="card--img" />
			</div>
		);
	}

	componentDidUpdate = prevProps => {
		// console.log(this.props.data.current.temperature);
		// console.log(this.props);
		// this.setState((state, props) => ({ i :n}));
		if (this.props.data !== prevProps.data) {
			//console.log(props);
			this.setState({ new: this.props.data });
			console.log(this.state.new);
		}
	};
	render() {
		return <Fragment>{this.renderContent()}</Fragment>;
	}
}

export default Card;
