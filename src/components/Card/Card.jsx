import React from "react";

import "./card.css";

const Card = ({ title, timeframes, cardImg, menuIcon }) => (
	<div className={`card card--${title.replace(" ", "")}`}>
		<div className="card-bg">
			<img src={cardImg} alt="icon" />
		</div>

		<div className="card-content">
			<div className="card-content-top">
				<h5 className="card-content-top__title">{title}</h5>
				<img src={menuIcon} alt="menu icon" />
			</div>
			<div className="card-content-bottom">
				<h1 className="card-content-bottom__current">
					{timeframes.current}hrs
				</h1>
				<p className="card-content-bottom__previous">
					Last Week - {timeframes.previous}hrs
				</p>
			</div>
		</div>
	</div>
);

export default Card;
