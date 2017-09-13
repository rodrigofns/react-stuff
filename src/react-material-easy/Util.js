/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import { Children } from 'react';

export default class Util {
	static addValueAndIfExistMakeArray(object, property, value) {
		if (object[property] === undefined) {
			object[property] = value;
		} else if (Array.isArray(object[property])) {
			object[property].push(value);
		} else {
			object[property] = [object[property], value];
		}
	}

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

			for (let n = 0; n < names.length && !wasAdded; ++n) {
				let name = names[n];
				let components = Array.isArray(namesAndComponents[name]) ?
					namesAndComponents[name] : [namesAndComponents[name]];

				for (let m = 0; m < components.length; ++m) {
					let component = components[m];

					if (child.type === component) {
						Util.addValueAndIfExistMakeArray(objRet, name, child);
						wasAdded = true;
						break;
					}
				}
			}

			if (!wasAdded && leftovers) {
				objRet[leftovers].push(child);
			}
		}

		return objRet;
	}

	static mergeClass(curClasses, moreClasses) {
		return curClasses +
			(moreClasses ? (' ' + moreClasses) : '');
	}
}
