import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/switch/dist/mdc.switch.min.css';
import './fixes.css';

export default class Switch extends Component {
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

	handleChange = (e) => {
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
			<label className="Switch-wrapLabel">
				<div className={classes}>
					<input type="checkbox"
						name={this.props.name}
						id={this.props.id}
						disabled={this.props.disabled}
						defaultChecked={this.props.defaultChecked}
						onChange={this.handleChange}
						className="mdc-switch__native-control"/>
					<div className="mdc-switch__background">
						<div className="mdc-switch__knob"></div>
					</div>
				</div>
				<div className="Switch-children">
					{this.props.children}
				</div>
			</label>
		);
	}
}
