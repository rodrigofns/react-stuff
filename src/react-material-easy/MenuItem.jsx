/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import { ListItem } from './ListItem';

export const MenuItem = (props) => {
	let { tabIndex, ...otherProps } = props;

	return (
		<ListItem
			tabIndex="0"
			{...otherProps}>
		</ListItem>
	);
};
