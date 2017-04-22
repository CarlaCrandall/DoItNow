import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import { Now, Later, Someday } from './screens';
import { TabNavigatorStyles } from './styles/navigators';
import { colors } from './styles/vars';


export const Tabs = TabNavigator({
	Now: { screen: Now },
	Later: { screen: Later },
	Someday: { screen: Someday }
},{
	animationEnabled: true,
	lazyLoad: true,
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
