/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.min.css';
import './Card.css';
import { CardBody } from './CardBody';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';
import Util from './Util';

export const Card = (props) => {
	let elems = Util.filterChildren(props.children, {
		title: CardTitle,
		subtitle: CardSubtitle,
		body: CardBody
	});

	if (!elems.title && !elems.subtitle && !elems.body) {
		return (
			<div
				className={Util.mergeClass('mdc-card rme-card__wrap', props.className)}
				style={props.style}>
				{props.children}
			</div>
		);
	}

	return (
		<div
			className={Util.mergeClass('mdc-card rme-card__wrap', props.className)}
			style={props.style}>
			<section className="mdc-card__primary">
				{elems.title}
				{elems.subtitle}
			</section>
			{elems.body}
		</div>
	);
};

Card.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};
