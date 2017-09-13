import React, { Component } from 'react';
import ListaFilmes from './ListaFilmes';
import {
	Button,
	Card
} from '../react-material-easy';

export default class Films extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			films: []
		};
	}

	componentDidMount() {
		this.recarrega();
	}

	recarrega = () => {
		this.setState({ loading: true }, () => {
			setTimeout(() => {
				fetch('films.json')
				.then(r => r.json())
					.then(data => this.setState({
						loading: false,
						films: data.films
					}))
					.catch(e => console.log('Error', e));
			}, 500);
		});
	}

	render() {
		return (
			<div className="main-content">
				<h1>Films</h1>
				<Button raised
					disabled={this.state.loading}
					onClick={this.recarrega}>Reload</Button>
				{this.state.loading ? (
					<p>Loading...</p>
				) : (
					<Card style={{marginTop:'20px'}}>
						<ListaFilmes filmes={this.state.films}/>
					</Card>
				)}
			</div>
		);
	}
}
