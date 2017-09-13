/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/checkbox/dist/mdc.checkbox.min.css';
import './Checkbox.css';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min.js';

export class Checkbox extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		id: PropTypes.string,
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func
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
		let classes = 'mdc-checkbox' +
			(this.props.disabled ? ' mdc-checkbox--disabled' : '');

		return (
			<label className="rme-checkbox__wrap-label">
				<div
					className={classes}
					ref={el => this.divElem = el}>
					<input
						className="mdc-checkbox__native-control"
						defaultChecked={this.props.defaultChecked}
						disabled={this.props.disabled}
						id={this.props.id}
						name={this.props.name}
						type="checkbox"
						onChange={this.handleChange}/>
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
				<div className="rme-checkbox__children">
					{this.props.children}
				</div>
			</label>
		);
	}
}
