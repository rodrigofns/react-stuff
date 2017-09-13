/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import './RadioGroup.css';
import { RadioButton } from './RadioButton';

export class RadioGroup extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func
	}

	handleClick = (ev) => {
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					name: this.props.name,
					value: ev.target.value
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
			<div className="rme-radio-group__wrap">
				{elems}
			</div>
		);
	}
}
