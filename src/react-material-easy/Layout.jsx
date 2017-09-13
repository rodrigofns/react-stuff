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
import { LayoutFooter } from './LayoutFooter';
import { Toolbar } from './Toolbar';
import Util from './Util';

export class Layout extends Component {
	handleHamburgerClick = (ev) => {
		console.log(ev)
	}

	render() {
		let elems = Util.filterChildren(this.props.children, {
			toolbar: Toolbar,
			drawer: Drawer,
			body: LayoutBody,
			footer: LayoutFooter
		});

		return (
			<div className="rme-Layout-wrapper">
				{React.cloneElement(elems.toolbar, {
					onHamburgerClick: this.handleHamburgerClick
				})}
				<div className="mdc-toolbar-fixed-adjust rme-Layout-body">
					{elems.drawer}
					{elems.body}
				</div>
				{elems.footer}
			</div>
		);
	}
};
