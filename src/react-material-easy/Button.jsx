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
		accent: PropTypes.bool,
		autoFocus: PropTypes.bool,
		id: PropTypes.string,
		primary: PropTypes.bool,
		raised: PropTypes.bool,
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
		let { autoFocus, className,
			accent, primary, raised,
			onClick, ...otherProps } = this.props;

		let classes = 'mdc-button' +
			(this.props.accent ? ' mdc-button--accent' : '') +
			(this.props.primary ? ' mdc-button--primary' : '') +
			(this.props.raised ? ' mdc-button--raised' : '') +
			((this.props.raised && !this.props.accent && !this.props.primary) ? ' mdc-button--primary': '') +
			' rme-button__wrap';

		return (
			<button
				className={classes}
				ref={el => this.buttonElem = el}
				onClick={this.handleClick}
				{...otherProps}>
			</button>
		);
	}
}
