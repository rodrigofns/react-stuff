/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.min.css';
import Util from './Util';

export const CardBody = (props) => (
	<section
		className={Util.mergeClass('mdc-card__supporting-text', props.className)}
		style={props.style}>
		{props.children}
	</section>
);

CardBody.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
