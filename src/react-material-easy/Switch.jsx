/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/switch/dist/mdc.switch.min.css';
import './Switch.css';

export class Switch extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		id: PropTypes.string,
		name: PropTypes.string,
		onChange: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = { checked: false };
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
		let classes = 'mdc-switch' +
			(this.props.disabled ? ' mdc-switch--disabled' : '');

		return (
			<label className="rme-switch__wrap-label">
				<div className={classes}>
					<input
						className="mdc-switch__native-control"
						id={this.props.id}
						defaultChecked={this.props.defaultChecked}
						disabled={this.props.disabled}
						name={this.props.name}
						type="checkbox"
						onChange={this.handleChange}
						/>
					<div className="mdc-switch__background">
						<div className="mdc-switch__knob"></div>
					</div>
				</div>
				<div className="rme-switch__children">
					{this.props.children}
				</div>
			</label>
		);
	}
}
