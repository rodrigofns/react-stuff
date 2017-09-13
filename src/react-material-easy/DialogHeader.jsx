/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogHeader.css';
import Util from './Util';

export const DialogHeader = (props) => {
	let { children, className, ...otherProps } = props;

	return (
		<header
			className={Util.mergeClass('mdc-dialog__header', className)}
			{...otherProps}>
			<h2 className="mdc-dialog__header__title rme-dialog-header__title">
				{children}
			</h2>
		</header>
	);
};
