import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StackNavigatorStyles } from '../styles/navigators';
import { colors, fontSizes, fontWeights } from '../styles/vars';
import Tabs from './tabs';

const Stack = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			headerTitle: 'Do It Now',
			headerStyle: {
				backgroundColor: colors.red
			},
			headerTitleStyle: {
				color: colors.white,
				fontSize: fontSizes.medium,
				fontWeight: fontWeights.light
			}
		}
	}
},{
	cardStyle: StackNavigatorStyles.card
});

export default Stack;
