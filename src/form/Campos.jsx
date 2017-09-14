import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, RadioGroup, RadioButton, TextField } from '../react-material-easy';

export default class Campos extends Component {
	static propTypes = {
		mudouAlgo: PropTypes.func
	}

	handleChange = e => {
		this.props.mudouAlgo({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div>
				<div>
					<TextField name="nome" label="Nome"
						helpText="Motherfucker"
						onChange={this.handleChange} size="22" autoFocus/>
					<Checkbox defaultChecked name="nacional"
						onChange={this.handleChange}>Nacional</Checkbox>
				</div>
				<div>
					<TextField name="local" label="Local"
						helpText="Where is it from?"
						onChange={this.handleChange}/>
					<RadioGroup name="quale" onChange={this.handleChange}>
						<RadioButton value="bom">Bom</RadioButton>
						<RadioButton value="ruim" defaultChecked>Ruim</RadioButton>
						<RadioButton value="indiferente">Indiferente</RadioButton>
					</RadioGroup>
				</div>
			</div>
		);
	}
}
