/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import '@material/list/dist/mdc.list.min.css';
import '@material/menu/dist/mdc.menu.min.css';
import { MDCSimpleMenu } from '@material/menu/dist/mdc.menu.min.js';
import { MenuAnchor } from './MenuAnchor';
import { MenuItem } from './MenuItem';
import Util from './Util';

export class Menu extends Component {
	static propTypes = {
		onClick: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCSimpleMenu(this.divElem);
		this.values = [];
		Children.forEach(this.props.children, child => {
			if (child.type === MenuItem) {
				this.values.push(child.props.value);
			}
		});
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	openMenu = () => {
		this.mdcComponent.open = true;
	}

	handleClick = (ev) => {
		if (this.props.onClick) {
			this.props.onClick(this.values[Util.whichChild(ev.target)]);
		}
	}

	render() {
		let elems = Util.filterChildren(this.props.children, {
			anchor: MenuAnchor,
			items: MenuItem
		});

		return (
			<div className="mdc-menu-anchor">
				{elems.anchor ?
					React.cloneElement(elems.anchor, {
						onClick: this.openMenu
					})
				: null}
				<div
					className="mdc-simple-menu"
					ref={el => this.divElem = el}
					tabIndex="-1">
					<ul className="mdc-simple-menu__items mdc-list">
						{Children.map(elems.items, child =>
							React.cloneElement(child, {
								onClick: this.handleClick
							})
						)}
					</ul>
				</div>
			</div>
		);
	}
}
