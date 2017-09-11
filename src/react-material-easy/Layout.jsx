/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Children } from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './Layout.css';
import { Drawer } from './Drawer';
import { LayoutBody } from './LayoutBody';
import { LayoutFooter } from './LayoutFooter';
import { Toolbar } from './Toolbar';
import Util from './Util';

export const Layout = (props) => {
	let elems = Children.toArray(props.children);
	let toolbar = Util.extractChild(elems, Toolbar);
	let drawer = Util.extractChild(elems, Drawer);
	let layoutBody = Util.extractChild(elems, LayoutBody);
	let layoutFooter = Util.extractChild(elems, LayoutFooter);

	return (
		<div className="rme-Layout-wrapper">
			{toolbar}
			<div className="mdc-toolbar-fixed-adjust rme-Layout-body">
				{drawer}
				{layoutBody}
			</div>
			{layoutFooter}
		</div>
	);
};
