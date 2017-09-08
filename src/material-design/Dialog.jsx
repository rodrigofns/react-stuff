import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './fixes.css';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog.min.js';

export default class Dialog extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static _mdcComponents = [];
	static _callbacks = [];

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

	render() {
		// return (
		// 	<aside className="mdc-dialog"
		// 		id={this.props.id}
		// 		ref={el => this.asideElement = el}>
		// 		<div className="mdc-dialog__surface">
		// 			<header className="mdc-dialog__header">
		// 				<h2 className="mdc-dialog__header__title">
		// 					{this.props.title}
		// 				</h2>
		// 			</header>
		// 			<section className="mdc-dialog__body">
		// 				{this.props.children}
		// 			</section>
		// 			<footer className="mdc-dialog__footer">
		// 				<button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
		// 				<button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
		// 			</footer>
		// 		</div>
		// 		<div className="mdc-dialog__backdrop"></div>
		// 	</aside>
		// );
		return (
			<aside className="mdc-dialog"
				id={this.props.id}
				ref={el => this.asideElement = el}>
				<div className="mdc-dialog__surface Dialog-surface">
					<section className="mdc-dialog__body Dialog-body">
						{this.props.children}
					</section>
				</div>
				<div className="mdc-dialog__backdrop"></div>
			</aside>
		);
	}
}
