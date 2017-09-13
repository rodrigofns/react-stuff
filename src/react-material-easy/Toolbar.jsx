/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './Toolbar.css';
import { ToolbarTitle } from './ToolbarTitle';
import Util from './Util';

export class Toolbar extends Component {
	static propTypes = {
		onHamburgerClick: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.isHambRotated = false;
	}

	handleHamburgerClick = () => {
		this.hambElem.classList.toggle('rme-toolbar__hamburger-rotate',
			this.isHambRotated = !this.isHambRotated);
		if (this.props.onHamburgerClick) {
			this.props.onHamburgerClick({ isOpen: this.isHambRotated });
		}
	}

	render() {
		let elems = Util.filterChildren(this.props.children, {
			title: ToolbarTitle
		});

		return (
			// <header className="mdc-toolbar mdc-toolbar--fixed">
			// 	<div className="mdc-toolbar__row">
			// 		<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
			// 			<a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
			// 			{elems.title}
			// 		</section>
			// 		<section className="mdc-toolbar__section mdc-toolbar__section--align-end">
			// 			<a href="#" className="material-icons mdc-toolbar__icon" alt="Download">file_download</a>
			// 			<a href="#" className="material-icons mdc-toolbar__icon" alt="Print this page">print</a>
			// 			<a href="#" className="material-icons mdc-toolbar__icon" alt="Bookmark this page">more_vert</a>
			// 		</section>
			// 	</div>
			// </header>
			<header className="mdc-toolbar mdc-toolbar--fixed">
				<div className="mdc-toolbar__row rme-toolbar__first-row">
					<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
						<span
							className="material-icons mdc-toolbar__icon--menu rme-toolbar__hamburger"
							onClick={this.handleHamburgerClick}
							ref={el => this.hambElem = el}>
							<svg
								height="25px"
								version="1.1"
								viewBox="0 0 25 25"
								width="25px">
								<g
									fill="none"
									fillRule="evenodd"
									id="TabBar-Icons"
									stroke="none"
									strokeWidth="1">
									<g
										fill="currentColor"
										id="Hamburger">
										<path d="M0,2 L25,2 L25,6 L0,6 L0,2 Z M0,10 L25,10 L25,14 L0,14 L0,10 Z M0,18 L25,18 L25,22 L0,22 L0,18 Z"/>
									</g>
								</g>
							</svg>
						</span>
						{elems.title}
					</section>
					<section className="mdc-toolbar__section mdc-toolbar__section--align-end">
					</section>
				</div>
			</header>
		);
	}
}
