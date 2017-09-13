/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/list/dist/mdc.list.min.css';
import Util from './Util';

export const ListSeparator = (props) => {
	let { className, ...otherProps } = props;

	return (
		<hr
			className={Util.mergeClass('mdc-list-divider', className)}
			{...otherProps}/>
	);
};
