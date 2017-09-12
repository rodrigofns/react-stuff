/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import './LayoutBody.css';
import Util from './Util';

export const LayoutBody = (props) => (
	<main
		className={Util.mergeClass('rme-LayoutBody-wrap', props)}
		style={props.style}>
		{props.children}
	</main>
);

LayoutBody.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
