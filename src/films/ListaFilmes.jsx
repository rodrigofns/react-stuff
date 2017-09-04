import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListaFilmes extends Component {
	static propTypes = {
		filmes: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			year: PropTypes.number.isRequired
		})).isRequired
	}

	render() {
		return (
			<ul>
				{this.props.filmes.map((f, i) => (
					<li key={i}>{f.name} ({f.year})</li>
				))}
			</ul>
		);
	}
}
