import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Campos from './blocos/Campos';
import Avisador from './blocos/Avisador';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { nome: '', local: '' };
	}

	mudouTexto = (val) => {
		this.setState({
			nome: val.nome,
			local: val.local
		});
	}

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
			<div>
				<h2>THE FUCKING APP</h2>
				<h3>Campos:</h3>
				<Campos mudouAlgo={this.mudouTexto}/>
				<h3>Avisador:</h3>
				<Avisador nome={this.state.nome} local={this.state.local}/>
			</div>
		);
	}
}
