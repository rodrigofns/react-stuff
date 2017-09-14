import React, { Component } from 'react';
import {
	Card,
	Switch
} from '../react-material-easy';
import Campos from './Campos';
import Avisador from './Avisador';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mostraValores: false,
			nome: '',
			local: '',
			nacional: false,
			quale: ''
		};
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
				<Switch defaultChecked
					onChange={ev => this.setState({mostraValores: ev.target.value})}>
					Mostrar valores
				</Switch>
				{this.state.mostraValores ? (
					<Card style={{padding:'12px', marginTop:'12px'}}>
						<Avisador nome={this.state.nome}
							local={this.state.local}
							nacional={this.state.nacional}
							quale={this.state.quale}/>
					</Card>
				) : null}
			</div>
		);
	}
}
