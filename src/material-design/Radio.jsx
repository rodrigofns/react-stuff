import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/radio/dist/mdc.radio.min.css';
import { MDCRadio } from '@material/radio/dist/mdc.radio.min.js';

export default class Radio extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCRadio(this.divElement);
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleChange = (e) => {
		let radios = document.getElementsByName(this.props.name);
		for (let i = 0; i < radios.length; ++i) {
			if (radios[i].name !== this.props.name) {
				radios[i].value = '';
			}
		}console.log(this.props.value)
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.props.value
				},
				type: 'change'
			});
		}
	}

	render() {
		let labelStyle = {
			display: 'inline-block'
		};
		let mdcStyle = {
			top: '13px'
		};
		let divStyle = {
			display: 'inline-block',
			cursor: 'pointer',
			MozUserSelect: 'none',
			WebkitUserSelect: 'none',
			msUserSelect: 'none'
		};
		return (
			<label style={labelStyle}>
				<div className="mdc-radio"
					style={mdcStyle}
					ref={el => this.divElement = el}>
					<input type="radio"
						name={this.props.name}
						value={this.props.value}
						onChange={this.handleChange}
						defaultChecked={this.props.defaultChecked}
						className="mdc-radio__native-control"/>
					<div className="mdc-radio__background">
						<div className="mdc-radio__outer-circle"></div>
						<div className="mdc-radio__inner-circle"></div>
					</div>
				</div>
				<div style={divStyle}>{this.props.label}</div>
			</label>
		);
	}
}
