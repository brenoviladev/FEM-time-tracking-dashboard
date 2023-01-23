import React, { useState } from "react";

import "./app.css";
import data from "./utils/data.json";
import { cardImgs, menuIcon } from "./assets/images/index";

import Card from "./components/Card/Card";
import UserCard from "./components/userCard/UserCard";

const App = () => {
	const [frequency, setFrequency] = useState("weekly");

	const toggleTimeFrames = newFreq => {
		document.getElementsByClassName(frequency)[0].classList.remove("active");
		setFrequency(newFreq);
		document.getElementsByClassName(newFreq)[0].classList.add("active");
	};

	const cardElements = data.map(({ title, timeframes }, i) => (
		<Card
			key={i}
			title={title}
			menuIcon={menuIcon}
			cardImg={cardImgs[i]}
			timeframes={timeframes[frequency]}
		/>
	));

	return (
		<main>
			<UserCard toggleTimeFrames={toggleTimeFrames} />
			{cardElements}
		</main>
	);
};

export default App;
