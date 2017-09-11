/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/textfield/dist/mdc.textfield.min.css';
import './TextField.css';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield.min.js';

export class TextField extends Component {
	static propTypes = {
		autoFocus: PropTypes.oneOf([true, false, 'autoFocus']),
		defaultValue: PropTypes.string,
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		id: PropTypes.string,
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		onChange: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCTextfield(this.divElement);
		if (this.props.autoFocus) {
			this.divElement.getElementsByTagName('input')[0].focus();
		}
		if (this.props.defaultValue) {
			this.handleChange({
				target: {
					value: this.props.defaultValue
				}
			});
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleChange = (ev) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: ev.target.value
				},
				type: 'change'
			});
		}
	}

	render() {
		return (
			<div
				className="mdc-textfield rme-TextField-wrap"
				data-mdc-auto-init="MDCTextfield"
				ref={el => this.divElement = el}>
				<input
					className="mdc-textfield__input rme-TextField-input"
					defaultValue={this.props.defaultValue}
					disabled={this.props.disabled}
					id={this.props.id}
					name={this.props.name}
					size={this.props.size}
					type="text"
					onChange={this.handleChange}/>
				<label
					className="mdc-textfield__label"
					htmlFor={this.props.name}>
					{this.props.label}
				</label>
			</div>
		);
	}
}