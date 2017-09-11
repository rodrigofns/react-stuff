/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/list/dist/mdc.list.min.css';
import './ListItem.css';

export const ListItem = (props) => (
	<li className="mdc-list-item rme-ListItem-wrap">
		{props.children}
	</li>
);
