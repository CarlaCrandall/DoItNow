import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ToggleButton } from '../components';
import { AddEditTaskStyles } from '../styles/containers';
import { colors, iconSizes } from '../styles/vars';

export default class AddEditTask extends Component {
	constructor(props) {
		super(props);

		const
			{ name, list } = props.navigation.state.params,
			{ urgent, important } = this.getValuesFromListType(list);

		this.state = {
			taskName: name || '',
			urgent: urgent,
			important: important
		};
	}

	getId() {
		const { id } = this.props.navigation.state.params;
		return id || '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
	}

	getValuesFromListType(list) {
		let urgent = false,
			important = false;

		if (list === 'now' || list === 'later') {
			urgent = true;
		}

		if (list === 'now' || list === 'someday') {
			important = true;
		}

		return { urgent, important };
	}

	// Logic loosely based on / inspired by Eisenhower Matrix
	getListTypeFromValues(urgent, important) {
		if (urgent && important) {
			return 'now';
		} else if (urgent) {
			return 'later';
		} else if (important) {
			return 'someday';
		}

		return false;
	}

	handleToggle(key, value) {
		this.setState({ [key]: value });
	}

	editOrAddTask(task) {
		const
			{ ADD_TASK, EDIT_TASK } = this.props.screenProps,
			{ mode } = this.props.navigation.state.params;

		if (mode === 'edit') {
			EDIT_TASK(task.id, task);
		} else {
			ADD_TASK(task);
		}
	}

	handleSave() {
		const
			{ goBack } = this.props.navigation,
			listType = this.getListTypeFromValues(this.state.urgent, this.state.important),
			task = {
				id: this.getId(),
				name: this.state.taskName,
				urgent: this.state.urgent,
				important: this.state.important,
				list: listType,
				status: 'active'
			};

		if (listType) {
			this.editOrAddTask(task);
			goBack();
		} else {
			// SHOW MESSAGE
			console.log('do not add');
		}
	}

	handleDelete() {
		const
			title = 'Delete Task',
			message = 'Are you sure you want to permanently delete this task?',
			cancelButton = { text: 'Cancel', style: 'cancel' },
			deleteButton = {
				text: 'Delete',
				style: 'destructive',
				onPress: () => this.deleteTask()
			};

		Alert.alert(title, message, [cancelButton, deleteButton]);
	}

	deleteTask() {
		const
			{ id } = this.props.navigation.state.params,
			{ goBack } = this.props.navigation,
			{ DELETE_TASK } = this.props.screenProps;

		DELETE_TASK(id);
		goBack();
	}

	renderButton(btnType, icon, onPress) {
		const
			buttonStyles = [
				AddEditTaskStyles.button,
				AddEditTaskStyles[`${btnType}Button`]
			],
			iconStyles =[
				AddEditTaskStyles.buttonIcon,
				AddEditTaskStyles[`${btnType}ButtonIcon`]
			],
			textStyles =[
				AddEditTaskStyles.buttonText,
				AddEditTaskStyles[`${btnType}ButtonText`]
			],
			btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

		return (
			<TouchableOpacity style={buttonStyles} onPress={() => onPress()}>
				<Icon name={icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{btnText}</Text>
			</TouchableOpacity>
		);
	}

    render() {
    	const { mode } = this.props.navigation.state.params;

        return (
        	<View style={AddEditTaskStyles.container}>
				<TextInput
					style={AddEditTaskStyles.textInput}
					placeholder="Task Name..."
					placeholderTextColor={colors.mediumGray}
					value={this.state.taskName}
					onChangeText={taskName => this.setState({ taskName })}
				/>
				<View style={AddEditTaskStyles.toggleContainer}>
					<ToggleButton
						fieldKey="urgent"
						icon="clock-o"
						text="Urgent"
						toggled={this.state.urgent}
						onToggle={(key, value) => this.handleToggle(key, value)}
					/>
					<ToggleButton
						fieldKey="important"
						icon="exclamation-circle"
						text="Important"
						toggled={this.state.important}
						onToggle={(key, value) => this.handleToggle(key, value)}
					/>
				</View>
				<View style={AddEditTaskStyles.buttonContainer}>
					{this.renderButton('save', 'check-circle', this.handleSave.bind(this))}
					{mode === 'edit' && this.renderButton('delete', 'trash', this.handleDelete.bind(this))}
				</View>
        	</View>);
    }
}
