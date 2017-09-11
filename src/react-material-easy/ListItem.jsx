/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import '@material/list/dist/mdc.list.min.css';
import './ListItem.css';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min.js';

export class ListItem extends Component {
	componentDidMount() {
		this.mdcRipple = new MDCRipple(this.liElement);
	}

	componentWillUnmount() {
		this.mdcRipple.destroy();
	}

	render() {
		return (
			<li
				className="mdc-list-item rme-ListItem-wrap"
				ref={el => this.liElement = el}>
				{this.props.children}
			</li>
		);
	}
}
