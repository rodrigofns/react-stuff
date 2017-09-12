/**
 * Part of React Material Easy
 * @author Rodrigo Cesar de Freitas Dias
 * @see https://github.com/rodrigocfd/react-material-easy
 */

import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './RoutedLayout.css';
import { Drawer } from './Drawer';
import { Layout } from './Layout';
import { LayoutBody } from './LayoutBody';
import { ListItem } from './ListItem';
import { ListSeparator } from './ListSeparator';
import { RoutedLayoutNav } from './RoutedLayoutNav';
import { RoutedLayoutNavSeparator } from './RoutedLayoutNavSeparator';
import Util from './Util';

export const RoutedLayout = (props) => {
	let elems = Util.filterChildren(props.children, {
		routedStuff: [RoutedLayoutNav, RoutedLayoutNavSeparator],
		leftovers: null
	});

	return (
		<BrowserRouter>
			<Layout>
				<Drawer>
					{elems.routedStuff.map((r, i) => {
						if (r.type === RoutedLayoutNav) {
							return (
								<ListItem key={i}>
									<NavLink
										activeClassName="rme-RoutedLayout-current"
										activeStyle={r.props.activeStyle}
										exact={r.props.exact}
										strict={r.props.strict}
										to={r.props.to}>
										{r.props.children}
										</NavLink>
								</ListItem>
							);
						} else if (r.type === RoutedLayoutNavSeparator) {
							return <ListSeparator key={i}/>;
						}
						return null;
					})}
				</Drawer>
				<LayoutBody>
					{elems.routedStuff.map((r, i) => {
						if (r.type === RoutedLayoutNav) {
							return (
								<Route
									component={r.props.component}
									exact={r.props.exact}
									key={i}
									path={r.props.to}
									strict={r.props.strict}/>
							);
						}
						return null;
					})}
				</LayoutBody>
				{elems.leftovers}
			</Layout>
		</BrowserRouter>
	);
};
