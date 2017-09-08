import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../react-material-design/src/Checkbox';
import TextField from '../react-material-design/src/TextField';
import { RadioGroup, RadioButton } from '../react-material-design/src/Radio';

export default class Campos extends Component {
	static propTypes = {
		mudouAlgo: PropTypes.func
	}

	handleChange = (e) => {
		this.props.mudouAlgo({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div>
				<TextField name="nome" label="Nome" onChange={this.handleChange} size="22" autoFocus/>
				<Checkbox name="nacional" onChange={this.handleChange}>Nacional</Checkbox>
				<br/>
				<TextField name="local" label="Local" onChange={this.handleChange}/>
				<RadioGroup name="quale" onChange={this.handleChange}>
					<RadioButton value="bom">Bom</RadioButton>
					<RadioButton value="ruim" defaultChecked>Ruim</RadioButton>
					<RadioButton value="indiferente">Indiferente</RadioButton>
				</RadioGroup>
			</div>
		);
	}
}
