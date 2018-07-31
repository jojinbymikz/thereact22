

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import content from '../data/data.json';
import Home from '../components/Home.js';
import Login from '../components/Login/Login.js';
import Taskone from '../components/Taskone/Taskone.js';
import Knowoffice from '../components/Knowoffice/Knowoffice.js';
import Questionslider from '../components/Questionslider/Questionslider.js';
import Cafeteria from '../components/Cafeteria/Cafeteria.js';
import Congratulations from '../components/Congratulations/Congratulations.js';
import Coffeeroom from '../components/Coffeeroom/Coffeeroom.js';
import Photograph from '../components/Photograph/Photograph.js';
import Daylog from '../components/Daylog/Daylog.js';
import Final from '../components/Final/Final.js';


import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


window.React = React;

const Root = () => {

	var levels = content.posts.map((i) => {

		let currentId = i.id;

		switch (currentId) {
			case "1":
				console.log("case 1");
				break;
			case "2":
				console.log("case 2");
				break;
			case "3":
				console.log("case 3");
				break;
		}

	});


	return (
		<Router history={history}>
			<div>
				<Route path="/" component={Home} exact />
				<Route path="/Login" component={Login} />
				<Route path="/Taskone" component={Taskone} />
				<Route path="/Knowoffice" component={Knowoffice} />
				<Route path="/Questionslider" component={Questionslider} />
				<Route path="/Cafeteria" component={Cafeteria} />
				<Route path="/Congratulations" component={Congratulations} />
				<Route path="/Coffeeroom" component={Coffeeroom} />
				<Route path="/Photograph" component={Photograph} />
				<Route path="/Daylog" component={Daylog} />
				<Route path="/Final" component={Final} />
			</div>
		</Router>
	);
};

export default Root;

