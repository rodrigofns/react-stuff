import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.min.css';
import './fixes.css';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog.min.js';

export default class Dialog extends Component {
	static propTypes = {
		open: PropTypes.bool,
		title: PropTypes.string,
		onBeforeClose: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCDialog(this.asideElement);
		this.mdcComponent.listen('MDCDialog:accept', () => {
			if (this.onBeforeClose) {
				this.onBeforeClose();
			}
		});
		this.mdcComponent.listen('MDCDialog:cancel', () => {
			if (this.onBeforeClose) {
				this.onBeforeClose();
			}
		});
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.open) {
			this.mdcComponent.show();
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	render() {
		return (
			<aside className="mdc-dialog"
				ref={el => this.asideElement = el}>
				<div className="mdc-dialog__surface">
					<header className="mdc-dialog__header">
						<h2 className="mdc-dialog__header__title">
							{this.props.title}
						</h2>
					</header>
					<section className="mdc-dialog__body">
						{this.props.children}
					</section>
					<footer className="mdc-dialog__footer">
						<button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
						<button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
					</footer>
				</div>
				<div className="mdc-dialog__backdrop"></div>
			</aside>
		);
	}
}
