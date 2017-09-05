import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/checkbox/dist/mdc.checkbox.min.css';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min.js';

export default class Checkbox extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		label: PropTypes.string.isRequired,
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
		let labelStyle = {
			display: 'inline-block'
		};
		let divStyle = {
			display: 'inline-block',
			paddingBottom: '10px',
			cursor: 'pointer',
			MozUserSelect:'none',
			WebkitUserSelect:'none',
			msUserSelect:'none'
		};
		return (
			<label style={labelStyle}>
				<div className="mdc-checkbox"
					ref={(el) => this.divElement = el}>
					<input type="checkbox"
						name={this.props.name}
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
				<div style={divStyle}>{this.props.label}</div>
			</label>
		);
	}
}
