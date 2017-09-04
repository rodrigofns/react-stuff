import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
			<table>
				<tbody>
					<tr>
						<td>Nome:</td>
						<td><input name="nome" size="20" autoFocus onChange={this.mudou}/></td>
					</tr>
					<tr>
						<td>Local:</td>
						<td><input name="local" size="20" onChange={this.mudou}/></td>
					</tr>
				</tbody>
			</table>
		);
	}
}
