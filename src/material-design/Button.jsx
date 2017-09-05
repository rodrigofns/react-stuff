import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/button/dist/mdc.button.min.css';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min.js';

export default class Button extends Component {
	static propTypes = {
		accent: PropTypes.oneOf([true, false, 'accent']),
		disabled: PropTypes.bool,
		primary: PropTypes.oneOf([true, false, 'primary']),
		raised: PropTypes.oneOf([true, false, 'raised']),
		type: PropTypes.oneOf(['button', 'submit', 'reset']),
		onClick: PropTypes.func
	}

	componentDidMount() {
		this.mdcRipple = new MDCRipple(this.buttonElement);
	}

	componentWillUnmount() {
		this.mdcRipple.destroy();
	}

	handleClick = (e) => {
		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	render() {
		let classes = 'mdc-button' +
			(this.props.accent ? ' mdc-button--accent' : '') +
			(this.props.primary ? ' mdc-button--primary' : '') +
			(this.props.raised ? ' mdc-button--raised' : '');

		return (
			<button className={classes}
				ref={(el) => this.buttonElement = el}
				type={this.props.type}
				disabled={this.props.disabled}
				onClick={this.handleClick}
				data-mdc-auto-init="MDCRipple">
				{this.props.children}
			</button>
		);
	}
}
