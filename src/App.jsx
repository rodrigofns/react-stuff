import React, { Component } from 'react';
// import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import {
	// Drawer,
	// Layout,
	// LayoutBody,
	LayoutFooter,
	// ListItem,
	// ListSeparator,
	RoutedLayout,
	RoutedLayoutNav,
	RoutedLayoutNavSeparator,
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

			// <BrowserRouter>
			// 	<Layout>
			// 		<Toolbar>
			// 			<ToolbarTitle>Material girl app</ToolbarTitle>
			// 		</Toolbar>
			// 		<Drawer>
			// 			<ListItem><NavLink exact activeStyle={{background:'#f0f0f0'}} to="/">Home</NavLink></ListItem>
			// 			<ListSeparator/>
			// 			<ListItem><NavLink activeStyle={{background:'#f0f0f0'}} to="/films">Films</NavLink></ListItem>
			// 			<ListItem><NavLink activeStyle={{background:'#f0f0f0'}} to="/form">Form</NavLink></ListItem>
			// 		</Drawer>
			// 		<LayoutBody>
			// 			<Route exact path="/" component={Home}/>
			// 			<Route path="/films" component={Films}/>
			// 			<Route path="/form" component={Form}/>
			// 		</LayoutBody>
			// 	</Layout>
			// </BrowserRouter>

			<RoutedLayout>
				<RoutedLayoutNav exact to="/" component={Home}>Home</RoutedLayoutNav>
				<RoutedLayoutNavSeparator/>
				<RoutedLayoutNav to="/films" component={Films}>Films</RoutedLayoutNav>
				<RoutedLayoutNav to="/form" component={Form}>Form</RoutedLayoutNav>
				<Toolbar>
					<ToolbarTitle>Fucking material app</ToolbarTitle>
				</Toolbar>
				<LayoutFooter>
					Footer
				</LayoutFooter>
			</RoutedLayout>
		);
	}
}
