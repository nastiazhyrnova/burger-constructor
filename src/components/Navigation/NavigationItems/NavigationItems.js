import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/'>Burger Builder</NavigationItem>
		<NavigationItem link='/orders'>Orders</NavigationItem>
		<NavigationItem link='/auth'>Login / Register</NavigationItem>
	</ul>
);

export default NavigationItems;
