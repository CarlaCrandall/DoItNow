import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import { Later, Now, Someday } from '../screens';
import { TabNavigatorStyles } from '../styles/navigators';
import { colors } from '../styles/vars';

const Tabs = TabNavigator({
	Now: { screen: Now },
	Later: { screen: Later },
	Someday: { screen: Someday }
},{
	animationEnabled: true,
	swipeEnabled: false,
	tabBarComponent: TabView.TabBarTop,
	tabBarPosition: 'top',
	tabBarOptions: {
		activeTintColor: colors.darkGray,
		inactiveTintColor: colors.lightGray,
		indicatorStyle: TabNavigatorStyles.indicator,
		labelStyle: TabNavigatorStyles.label,
		style: TabNavigatorStyles.tabbar
	}
});

export default Tabs;
