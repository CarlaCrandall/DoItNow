import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedSaveView, AnimatedTextInput, CheckboxGroup, DeleteConfirmation } from './index';
import validate from '../validation/add-edit-task';
import { TaskFormStyles } from '../styles/components';
import * as Utilities from '../utils';
import { iconSizes } from '../styles/vars';

export class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            saving: false,
            listType: '',
            taskName: ''
        };
    }

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
        const deleteOnPress = () => this.deleteTask();
        DeleteConfirmation.alert(deleteOnPress);
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
        }
        else {
            ADD_TASK(task);
        }
    }

    handleSave(values) {
        const
            listType = this.getListTypeFromValues(values.descriptors),
            task = {
                id: this.getId(),
                name: values.taskName,
                list: listType,
                status: 'active'
            };

        this.editOrAddTask(task);

        this.setState({
            saving: true,
            taskName: values.taskName,
            listType
        });
    }

    renderInput({ input, meta }) {
        return <AnimatedTextInput {...input} {...meta} label="Task Name" />;
    }

    renderCheckboxGroup({ input, meta }, label, checkboxes) {
        return <CheckboxGroup label={label} checkboxes={checkboxes} {...input} {...meta} />;
    }

    renderButton(btnType, icon, onPress) {
        const
            buttonStyles = [TaskFormStyles.button, TaskFormStyles[`${btnType}Button`]],
            iconStyles = [TaskFormStyles.buttonIcon, TaskFormStyles[`${btnType}ButtonIcon`]],
            textStyles = [TaskFormStyles.buttonText, TaskFormStyles[`${btnType}ButtonText`]];

        return (
            <TouchableOpacity style={buttonStyles} onPress={() => onPress()}>
                <Icon name={icon} size={iconSizes.medium} style={iconStyles} />
                <Text style={textStyles}>{Utilities.capitalize(btnType)}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const
            { mode, handleSubmit } = this.props,
            { goBack } = this.props.navigation,
            descriptorsLabel = 'This task is...',
            descriptors = [
                { name: 'urgent', icon: 'clock-o' },
                { name: 'important', icon: 'exclamation-circle' }
            ];

        return (
            <View style={TaskFormStyles.container}>
                <Field name="taskName" component={this.renderInput} />
                <Field name="descriptors" component={field => this.renderCheckboxGroup(field, descriptorsLabel, descriptors)} />

                <View style={TaskFormStyles.buttonContainer}>
                    {this.renderButton('save', 'check-circle', handleSubmit(values => this.handleSave(values)))}
                    {mode === 'edit' && this.renderButton('delete', 'trash', () => this.handleDelete())}
                </View>

                <AnimatedSaveView {...this.state} goBack={goBack} />
            </View>
        );
    }
}

let ConnectedTaskForm = reduxForm({ form: 'TaskForm', validate: validate })(TaskForm);
ConnectedTaskForm = connect((state, props) => ({ initialValues: props.initialValues }))(ConnectedTaskForm);

export default ConnectedTaskForm;
