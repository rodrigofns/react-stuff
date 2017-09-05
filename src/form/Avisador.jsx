import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avisador extends Component {
	static propTypes = {
		nome: PropTypes.string.isRequired,
		local: PropTypes.string.isRequired,
		nacional: PropTypes.bool.isRequired
	}

	render() {
		return (
			<div>
				<div>Nome: {this.props.nome}</div>
				<div>Local: {this.props.local}</div>
				<div>Nacional: {this.props.nacional ? 'sim' : 'não'}</div>
			</div>
		);
	}
}
