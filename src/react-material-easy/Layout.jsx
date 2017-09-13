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
		this.divElem.classList.toggle('rme-layout__wrapper-hidden', ev.isOpen);
	}

	render() {
		let elems = Util.filterChildren(this.props.children, {
			toolbar: Toolbar,
			drawer: Drawer,
			body: LayoutBody
		});

		if (elems.toolbar) {
			elems.toolbar = React.cloneElement(elems.toolbar, {
				onHamburgerClick: this.handleHamburgerClick
			});
		}

		let classes = (elems.toolbar ? 'mdc-toolbar-fixed-adjust ' : '') +
			'rme-layout__body';

		return (
			<div
				className="rme-layout__wrapper"
				ref={el => this.divElem = el}>
				{elems.toolbar}
				<div className={classes}>
					{elems.drawer}
					{elems.body}
				</div>
			</div>
		);
	}
};
