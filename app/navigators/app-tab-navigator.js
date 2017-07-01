import React from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { Text, View } from 'react-native';
import { TabCategory } from '../screens';
import { AppTabNavigatorStyles } from '../styles/navigators';

const renderTab = (navigation, focused) => {
    const
        tabName = navigation.state.routeName.toLowerCase(),
        tabStyles = [
            AppTabNavigatorStyles.tab,
            focused && AppTabNavigatorStyles[`tab--${tabName}`]
        ],
        labelStyles = [
            AppTabNavigatorStyles.label,
            focused && AppTabNavigatorStyles[`label--${tabName}`]
        ];

    return (
        <View style={tabStyles}>
            <Text style={labelStyles}>{tabName.toUpperCase()}</Text>
        </View>
    );
};

const AppTabNavigator = TabNavigator({
    Now: {
        screen: TabCategory,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => renderTab(navigation, focused)
        })
    },
    Later: {
        screen: TabCategory,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => renderTab(navigation, focused)
        })
    },
    Someday: {
        screen: TabCategory,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ focused }) => renderTab(navigation, focused)
        })
    }
}, {
    animationEnabled: true,
    backBehavior: 'none',
    swipeEnabled: false,
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    tabBarOptions: {
        pressOpacity: 1,
        indicatorStyle: AppTabNavigatorStyles.indicator,
        style: AppTabNavigatorStyles.tabBar
    }
});

export default AppTabNavigator;
