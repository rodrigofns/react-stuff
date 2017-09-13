/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './ToolbarTitle.css';
import Util from './Util';

export const ToolbarTitle = (props) => (
	<span
		className={Util.mergeClass('mdc-toolbar__title rme-ToolbarTitle-wrap', props.className)}
		style={props.style}>
		{props.children}
	</span>
);

ToolbarTitle.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
