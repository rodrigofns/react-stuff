import React, { Component } from 'react';

export default class ListaFilmes extends Component {
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
