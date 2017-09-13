/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/linear-progress/dist/mdc.linear-progress.min.css';
import Util from './Util';

export const LinearProgress = (props) => {
	let { children, className, ...otherProps } = props;

	return (
		<div
			className={Util.mergeClass('mdc-linear-progress mdc-linear-progress--indeterminate', className)}
			{...otherProps}>
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
