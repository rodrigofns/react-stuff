import React, { Component } from 'react';
import { Card } from '../react-material-easy';
import Campos from './Campos';
import Avisador from './Avisador';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { nome: '', local: '', nacional: false, quale: '' };
	}

	mudou = (vals) => {
		let newState = { };
		['nome', 'nacional', 'local', 'quale'].forEach(p => {
			if (vals.hasOwnProperty(p)) {
				newState[p] = vals[p];
			}
		});
		this.setState(newState);
	}

	render() {
		return (
			<div className="main-content">
				<h1>Form</h1>
				<h2>Campos</h2>
				<Campos mudouAlgo={this.mudou}/>
				<h2>Avisador</h2>
				<Card style={{padding:'10px'}}>
					<Avisador nome={this.state.nome}
						local={this.state.local}
						nacional={this.state.nacional}
						quale={this.state.quale}/>
				</Card>
			</div>
		);
	}
}
