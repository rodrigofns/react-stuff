import React, { Component } from 'react';

export default class Avisador extends Component {
	render() {
		return (
			<div>
				<div>Nome: {this.props.nome}</div>
				<div>Local: {this.props.local}</div>
			</div>
		);
	}
}
