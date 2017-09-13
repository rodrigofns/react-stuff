/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.min.css';
import Util from './Util';

export const CardSubtitle = (props) => (
	<h2
		className={Util.mergeClass('mdc-card__subtitle', props.className)}
		style={props.style}>
		{props.children}
	</h2>
);

CardSubtitle.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
