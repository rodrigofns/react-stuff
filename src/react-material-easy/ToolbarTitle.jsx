/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';

export const ToolbarTitle = (props) => (
	<span className="mdc-toolbar__title">{props.children}</span>
);
