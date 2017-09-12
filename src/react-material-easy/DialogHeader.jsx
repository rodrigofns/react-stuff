/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './DialogHeader.css';
import Util from './Util';

export const DialogHeader = (props) => (
	<header
		className={Util.mergeClass('mdc-dialog__header', props)}
		style={props.style}>
		<h2 className="mdc-dialog__header__title rme-DialogHeader-title">
			{props.children}
		</h2>
	</header>
);

DialogHeader.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
