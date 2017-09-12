/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';

export const LayoutFooter = (props) => (
	<footer
		className={props.className}
		style={props.style}>
		{props.children}
	</footer>
);

LayoutFooter.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
