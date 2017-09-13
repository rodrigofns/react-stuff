/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import './LayoutBody.css';
import Util from './Util';

export const LayoutBody = (props) => {
	let { className, ...otherProps } = props;

	return (
		<main
			className={Util.mergeClass('rme-layout-body__wrap', className)}
			{...otherProps}>
		</main>
	);
};
