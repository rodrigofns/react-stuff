import React, { Component } from 'react';
import Campos from '../blocos/Campos';
import Avisador from '../blocos/Avisador';

export default class Form extends Component {
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
			<div>
				<h1>Form</h1>
				<h2>Campos</h2>
				<Campos mudouAlgo={this.mudouTexto}/>
				<h2>Avisador</h2>
				<Avisador nome={this.state.nome} local={this.state.local}/>
			</div>
		);
	}
}
