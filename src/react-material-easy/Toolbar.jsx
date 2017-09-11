/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Children } from 'react';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import { ToolbarTitle } from './ToolbarTitle';
import Util from './Util';

export const Toolbar = (props) => {
	let elems = Children.toArray(props.children);
	let title = Util.extractChild(elems, ToolbarTitle);

	return (
		<header className="mdc-toolbar mdc-toolbar--fixed">
			<div className="mdc-toolbar__row">
				<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
					<a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
					{title}
				</section>
				<section className="mdc-toolbar__section mdc-toolbar__section--align-end">
					<a href="#" className="material-icons mdc-toolbar__icon" alt="Download">file_download</a>
					<a href="#" className="material-icons mdc-toolbar__icon" alt="Print this page">print</a>
					<a href="#" className="material-icons mdc-toolbar__icon" alt="Bookmark this page">more_vert</a>
				</section>
			</div>
		</header>
	);
};
