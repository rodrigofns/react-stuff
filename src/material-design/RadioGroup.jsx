import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

export default class RadioGroup extends Component {
	static propTypes = {
		children: (props, propName, componentName) => {
			let retErr = null;
			const prop = props[propName];
			Children.forEach(prop, child => {
				if (child.type !== RadioButton) {
					retErr = new Error('RadioGroup error: ' +
						'Invalid child "' + child.type + '", ' +
						'should be RadioButton only.');
				}
			});
			return retErr;
		},
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}

	handleClick = (e) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: e.target.value
				},
				type: 'change'
			});
		}
	}

	render() {
		let wrapStyle = { display: 'inline-block' };
		let elems = Children.map(this.props.children, ch => {
			return React.cloneElement(ch, {
				_name: this.props.name,
				_onClick: this.handleClick
			});
		});
		return (
			<div style={wrapStyle}>
				{elems}
			</div>
		);
	}
}
