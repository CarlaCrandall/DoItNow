import React, { PureComponent } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppTabNavigator from './app-tab-navigator';
import { AddEditTask } from '../screens';
import { AppNavigatorStyles } from '../styles/navigators';
import { colors, iconSizes } from '../styles/vars';

const commonNavigationOptions = {
	headerBackTitle: null,
	headerTintColor: colors.white,
	headerStyle: AppNavigatorStyles.header,
	headerTitleStyle: AppNavigatorStyles.headerTitle
};

const renderButton = (icon, iconSize, onPressFunction, onPressArguments) => {
	return (
		<Icon.Button
			name={icon}
			size={iconSize}
			style={AppNavigatorStyles.headerButton}
			onPress={() => onPressFunction(...onPressArguments)}
		/>
	);
}

const AppNavigator = StackNavigator({
	Home: {
		screen: AppTabNavigator,
		navigationOptions: ({navigation, screenProps}) => ({
			...commonNavigationOptions,
			headerTitle: 'Do It Now',
			headerRight: renderButton('plus-square', iconSizes.large, navigation.navigate, ['AddEditTask', { mode: 'add' }])
		})
	},
	AddEditTask: {
		screen: AddEditTask,
		navigationOptions: ({navigation, screenProps}) => ({
			...commonNavigationOptions,
			headerTitle: (navigation.state.params.mode === 'add') ? 'Add Task' : 'Edit Task',
			headerLeft: renderButton('chevron-left', iconSizes.medium, navigation.goBack, [])
		})
	}
},{
	cardStyle: AppNavigatorStyles.card
});

export default AppNavigator;
