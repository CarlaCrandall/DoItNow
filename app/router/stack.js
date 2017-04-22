import React from 'react';
import { StackNavigator } from 'react-navigation';
import Tabs from './tabs';

const Stack = StackNavigator({
	Home: { screen: Tabs }
},{
	headerMode: 'none'
});

export default Stack;
