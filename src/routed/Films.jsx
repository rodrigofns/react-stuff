import React, { Component } from 'react';

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
				{this.state.loading ? (<div>Loading...</div>) : null}
				{this.state.films ? (
					<ul>
					{this.state.films.map((f, i) => (
						<li key={i}>{f.name} ({f.year})</li>
					))}
					</ul>
					) : null
				}
			</div>
		);
	}
}
