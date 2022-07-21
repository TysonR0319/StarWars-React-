import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { SingleView } from "./component/singleView.jsx";
import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/People.jsx"
import { Planets } from "./views/Planets.jsx"
import { Vehicles } from "./views/Vehicles.jsx"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/*Nav-bar links */}
						<Route exact path="/"> 
							{/*Home*/}
							<Home />
						</Route>
						{/*Character links */}
						<Route exact path="/all-characters">
							{/*All character view*/}
						</Route>
						<Route exact path="/people/:id">
							{/* Character card view */}
							<SingleView category="people"/>
						</Route>
						{/*Planet links */}
						<Route exact path="/all-planets">
							{/*All planets view */}
						</Route>
						<Route exact path="/planets/:id">
							{/* Planet card view */}
							<SingleView category="planets"/>
						</Route>
						{/*Vehicles links */}
						<Route exact path="/all-vehicles">
							{/*All vehicles view */}
						</Route>
						<Route exact path="/vehicles/:id">
							{/* Vehicles card view */}
							<SingleView category="vehicles"/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
