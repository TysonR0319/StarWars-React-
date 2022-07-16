import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card.jsx"

export const Home = () => {
	return (
	<div className="container">
		<div className="row">
			<div className="col-3">
				<Card />
			</div>
		</div>
	</div>
	)
};
