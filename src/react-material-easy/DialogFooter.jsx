/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogFooter.css';
import Util from './Util';

export const DialogFooter = (props) => {
	let { className, ...otherProps } = props;

	return (
		<footer
			className={Util.mergeClass('mdc-dialog__footer rme-dialog-footer__wrap', className)}
			{...otherProps}>
		</footer>
	);
};
