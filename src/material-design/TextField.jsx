import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/textfield/dist/mdc.textfield.min.css';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield.min.js';

export default class TextField extends Component {
	static propTypes = {
		autoFocus: PropTypes.oneOf([true, false, 'autoFocus']),
		defaultValue: PropTypes.string,
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		onChange: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCTextfield(this.inputElement);
		if (this.props.autoFocus) {
			this.inputElement.getElementsByTagName('input')[0].focus();
		}
		if (this.props.defaultValue) {
			this.handleChange({
				target: {
					name: this.props.name,
					value: this.props.defaultValue
				},
				type: 'change'
			});
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleChange = (e) => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}

	render() {
		return (
			<div className="mdc-textfield"
				data-mdc-auto-init="MDCTextfield"
				ref={(el) => this.inputElement = el}>
				<input type="text"
					name={this.props.name}
					className="mdc-textfield__input"
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
