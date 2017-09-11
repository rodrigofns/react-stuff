/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/list/dist/mdc.list.min.css';

export const ListItem = (props) => (
	<li className="mdc-list-item">{props.children}</li>
);
