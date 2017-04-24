import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StackNavigatorStyles } from '../styles/navigators';
import Tabs from './tabs';

const Stack = StackNavigator({
	Home: { screen: Tabs }
},{
	headerMode: 'none',
	cardStyle: StackNavigatorStyles.card
});

export default Stack;
