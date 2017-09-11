/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import { Children } from 'react';

export default class Util {
	static filterChildren(propsChildren, namesAndComponents) {
		let objRet = { };
		let children = Children.toArray(propsChildren);
		let names = Object.keys(namesAndComponents);
		let leftovers = names.find(name => namesAndComponents[name] === null);

		if (leftovers) {
			objRet[leftovers] = [];
		}

		for (let c = 0; c < children.length; ++c) {
			let child = children[c];
			let wasAdded = false;

			for (let n = 0; n < names.length; ++n) {
				let name = names[n];
				let component = namesAndComponents[name];

				if (child.type === component) {
					if (objRet[name] === undefined) {
						objRet[name] = child;
					} else if (Array.isArray(objRet[name])) {
						objRet[name].push(child);
					} else {
						objRet[name] = [objRet[name], child];
					}

					wasAdded = true;
					break;
				}
			}

			if (!wasAdded && leftovers) {
				objRet[leftovers].push(child);
			}
		}

		return objRet;
	}
}
