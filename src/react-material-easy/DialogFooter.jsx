/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogFooter.css';

export const DialogFooter = (props) => (
	<footer className="mdc-dialog__footer rme-DialogFooter-wrap">
		{props.children}
	</footer>
);
