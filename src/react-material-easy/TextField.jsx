/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/textfield/dist/mdc.textfield.min.css';
import './TextField.css';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield.min.js';
import { FormField } from './FormField';
import Util from './Util';

export class TextField extends Component {
	static propTypes = {
		autoFocus: PropTypes.bool,
		helpText: PropTypes.string,
		helpTextPersistent: PropTypes.bool,
		type: PropTypes.oneOf(['email', 'password', 'text', 'url']),
		onChange: PropTypes.func
	}

	static defaultProps = {
		type: 'text'
	}

	componentDidMount() {
		this.mdcComponent = new MDCTextfield(this.divElem);
		if (this.props.autoFocus) {
			this.divElem.getElementsByTagName('input')[0].focus();
		}
		if (this.props.defaultValue) {
			this.handleChange({
				target: {
					value: this.props.defaultValue
				}
			});
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleChange = (ev) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: ev.target.value
				},
				type: 'change'
			});
		}
	}

	render() {
		let { autoFocus, children, className, helpText, helpTextPersistent,
			label, onChange, ...otherProps } = this.props;

		let helpClass = 'mdc-textfield-helptext' +
			(this.props.helpTextPersistent ? ' mdc-textfield-helptext--persistent' : '');

		return (
			<FormField>
				<span>
					<label
						className="mdc-textfield"
						ref={el => this.divElem = el}>
						<input
							className={Util.mergeClass('mdc-textfield__input rme-text-field__input', className)}
							onChange={this.handleChange}
							{...otherProps}/>
						{label ? (
							<span
								className="mdc-textfield__label">
								{label}
							</span>
						) : null}
					</label>
					<p className={helpClass}>
						{helpText ? helpText : (<span>&nbsp;</span>)}
					</p>
				</span>
			</FormField>
		);
	}
}
