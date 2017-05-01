import React, { Component } from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ToggleButton } from '../components';
import validate from '../validation/add-edit-task';
import { AddEditTaskStyles } from '../styles/containers';
import { colors, iconSizes } from '../styles/vars';

class AddEditTask extends Component {
	// constructor(props) {
	// 	super(props);

	// 	const
	// 		{ name, list } = props.navigation.state.params,
	// 		{ urgent, important } = this.getValuesFromListType(list);

	// 	this.state = {
	// 		taskName: name || '',
	// 		urgent: urgent,
	// 		important: important
	// 	};
	// }

	getId() {
		const { id } = this.props.navigation.state.params;
		return id || '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
	}

	// getValuesFromListType(list) {
	// 	let urgent = false,
	// 		important = false;

	// 	if (list === 'now' || list === 'later') {
	// 		urgent = true;
	// 	}

	// 	if (list === 'now' || list === 'someday') {
	// 		important = true;
	// 	}

	// 	return { urgent, important };
	// }

	// // Logic loosely based on / inspired by Eisenhower Matrix
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

	// handleToggle(key, value) {
	// 	this.setState({ [key]: value });
	// }



	// handleDelete() {
	// 	const
	// 		title = 'Delete Task',
	// 		message = 'Are you sure you want to permanently delete this task?',
	// 		cancelButton = { text: 'Cancel', style: 'cancel' },
	// 		deleteButton = {
	// 			text: 'Delete',
	// 			style: 'destructive',
	// 			onPress: () => this.deleteTask()
	// 		};

	// 	Alert.alert(title, message, [cancelButton, deleteButton]);
	// }

	// deleteTask() {
	// 	const
	// 		{ id } = this.props.navigation.state.params,
	// 		{ goBack } = this.props.navigation,
	// 		{ DELETE_TASK } = this.props.screenProps;

	// 	DELETE_TASK(id);
	// 	goBack();
	// }

	// renderButton(btnType, icon, onPress) {
	// 	const
	// 		buttonStyles = [
	// 			AddEditTaskStyles.button,
	// 			AddEditTaskStyles[`${btnType}Button`]
	// 		],
	// 		iconStyles =[
	// 			AddEditTaskStyles.buttonIcon,
	// 			AddEditTaskStyles[`${btnType}ButtonIcon`]
	// 		],
	// 		textStyles =[
	// 			AddEditTaskStyles.buttonText,
	// 			AddEditTaskStyles[`${btnType}ButtonText`]
	// 		],
	// 		btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

	// 	return (
	// 		<TouchableOpacity style={buttonStyles} onPress={() => onPress()}>
	// 			<Icon name={icon} size={iconSizes.medium} style={iconStyles} />
	// 			<Text style={textStyles}>{btnText}</Text>
	// 		</TouchableOpacity>
	// 	);
	// }

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

	handleSave(values) {
		const
			{ goBack } = this.props.navigation,
			listType = this.getListTypeFromValues(values.urgent, values.important),
			task = {
				id: this.getId(),
				name: values.taskName,
				urgent: values.urgent,
				important: values.important,
				list: listType,
				status: 'active'
			};

		this.editOrAddTask(task);
		goBack();
	}

	renderInput({input, meta}) {
		const
			{onChange, ...restInput} = input,
			{touched, error } = meta;

		return (
			<View>
				<TextInput
					style={AddEditTaskStyles.textInput}
					placeholder="Task Name..."
					placeholderTextColor={colors.mediumGray}
					onChangeText={onChange}
				/>
				{touched && error && <Text>{error}</Text>}
			</View>
		)
	}

	renderCheckbox({input, icon}) {
		const {name, checked, onChange} = input;

		return (
			<ToggleButton icon={icon} text={name} toggled={checked} onToggle={onChange} />
		);
	}

	renderMessage({urgent, important}) {
		const
			urgentError = urgent.meta.touched && urgent.meta.error,
			importantError = important.meta.touched && important.meta.error;

		if (urgentError && importantError) {
			return (
				<Text>Must select one!</Text>
			);
		}

		return null;
	}

    render() {
    	const { mode } = this.props.navigation.state.params;
    	const { handleSubmit } = this.props;

        return (
        	<View style={AddEditTaskStyles.container}>
				<Field name="taskName" component={this.renderInput} />

				<Fields names={['urgent', 'important']} component={this.renderMessage}/>
				<View style={AddEditTaskStyles.toggleContainer}>
					<Field name="urgent" icon="clock-o" component={this.renderCheckbox} />
					<Field name="important" icon="exclamation-circle" component={this.renderCheckbox} />
				</View>

				<TouchableOpacity style={AddEditTaskStyles.button} onPress={handleSubmit((values) => this.handleSave(values))}>
					<Icon name='check-circle' size={iconSizes.medium} style={AddEditTaskStyles.buttonIcon} />
					<Text style={AddEditTaskStyles.buttonText}>Save</Text>
				</TouchableOpacity>

				{/*}
				<View style={AddEditTaskStyles.buttonContainer}>
					{this.renderButton('save', 'check-circle', this.handleSave.bind(this))}
					{mode === 'edit' && this.renderButton('delete', 'trash', this.handleDelete.bind(this))}
				</View>
				*/}
        	</View>);
    }
}

export default reduxForm({
	form: 'AddEditTask',
	validate: validate
})(AddEditTask)





