import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card.jsx"

export const Home = () => {
	return (
	<div className="container">
		<h1 className="characters">Characters</h1>
		<div className="row">
			{/* create component for carrusell cards for all categories */}
				<Card />
				<Card />
				<Card />
				<Card />
				
			
		</div>
	</div>
	)
};
