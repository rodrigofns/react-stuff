/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import '@material/list/dist/mdc.list.min.css';
import './ListItem.css';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min.js';
import Util from './Util';

export class ListItem extends Component {
	componentDidMount() {
		this.mdcRipple = new MDCRipple(this.liElem);
	}

	componentWillUnmount() {
		this.mdcRipple.destroy();
	}

	render() {
		let { className, ...otherProps } = this.props;

		return (
			<li
				className={Util.mergeClass('mdc-list-item rme-list-item__wrap', className)}
				ref={el => this.liElem = el}
				{...otherProps}>
			</li>
		);
	}
}
