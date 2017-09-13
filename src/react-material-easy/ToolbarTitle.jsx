/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './ToolbarTitle.css';
import Util from './Util';

export const ToolbarTitle = (props) => {
	let { className, ...otherProps } = props;

	return (
		<span
			className={Util.mergeClass('mdc-toolbar__title rme-toolbar-title__wrap', className)}
			{...otherProps}>
		</span>
	);
};
