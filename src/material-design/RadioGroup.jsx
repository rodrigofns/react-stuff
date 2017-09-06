import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends Component {
	static propTypes = {
		children: PropTypes.arrayOf(PropTypes.element),
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
