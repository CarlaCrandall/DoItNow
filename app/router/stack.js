import React, { PureComponent } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './tabs';
import { AddEditTask } from '../screens';
import { StackNavigatorStyles } from '../styles/navigators';
import { colors, iconSizes } from '../styles/vars';

const commonNavigationOptions = {
	headerBackTitle: null,
	headerTintColor: colors.white,
	headerStyle: StackNavigatorStyles.header,
	headerTitleStyle: StackNavigatorStyles.headerTitle
};

const renderButton = (icon, iconSize, onPressFunction, onPressArguments) => {
	return (
		<Icon.Button
			name={icon}
			size={iconSize}
			style={StackNavigatorStyles.headerButton}
			onPress={() => onPressFunction(...onPressArguments)}
		/>
	);
}

const navigateToAddTask = (navigation, screenProps) => {
	navigation.navigate('AddEditTask', { mode: 'add' });
	screenProps.SWIPEOUT_TASK(null);
};

const Stack = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: ({navigation, screenProps}) => ({
			...commonNavigationOptions,
			headerTitle: 'Do It Now',
			headerRight: renderButton('plus-square', iconSizes.large, navigateToAddTask, [navigation, screenProps])
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
	cardStyle: StackNavigatorStyles.card
});

export default Stack;
