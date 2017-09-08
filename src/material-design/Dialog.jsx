import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './fixes.css';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog.min.js';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';

export { DialogHeader, DialogFooter };

export default class Dialog extends Component {
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
		this.mdcComponent = new MDCDialog(this.asideElement);
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

	extractChild(children, component) {
		let childIdx = children.findIndex(ce => ce.type === component);
		return childIdx === -1 ? null : children.splice(childIdx, 1);
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
		let elems = Children.toArray(this.props.children);
		let header = this.extractChild(elems, DialogHeader);
		let footer = this.extractChild(elems, DialogFooter);
		let surfaceStyle = this.computeSurfaceStyle();

		return (
			<aside className="mdc-dialog"
				id={this.props.id}
				ref={el => this.asideElement = el}>
				<div className="mdc-dialog__surface"
					style={surfaceStyle}>
					{header}
					<section className="mdc-dialog__body Dialog-body">
						{elems}
					</section>
					{footer}
				</div>
				<div className="mdc-dialog__backdrop"></div>
			</aside>
		);
	}
}
