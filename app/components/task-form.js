import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Fields, reduxForm } from 'redux-form';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleButton from './toggle-button';
import validate from '../validation/add-edit-task';
import { AddEditTaskStyles } from '../styles/containers';
import { colors, iconSizes } from '../styles/vars';

class TaskForm extends Component {

	getId() {
		return this.props.id || '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
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
			{ id, DELETE_TASK } = this.props,
			{ goBack } = this.props.navigation;

		DELETE_TASK(id);
		goBack();
	}

	editOrAddTask(task) {
		const { mode, ADD_TASK, EDIT_TASK } = this.props;

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
			{onChange, value, ...restInput} = input,
			{touched, error } = meta;

		return (
			<View>
				<TextInput
					style={AddEditTaskStyles.textInput}
					placeholder="Task Name..."
					placeholderTextColor={colors.mediumGray}
					value={value}
					onChangeText={onChange}
				/>
				{touched && error && <Text>{error}</Text>}
			</View>
		)
	}

	renderCheckbox({input, icon}) {
		const {name, value, onChange} = input;

		return (
			<ToggleButton icon={icon} text={name} toggled={value} onToggle={onChange} />
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

	renderButton(btnType, icon, onPress) {
		const
			buttonStyles = [AddEditTaskStyles.button, AddEditTaskStyles[`${btnType}Button`]],
			iconStyles =[AddEditTaskStyles.buttonIcon, AddEditTaskStyles[`${btnType}ButtonIcon`]],
			textStyles =[AddEditTaskStyles.buttonText, AddEditTaskStyles[`${btnType}ButtonText`]],
			btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

		return (
			<TouchableOpacity style={buttonStyles} onPress={() => onPress()}>
				<Icon name={icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{btnText}</Text>
			</TouchableOpacity>
		);
	}

    render() {
    	const { mode, handleSubmit } = this.props;

        return (
        	<View>
				<Field name="taskName" component={this.renderInput} />

				<View style={AddEditTaskStyles.toggleContainer}>
					<Field name="urgent" icon="clock-o" component={this.renderCheckbox} />
					<Field name="important" icon="exclamation-circle" component={this.renderCheckbox} />
				</View>
				<Fields names={['urgent', 'important']} component={this.renderMessage}/>

				{this.renderButton('save', 'check-circle', handleSubmit((values) => this.handleSave(values)))}
				{mode === 'edit' && this.renderButton('delete', 'trash', () => this.handleDelete())}
        	</View>
        );
    }
}

TaskForm = reduxForm({ form: 'TaskForm', validate: validate })(TaskForm)
TaskForm = connect((state, props) => ({ initialValues: props.initialValues }))(TaskForm)

export default TaskForm;
