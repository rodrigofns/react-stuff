import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../material-design/TextField';

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

	render() {
		return (
			<div>
				<TextField label="Nome" name="nome" onChange={this.mudou} size="22" autoFocus/><br/>
				<TextField label="Local" name="local" onChange={this.mudou}/>
			</div>
		);
	}
}
