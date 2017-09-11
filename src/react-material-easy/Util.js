/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

export default class Util {
	static extractChild(childrenArray, component) {
		let childIdx = childrenArray.findIndex(ce => ce.type === component);
		return childIdx === -1 ? null : childrenArray.splice(childIdx, 1);
	}

	static extractChildren(childrenArray, componentsArray) {
		let extracted = [];
		let i = 0;
		while (i < childrenArray.length) {
			if (componentsArray.indexOf(childrenArray[i].type) !== -1) {
				extracted.push(childrenArray.splice(i, 1)[0]);
			} else {
				++i;
			}
		}
		return extracted;
	}
}
