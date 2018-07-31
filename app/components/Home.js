import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from "../components/Index/Index";


class Home extends React.Component {
	render() {
		return (
			<section className="home_main">	

				<Index />

			</section >
			);
		}

	}


	export default Home;

