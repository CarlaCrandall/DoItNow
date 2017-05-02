import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedTextInput, CheckboxGroup } from './index';
import validate from '../validation/add-edit-task';
import { TaskFormStyles } from '../styles/components';
import { colors, iconSizes } from '../styles/vars';

class TaskForm extends Component {

	getId() {
		return this.props.id || '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
	}

	// Logic loosely based on / inspired by Eisenhower Matrix
	getListTypeFromValues(descriptors) {
		const
			urgent = descriptors.indexOf('urgent') > -1,
			important = descriptors.indexOf('important') > -1;

		if (urgent && important) return 'now';
		if (urgent) return 'later';
		if (important) return 'someday';

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
		const { id, mode, ADD_TASK, EDIT_TASK } = this.props;

		if (mode === 'edit') {
			EDIT_TASK(id, task);
		} else {
			ADD_TASK(task);
		}
	}

	handleSave(values) {
		const
			{ goBack } = this.props.navigation,
			listType = this.getListTypeFromValues(values.descriptors),
			task = {
				id: this.getId(),
				name: values.taskName,
				list: listType,
				status: 'active'
			};

		this.editOrAddTask(task);
		goBack();
	}

	renderInput({ input, meta }) {
		return <AnimatedTextInput {...input} {...meta} label="Task Name" />
	}

	renderCheckboxGroup({ input, meta }, checkboxes) {
		return <CheckboxGroup checkboxes={checkboxes} {...input} {...meta}  />
	}

	renderButton(btnType, icon, onPress) {
		const
			buttonStyles = [TaskFormStyles.button, TaskFormStyles[`${btnType}Button`]],
			iconStyles =[TaskFormStyles.buttonIcon, TaskFormStyles[`${btnType}ButtonIcon`]],
			textStyles =[TaskFormStyles.buttonText, TaskFormStyles[`${btnType}ButtonText`]],
			btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

		return (
			<TouchableOpacity style={buttonStyles} onPress={() => onPress()}>
				<Icon name={icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{btnText}</Text>
			</TouchableOpacity>
		);
	}

    render() {
    	const
    		{ mode, handleSubmit } = this.props,
    		descriptors = [
				{ name: 'urgent', icon: 'clock-o' },
				{ name: 'important', icon: 'exclamation-circle' }
	    	];

        return (
        	<View>
				<Field name="taskName" component={this.renderInput} />
				<Field name="descriptors" component={field => this.renderCheckboxGroup(field, descriptors)} />
				{this.renderButton('save', 'check-circle', handleSubmit((values) => this.handleSave(values)))}
				{mode === 'edit' && this.renderButton('delete', 'trash', () => this.handleDelete())}
        	</View>
        );
    }
}

TaskForm = reduxForm({ form: 'TaskForm', validate: validate })(TaskForm)
TaskForm = connect((state, props) => ({ initialValues: props.initialValues }))(TaskForm)

export default TaskForm;
