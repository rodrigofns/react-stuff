import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../material-design/Checkbox';
import TextField from '../material-design/TextField';

export default class Campos extends Component {
	static propTypes = {
		mudouAlgo: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = { nome: '', local: '', nacional: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value },
			() => {
				this.props.mudouAlgo({
					nome: this.state.nome,
					local: this.state.local,
					nacional: this.state.nacional
				});
			});
	}

	render() {
		return (
			<div>
				<TextField label="Nome" name="nome" onChange={this.handleChange} size="22" autoFocus/>
				<Checkbox name="nacional" label="Nacional" onChange={this.handleChange}/>
				<br/>
				<TextField label="Local" name="local" onChange={this.handleChange}/>
			</div>
		);
	}
}
