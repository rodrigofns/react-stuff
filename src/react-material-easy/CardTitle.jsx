/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/card/dist/mdc.card.min.css';
import Util from './Util';

export const CardTitle = (props) => {
	let { className, ...otherProps } = props;

	return (
		<h1
			className={Util.mergeClass('mdc-card__title mdc-card__title--large', className)}
			{...otherProps}>
		</h1>
	);
};
