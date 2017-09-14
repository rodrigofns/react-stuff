/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from './RadioButton';

export class RadioGroup extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}

	handleClick = (ev) => {
		if (this.props.onChange && ev.target.value !== this.curVal) {
			this.curVal = ev.target.value;
			this.props.onChange({
				target: {
					name: this.props.name,
					value: this.curVal
				},
				type: 'change'
			});
		}
	}

	render() {
		let { children, name, ...otherProps } = this.props;

		return (
			<span {...otherProps}>
				{Children.map(children, child => {
					if (child.type === RadioButton) {
						return React.cloneElement(child, {
							name: name,
							onClick: this.handleClick
						});
					}
					return child;
				})}
			</span>
		);
	}
}
