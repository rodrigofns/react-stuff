import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/textfield/dist/mdc.textfield.min.css';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield.min.js';

export default class TextField extends Component {
	static propTypes = {
		autoFocus: PropTypes.oneOf([true, false, 'autoFocus']),
		defaultValue: PropTypes.string,
		disabled: PropTypes.oneOf([true, false, 'disabled']),
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

	handleChange = (e) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: e.target.value
				},
				type: 'change'
			});
		}
	}

	render() {
		let fieldStyle = {
			height: 'auto',
			marginTop: '24px'
		};
		let inputStyle = {
			letterSpacing: 'normal'
		};
		return (
			<div className="mdc-textfield"
				style={fieldStyle}
				data-mdc-auto-init="MDCTextfield"
				ref={(el) => this.divElement = el}>
				<input type="text"
					name={this.props.name}
					className="mdc-textfield__input"
					style={inputStyle}
					disabled={this.props.disabled}
					size={this.props.size}
					defaultValue={this.props.defaultValue}
					onChange={this.handleChange}/>
				<label htmlFor={this.props.name}
					className="mdc-textfield__label">
					{this.props.label}
				</label>
			</div>
		);
	}
}
