import React from "react";
import "./Card.css";
import mySvg from "../../icons/sunny.svg";
function Card() {
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
	return (
		<div className="card">
			<div className="card--details">
				<h3 className="card--details__heading">Berlin</h3>
				<h4 className="card--details__description" style={{ color: desColor }}>
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

export default Card;
