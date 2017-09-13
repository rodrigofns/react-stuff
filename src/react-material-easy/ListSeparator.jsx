/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/list/dist/mdc.list.min.css';
import Util from './Util';

export const ListSeparator = (props) => (
	<hr
		className={Util.mergeClass('mdc-list-divider', props.className)}
		style={props.style}/>
);

ListSeparator.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
