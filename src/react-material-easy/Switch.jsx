/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/switch/dist/mdc.switch.min.css';
import { FormField } from './FormField';

export class Switch extends Component {
	static propTypes = {
		defaultChecked: PropTypes.bool,
		disabled: PropTypes.bool,
		id: PropTypes.string,
		onChange: PropTypes.func
	}

	static _nextId = 0;

	static _getNextId() {
		return 'rme-switch__autogen_' + (Switch._nextId++);
	}

	constructor(props) {
		super(props);
		this.state = { checked: false };
	}

	componentWillMount() {
		this.idThatWeMustHave = (this.props.id === undefined) ?
			Switch._getNextId() : this.props.id;
	}

	componentDidMount() {
		if (this.props.defaultChecked) {
			this.handleChange();
		}
	}

	handleChange = (ev) => {
		this.setState({ checked: !this.state.checked }, () => {
			if (this.props.onChange) {
				this.props.onChange({
					target: {
						name: this.props.name,
						value: this.state.checked
					},
					type: 'change'
				});
			}
		});
	}

	render() {
		let { children, className, id, type, value,
			onChange, ...otherProps } = this.props;

		let classes = 'mdc-switch' +
			(this.props.disabled ? ' mdc-switch--disabled' : '');

		return (
			<FormField>
				<div className={classes}>
					<input
						className="mdc-switch__native-control"
						id={this.idThatWeMustHave}
						type="checkbox"
						onChange={this.handleChange}
						{...otherProps}/>
					<div className="mdc-switch__background">
						<div className="mdc-switch__knob"></div>
					</div>
				</div>
				<label
					htmlFor={this.idThatWeMustHave}
					className="mdc-switch-label">
					{children}
				</label>
			</FormField>
		);
	}
}
