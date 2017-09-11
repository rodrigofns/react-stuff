import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
	Drawer,
	Layout,
	LayoutBody,
	ListItem,
	ListSeparator,
	Toolbar,
	ToolbarTitle
} from './react-material-easy';
// import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Films from './films/Films';
import Form from './form/Form';

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
			// <Router>
			// 	<div>
			// 		<ul>
			// 			<li><Link to="/">Home</Link></li>
			// 			<li><Link to="/films">Films</Link></li>
			// 			<li><Link to="/form">Form</Link></li>
			// 		</ul>
			// 		<hr/>
			// 		<Route exact path="/" component={Home}/>
			// 		<Route path="/films" component={Films}/>
			// 		<Route path="/form" component={Form}/>
			// 	</div>
			// </Router>

			<BrowserRouter>
				<Layout>
					<Toolbar>
						<ToolbarTitle>Material girl app</ToolbarTitle>
					</Toolbar>
					<Drawer>
						<ListItem><Link to="/">Home</Link></ListItem>
						<ListSeparator/>
						<ListItem><Link to="/films">Films</Link></ListItem>
						<ListItem><Link to="/form">Form</Link></ListItem>
					</Drawer>
					<LayoutBody>
						<Route exact path="/" component={Home}/>
						<Route path="/films" component={Films}/>
						<Route path="/form" component={Form}/>
					</LayoutBody>
				</Layout>
			</BrowserRouter>
		);
	}
}
