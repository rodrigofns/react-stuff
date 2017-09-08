import React, { Component } from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import './fixes.css';

export default class DialogFooter extends Component {
	render() {
		return (
			<footer className="mdc-dialog__footer Dialog-footer">
				{this.props.children}
			</footer>
		);
	}
}
