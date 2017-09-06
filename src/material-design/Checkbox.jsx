import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/checkbox/dist/mdc.checkbox.min.css';
import './fixes.css';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min.js';

export default class Checkbox extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		disabled: PropTypes.oneOf([true, false, 'disabled']),
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCCheckbox(this.divElement);
		if (this.props.defaultChecked) {
			this.handleChange();
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleChange = (e) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.mdcComponent.checked
				},
				type: 'change'
			});
		}
	}

	render() {
		let classes = 'mdc-checkbox' +
			(this.props.disabled ? ' mdc-checkbox--disabled' : '');

		return (
			<label className="Checkbox-wrapLabel">
				<div className={classes}
					ref={el => this.divElement = el}>
					<input type="checkbox"
						name={this.props.name}
						disabled={this.props.disabled}
						onChange={this.handleChange}
						defaultChecked={this.props.defaultChecked}
						className="mdc-checkbox__native-control"/>
						<div className="mdc-checkbox__background">
							<svg className="mdc-checkbox__checkmark"
								viewBox="0 0 24 24">
								<path className="mdc-checkbox__checkmark__path"
									fill="none"
									stroke="white"
									d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
							</svg>
							<div className="mdc-checkbox__mixedmark"></div>
						</div>
				</div>
				<div className="Checkbox-children">
					{this.props.children}
				</div>
			</label>
		);
	}
}
