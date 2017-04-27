import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import { Text, View } from 'react-native';
import { Later, Now, Someday } from '../screens';
import { AppTabNavigatorStyles } from '../styles/navigators';
import { colors } from '../styles/vars';

const renderTab = (routeName, focused) => {
	const
		tabName = routeName.charAt(0).toLowerCase() + routeName.slice(1),
		tabStyles = [
			AppTabNavigatorStyles.tab,
			AppTabNavigatorStyles[`tab--${tabName}`]
		];
		labelStyles = [
			AppTabNavigatorStyles.label,
			AppTabNavigatorStyles[`label--${tabName}`]
		];

	return (
		<View style={tabStyles}>
			<Text style={labelStyles}>{routeName.toUpperCase()}</Text>
		</View>
	);
}

const AppTabNavigator = TabNavigator({
	Now: {
		screen: Now,
		navigationOptions: {
			tabBarLabel: ({route, focused}) => renderTab(route.routeName, focused)
		}
	},
	Later: {
		screen: Later,
		navigationOptions: {
			tabBarLabel: ({route, focused}) => renderTab(route.routeName, focused)
		}
	},
	Someday: {
		screen: Someday,
		navigationOptions: {
			tabBarLabel: ({route, focused}) => renderTab(route.routeName, focused)
		}
	}
},{
	animationEnabled: true,
	swipeEnabled: false,
	tabBarComponent: TabView.TabBarTop,
	tabBarPosition: 'top',
	tabBarOptions: {
		pressOpacity: 1,
		indicatorStyle: AppTabNavigatorStyles.indicator,
		style: AppTabNavigatorStyles.tabBar
	}
});

export default AppTabNavigator;
