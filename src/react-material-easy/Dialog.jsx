/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './Dialog.css';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog.min.js';
import { DialogHeader } from './DialogHeader';
import { DialogFooter } from './DialogFooter';
import Util from './Util';

export class Dialog extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		width: PropTypes.string,
		minWidth: PropTypes.string,
		maxWidth: PropTypes.string
	}

	static _mdcComponents = [];
	static _callbacks = [];

	static show(componentId, callback) {
		Dialog._mdcComponents[componentId].show();
		Dialog._callbacks[componentId] = callback;
	}

	static close(componentId, data) {
		Dialog._mdcComponents[componentId].close();
		if (Dialog._callbacks[componentId]) {
			Dialog._callbacks[componentId](data);
		}
	}

	componentDidMount() {
		this.mdcComponent = new MDCDialog(this.asideElem);
		let dismiss = () => {
			if (Dialog._callbacks[this.props.id]) {
				Dialog._callbacks[this.props.id]();
			}
		};
		this.mdcComponent.listen('MDCDialog:accept', dismiss);
		this.mdcComponent.listen('MDCDialog:cancel', dismiss);

		Dialog._mdcComponents[this.props.id] = this.mdcComponent;
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
		delete Dialog._mdcComponents[this.props.id];
	}

	computeSurfaceStyle() {
		let surfaceStyle = {
			width: 'auto',
			minWidth: 0,
			maxWidth: 'none'
		};
		['width', 'minWidth', 'maxWidth'].forEach(p => {
			if (this.props[p]) {
				surfaceStyle[p] = this.props[p];
			}
		});
		return surfaceStyle;
	}

	render() {
		let surfaceStyle = this.computeSurfaceStyle();
		let elems = Util.filterChildren(this.props.children, {
			header: DialogHeader,
			footer: DialogFooter,
			leftovers: null
		});

		return (
			<aside
				className="mdc-dialog"
				id={this.props.id}
				ref={el => this.asideElem = el}>
				<div
					className="mdc-dialog__surface"
					style={surfaceStyle}>
					{elems.header}
					<section className="mdc-dialog__body rme-dialog__body">
						{elems.leftovers}
					</section>
					{elems.footer}
				</div>
				<div className="mdc-dialog__backdrop"></div>
			</aside>
		);
	}
}
