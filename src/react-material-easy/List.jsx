/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import '@material/list/dist/mdc.list.min.css';
import { ListItem } from './ListItem';
import { ListSeparator } from './ListSeparator';

export const List = (props) => {
	let blocks = [];
	props.children.forEach(child => {
		if (child.type === ListSeparator) {
			blocks.push(child);
		} else if (child.type === ListItem) {
			if (!blocks.length || !Array.isArray(blocks[blocks.length - 1])) {
				blocks.push([]);
			}
			blocks[blocks.length - 1].push(child);
		}
	});

	return (
		<div>
			{blocks.map((block, i) => {
				if (Array.isArray(block)) {
					return (
						<div className="mdc-list-group" key={i}>
							<ul className="mdc-list">
								{block.map(it => it)}
							</ul>
						</div>
					);
				}
				return React.cloneElement(block, { key: i });
			})}
		</div>
	);
};