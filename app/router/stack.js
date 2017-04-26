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

const renderButton = (icon, onPressFunction, onPressArguments) => {
	return (
		<Icon.Button
			name={icon}
			size={iconSizes.medium}
			style={StackNavigatorStyles.headerButton}
			onPress={() => onPressFunction(...onPressArguments)}
		/>
	);
}

const Stack = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: ({navigation}) => ({
			...commonNavigationOptions,
			headerTitle: 'Do It Now',
			headerRight: renderButton('plus', navigation.navigate, ['AddEditTask', { mode: 'add' }])
		})
	},
	AddEditTask: {
		screen: AddEditTask,
		navigationOptions: ({navigation}) => ({
			...commonNavigationOptions,
			headerTitle: (navigation.state.params.mode === 'add') ? 'Add Task' : 'Edit Task',
			headerLeft: renderButton('chevron-left', navigation.goBack, [])
		})
	}
},{
	cardStyle: StackNavigatorStyles.card
});

export default Stack;
