import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';
import './fixes.css';

export default class RadioGroup extends Component {
	static propTypes = {
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
		let elems = Children.map(this.props.children, child => {
			if (child.type === RadioButton) {
				return React.cloneElement(child, {
					_name: this.props.name,
					_onClick: this.handleClick
				});
			}
			return child;
		});
		return (
			<div className="RadioGroup-wrap">
				{elems}
			</div>
		);
	}
}
