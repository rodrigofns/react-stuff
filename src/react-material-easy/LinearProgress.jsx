/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/linear-progress/dist/mdc.linear-progress.min.css';

export const LinearProgress = (props) => {
	let style = { };
	if (props.width) {
		style.width = props.width;
	}

	return (
		<div
			className="mdc-linear-progress mdc-linear-progress--indeterminate"
			id={props.id}
			style={style}>
			<div className="mdc-linear-progress__buffering-dots"></div>
			<div className="mdc-linear-progress__buffer"></div>
			<div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
				<span className="mdc-linear-progress__bar-inner"></span>
			</div>
			<div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
				<span className="mdc-linear-progress__bar-inner"></span>
			</div>
		</div>
	);
};

LinearProgress.propTypes = {
	id: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
