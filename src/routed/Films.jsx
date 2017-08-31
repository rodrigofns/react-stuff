import React, { Component } from 'react';
import ListaFilmes from '../blocos/ListaFilmes';

export default class Films extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			films: []
		};
	}

	componentDidMount() {
		var self = this;
		setTimeout(() => {
			fetch('films.json')
				.then(r => r.json())
				.then(data => self.setState({
					loading: false,
					films: data.films
				}))
				.catch(e => console.log('Error', e));
		}, 600);
	}

	render() {
		return (
			<div>
				<h1>Films</h1>
				{this.state.loading ? (
					<div>Loading...</div>
				) : (
					<ListaFilmes filmes={this.state.films}/>
				)}
			</div>
		);
	}
}
