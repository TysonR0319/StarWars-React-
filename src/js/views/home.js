import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Carousel} from "../component/carousel.jsx"

export const Home = () => {
	
	return (
	<div className="container">
		<h1 className="characters glow">Characters</h1>
			<Carousel routePath="people"/>
		<h1 className="planets glow">Planets</h1>
			<Carousel routePath="planets"/>
		
		
	</div>
	)
};
