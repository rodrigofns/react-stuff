/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/checkbox/dist/mdc.checkbox.min.css';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min.js';
import { FormField } from './FormField';

export class Checkbox extends Component {
	static propTypes = {
		defaultChecked: PropTypes.bool,
		id: PropTypes.string,
		onChange: PropTypes.func
	}

	static _nextId = 0;

	static _getNextId() {
		return 'rme-checkbox__autogen_' + (Checkbox._nextId++);
	}

	componentWillMount() {
		this.idThatWeMustHave = (this.props.id === undefined) ?
			Checkbox._getNextId() : this.props.id;
	}

	componentDidMount() {
		this.mdcComponent = new MDCCheckbox(this.divElem);
		if (this.props.defaultChecked) {
			this.handleChange();
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
					value: this.mdcComponent.checked
				},
				type: 'change'
			});
		}
	}

	render() {
		let { checked, children, className, type, value, ...otherProps } = this.props;

		let classes = 'mdc-checkbox' +
			(otherProps.disabled ? ' mdc-checkbox--disabled' : '');

		return (
			<FormField>
				<div
					className={classes}
					ref={el => this.divElem = el}>
					<input
						id={this.idThatWeMustHave}
						type="checkbox"
						className="mdc-checkbox__native-control"
						onChange={this.handleChange}
						{...otherProps}/>
					<div className="mdc-checkbox__background">
						<svg
							className="mdc-checkbox__checkmark"
							viewBox="0 0 24 24">
							<path
								className="mdc-checkbox__checkmark__path"
								d="M1.73,12.91 8.1,19.28 22.79,4.59"
								fill="none"
								stroke="white"/>
						</svg>
						<div className="mdc-checkbox__mixedmark"></div>
					</div>
				</div>
				<label htmlFor={this.idThatWeMustHave}>
					{children}
				</label>
			</FormField>
		);
	}
}
