import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';

export default class Campos extends Component {
	constructor(props) {
		super(props);
		this.state = { nome: '', local: '' };
	}

	mudou = (val, e) => {
		this.setState({ [e.target.id]: e.target.value },
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
				{/* <table>
					<tbody>
						<tr>
							<td>Nome:</td>
							<td><input name="nome" size="20" autoFocus onChange={this.mudou}/></td>
						</tr>
						<tr>
							<td>Local:</td>
							<td><input name="local" size="20" onChange={this.mudou}/></td>
						</tr>
						<tr>
							<td>Descrição:</td>
							<td></td>
						</tr>
					</tbody>
				</table> */}
				<div><TextField label="Nome" id="nome" fullWidth={false} size={30} onChange={this.mudou}/></div>
				<div><TextField label="Local" id="local" fullWidth={false} size={30} onChange={this.mudou}/></div>
			</div>
		);
	}
}
