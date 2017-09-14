/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/radio/dist/mdc.radio.min.css';
import { MDCRadio } from '@material/radio/dist/mdc.radio.min.js';
import { FormField } from './FormField';

export class RadioButton extends Component {
	static propTypes = {
		defaultChecked: PropTypes.bool,
		disabled: PropTypes.bool,
		id: PropTypes.string,
		onClick: PropTypes.func
	}

	static _nextId = 0;

	static _getNextId() {
		return 'rme-radio-button__autogen_' + (RadioButton._nextId++);
	}

	componentWillMount() {
		this.idThatWeMustHave = (this.props.id === undefined) ?
			RadioButton._getNextId() : this.props.id;
	}

	componentDidMount() {
		this.mdcComponent = new MDCRadio(this.divElem);
		if (this.props.defaultChecked) {
			this.mdcComponent.checked = true;
			this.handleClick();
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleClick = (ev) => {
		if (this.props.onClick) {
			this.props.onClick({
				target: {
					name: this.props.name,
					value: this.props.value
				},
				type: 'click'
			});
		}
	}

	render() {
		let { checked, children, className,
			id, type, onClick, ...otherProps } = this.props;

		let classes = 'mdc-radio' +
			(this.props.disabled ? ' mdc-radio--disabled' : '');

		return (
			<FormField>
				<div
					className={classes}
					ref={el => this.divElem = el}>
					<input
						className="mdc-radio__native-control"
						id={this.idThatWeMustHave}
						type="radio"
						onClick={this.handleClick}
						{...otherProps}/>
					<div className="mdc-radio__background">
						<div className="mdc-radio__outer-circle"></div>
						<div className="mdc-radio__inner-circle"></div>
					</div>
				</div>
				<label htmlFor={this.idThatWeMustHave}>
					{children}
				</label>
			</FormField>
		);
	}
}
