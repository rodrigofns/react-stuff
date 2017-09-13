/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/drawer/dist/mdc.drawer.min.css';
import './Drawer.css';
import { List } from './List';

export const Drawer = (props) => (
	<nav className="mdc-permanent-drawer rme-drawer__wrap">
		<List>
			{props.children}
		</List>
	</nav>
);
