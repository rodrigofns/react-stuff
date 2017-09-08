import React, { Component } from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './fixes.css';

export default class DialogHeader extends Component {
	render() {
		return (
			<header className="mdc-dialog__header Dialog-header">
				<h2 className="mdc-dialog__header__title">
					{this.props.children}
				</h2>
			</header>
		);
	}
}
