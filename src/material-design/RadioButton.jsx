import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/radio/dist/mdc.radio.min.css';
import { MDCRadio } from '@material/radio/dist/mdc.radio.min.js';

export default class RadioButton extends Component {
	static propTypes = {
		defaultChecked: PropTypes.oneOf([true, false, 'defaultChecked']),
		label: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		_name: PropTypes.string,
		_onClick: PropTypes.func
	}

	componentDidMount() {
		this.mdcComponent = new MDCRadio(this.divElement);
		if (this.props.defaultChecked) {
			this.mdcComponent.checked = true;
			this.handleClick();
		}
	}

	componentWillUnmount() {
		this.mdcComponent.destroy();
	}

	handleClick = (e) => {
		if (this.props._onClick) {
			this.props._onClick({
				target: {
					name: this.props._name,
					value: this.props.value
				},
				type: 'click'
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
						name={this.props._name}
						value={this.props.value}
						defaultChecked={this.props.defaultChecked}
						onClick={this.handleClick}
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