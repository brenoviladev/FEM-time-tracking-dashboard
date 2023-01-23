import React from "react";

import "./usercard.css";
import { imgJeremy } from "../../assets/images/index";

const userCard = ({ toggleTimeFrames }) => {
	return (
		<div className="userCard">
			<div className="userCard-top">
				<img src={imgJeremy} alt="Person icon" />
				<div className="userCard-top-text">
					<p>Report for</p>
					<h1>Jeremy Robson</h1>
				</div>
			</div>
			<div className="userCard-bottom">
				<p className="daily" onClick={() => toggleTimeFrames("daily")}>
					Daily
				</p>
				<p className="weekly active" onClick={() => toggleTimeFrames("weekly")}>
					Weekly
				</p>
				<p className="monthly" onClick={() => toggleTimeFrames("monthly")}>
					Monthly
				</p>
			</div>
		</div>
	);
};

export default userCard;
