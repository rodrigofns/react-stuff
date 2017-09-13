/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/card/dist/mdc.card.min.css';
import './Card.css';
import { CardBody } from './CardBody';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';
import Util from './Util';

export const Card = (props) => {
	let { children, className, ...otherProps } = props;

	let elems = Util.filterChildren(children, {
		title: CardTitle,
		subtitle: CardSubtitle,
		body: CardBody
	});

	if (!elems.title && !elems.subtitle && !elems.body) {
		return (
			<div
				className={Util.mergeClass('mdc-card rme-card__wrap', className)}
				{...otherProps}>
				{children}
			</div>
		);
	}

	return (
		<div
			className={Util.mergeClass('mdc-card rme-card__wrap', className)}
			{...otherProps}>
			<section className="mdc-card__primary">
				{elems.title}
				{elems.subtitle}
			</section>
			{elems.body}
		</div>
	);
};
