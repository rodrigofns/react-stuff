/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/form-field/dist/mdc.form-field.min.css';
import './FormField.css';
import Util from './Util';

export const FormField = (props) => {
	let { className, ...otherProps } = props;

	return (
		<div
			className={Util.mergeClass('mdc-form-field rme-form-field__wrap', className)}
			{...otherProps}>
		</div>
	);
};
