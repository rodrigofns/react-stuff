/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/radio/dist/mdc.radio.min.css';
import './RadioButton.css';
import { MDCRadio } from '@material/radio/dist/mdc.radio.min.js';

export class RadioButton extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		id: PropTypes.string,
		value: PropTypes.string.isRequired,
		_name: PropTypes.string,
		_onClick: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCRadio(this.divElement);
		if (this.props.defaultChecked) {
			this.mdcComponent.checked = true;
			this.handleClick();
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleClick = (ev) => {
		if (this.props._onClick) {
			this.props._onClick({
				target: {
					name: this.props._name,
					value: this.props.value
				},
				type: 'click'
			});
		}
	}

	render() {
		let classes = 'mdc-radio rme-RadioButton-mdcRadio' +
			(this.props.disabled ? ' mdc-radio--disabled' : '');

		return (
			<label className="rme-RadioButton-wrapLabel">
				<div
					className={classes}
					ref={el => this.divElement = el}>
					<input
						className="mdc-radio__native-control"
						defaultChecked={this.props.defaultChecked}
						disabled={this.props.disabled}
						id={this.props.id}
						name={this.props._name}
						type="radio"
						value={this.props.value}
						onClick={this.handleClick}
						/>
					<div className="mdc-radio__background">
						<div className="mdc-radio__outer-circle"></div>
						<div className="mdc-radio__inner-circle"></div>
					</div>
				</div>
				<div className="rme-RadioButton-children">
					{this.props.children}
				</div>
			</label>
		);
	}
}