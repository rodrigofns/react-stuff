/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogHeader.css';

export const DialogHeader = (props) => (
	<header className="mdc-dialog__header">
		<h2 className="mdc-dialog__header__title rme-DialogHeader-title">
			{props.children}
		</h2>
	</header>
);
