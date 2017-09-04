import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@react-mdc/button';
import Textfield from '@react-mdc/textfield';

export default class Campos extends Component {
	static propTypes = {
		mudouAlgo: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = { nome: '', local: '' };
	}

	mudou = (e) => {
		this.setState({ [e.target.name]: e.target.value },
			() => {
				this.props.mudouAlgo({
					nome: this.state.nome,
					local: this.state.local
				});
			});
	}

	clicou = (e) => {
		console.log(this.state.nome, this.state.local);
	}

	render() {
		return (
			<div>
				<Textfield>
					<Textfield.Input name="nome" onChange={this.mudou}/>
					<Textfield.Label htmlFor="nome">Nome</Textfield.Label>
				</Textfield>
				<br/>
				<Textfield>
					<Textfield.Input name="local" onChange={this.mudou}/>
					<Textfield.Label htmlFor="local">Local</Textfield.Label>
				</Textfield>
				{' '}
				<Button raised accent onClick={this.clicou}>Log fields</Button>
			</div>
		);
	}
}
