import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './routed/Home';
import Films from './routed/Films';
import Form from './routed/Form';

export default class App extends Component {
	render() {
		return (
			// <div className="App">
			// 	<div className="App-header">
			// 		<img src={logo} className="App-logo" alt="logo" />
			// 		<h2>Welcome to React</h2>
			// 	</div>
			// 	<p className="App-intro">
			// 		To get started, edit <code>src/App.js</code> and save to reload.
			// 	</p>
			// </div>

			// https://reacttraining.com/react-router/web/example/basic
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/films">Films</Link></li>
						<li><Link to="/form">Form</Link></li>
					</ul>
					<hr/>
					<Route exact path="/" component={Home}/>
					<Route path="/films" component={Films}/>
					<Route path="/form" component={Form}/>
				</div>
			</Router>
		);
	}
}
