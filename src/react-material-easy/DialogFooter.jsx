/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogFooter.css';
import Util from './Util';

export const DialogFooter = (props) => (
	<footer
		className={Util.mergeClass('mdc-dialog__footer rme-DialogFooter-wrap', props.className)}
		style={props.style}>
		{props.children}
	</footer>
);

DialogFooter.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
