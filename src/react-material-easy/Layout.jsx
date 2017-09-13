/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './Layout.css';
import { Drawer } from './Drawer';
import { LayoutBody } from './LayoutBody';
import { Toolbar } from './Toolbar';
import Util from './Util';

export class Layout extends Component {
	handleHamburgerClick = (ev) => {
		this.divElement.classList.toggle('rme-Layout-wrapper-hidden', ev.isOpen);
	}

	render() {
		let elems = Util.filterChildren(this.props.children, {
			toolbar: Toolbar,
			drawer: Drawer,
			body: LayoutBody
		});

		return (
			<div
				className="rme-Layout-wrapper"
				ref={el => this.divElement = el}>
				{React.cloneElement(elems.toolbar, {
					onHamburgerClick: this.handleHamburgerClick
				})}
				<div className="mdc-toolbar-fixed-adjust rme-Layout-body">
					{elems.drawer}
					{elems.body}
				</div>
			</div>
		);
	}
};
