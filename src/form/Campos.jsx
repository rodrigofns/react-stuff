import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../material-design/Checkbox';
import TextField from '../material-design/TextField';
import { RadioGroup, RadioButton } from '../material-design/Radio';

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
				<TextField label="Nome" name="nome" onChange={this.handleChange} size="22" autoFocus/>
				<Checkbox label="Nacional" name="nacional" onChange={this.handleChange}/>
				<br/>
				<TextField label="Local" name="local" onChange={this.handleChange}/>
				<RadioGroup name="quale" onChange={this.handleChange}>
					<RadioButton label="Bom" value="bom"/>
					<RadioButton label="Ruim" value="ruim" defaultChecked/>
				</RadioGroup>
			</div>
		);
	}
}
