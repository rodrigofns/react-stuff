/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/select/dist/mdc.select.min.css';
import './Select.css';
import Util from './Util';

export const Select = (props) => {
	let { className, ...otherProps } = props;

	return (
		<select
			className={Util.mergeClass('mdc-select rme-select__select', className)}
			{...otherProps}>
		</select>
	);
};
