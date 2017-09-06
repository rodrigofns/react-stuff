import React, { Component } from 'react';
import Button from '../material-design/Button';
import Dialog from '../material-design/Dialog';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { abreJanela: false }; // https://material-ui-1dab0.firebaseapp.com/demos/dialogs/
	}

	abre = (e) => {
		this.setState({ abreJanela: true });
	}

	fecha = (e) => {
		this.setState({ abreJanela: false });
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>Hey.</p>
				<Button raised onClick={this.abre}>Pipocar</Button>
				<Dialog title="Esta é uma janela"
					open={this.state.abreJanela}
					onBeforeClose={this.fecha}>
					Uma frase.
				</Dialog>
			</div>
		);
	}
}
