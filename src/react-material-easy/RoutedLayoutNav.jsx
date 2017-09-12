/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import { PropTypes } from 'prop-types';

export const RoutedLayoutNav = () => null;

RoutedLayoutNav.propTypes = {
	activeStyle: PropTypes.object,
	component: PropTypes.func.isRequired,
	exact: PropTypes.bool,
	strict: PropTypes.bool,
	to: PropTypes.string.isRequired
};
