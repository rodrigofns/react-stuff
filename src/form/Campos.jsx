import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Checkbox,
	RadioGroup,
	RadioButton,
	Select,
	TextField
} from '../react-material-easy';

export default class Campos extends Component {
	static propTypes = {
		mudouAlgo: PropTypes.func
	}

	handleChange = e => {
		console.log(e.target.name, e.target.value);
		this.props.mudouAlgo({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div>
				<div>
					<TextField name="nome" label="Nome"
						onChange={this.handleChange} size="22" autoFocus/>
					<Select name="brand" onChange={this.handleChange}>
						<option value="ebmm">Music Man</option>
						<option value="prs">PRS</option>
						<option value="suhr">Suhr</option>
					</Select>
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
