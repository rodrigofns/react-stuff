/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/button/dist/mdc.button.min.css';
import './Button.css';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min.js';

export class Button extends Component {
	static propTypes = {
		accent: PropTypes.oneOf([true, false, 'accent']),
		autoFocus: PropTypes.oneOf([true, false, 'autoFocus']),
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		id: PropTypes.string,
		primary: PropTypes.oneOf([true, false, 'primary']),
		raised: PropTypes.oneOf([true, false, 'raised']),
		type: PropTypes.oneOf(['button', 'reset', 'submit']),
		onClick: PropTypes.func
	}

	componentDidMount() {
		this.mdcRipple = new MDCRipple(this.buttonElem);
		if (this.props.autoFocus) {
			this.buttonElem.focus();
		}
	}

	componentWillUnmount() {
		this.mdcRipple.destroy();
	}

	handleClick = (ev) => {
		if (this.props.onClick) {
			this.props.onClick({
				target: { },
				type: 'click'
			});
		}
	}

	render() {
		let classes = 'mdc-button' +
			(this.props.accent ? ' mdc-button--accent' : '') +
			(this.props.primary ? ' mdc-button--primary' : '') +
			(this.props.raised ? ' mdc-button--raised' : '') +
			((this.props.raised && !this.props.accent && !this.props.primary) ? ' mdc-button--primary': '') +
			' rme-button__wrap';

		return (
			<button
				className={classes}
				data-mdc-auto-init="MDCRipple"
				disabled={this.props.disabled}
				id={this.props.id}
				ref={el => this.buttonElem = el}
				type={this.props.type}
				onClick={this.handleClick}>
				{this.props.children}
			</button>
		);
	}
}
