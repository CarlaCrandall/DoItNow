import React, { Component } from 'react';
import { View } from 'react-native';
import { TaskForm } from '../components';
import { AddEditTaskStyles } from '../styles/containers';

export default class AddEditTask extends Component {

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

    render() {
    	const
			{ id, name, list, mode } = this.props.navigation.state.params,
    		{ DELETE_TASK, ADD_TASK, EDIT_TASK } = this.props.screenProps,
    		initialValues = {
    			taskName: name || '',
    			...this.getValuesFromListType(list)
    		}

        return (
        	<View style={AddEditTaskStyles.container}>
				<TaskForm
					id={id}
					mode={mode}
					initialValues={initialValues}
					ADD_TASK={ADD_TASK}
					EDIT_TASK={EDIT_TASK}
					DELETE_TASK={DELETE_TASK}
					navigation={this.props.navigation}
				/>
        	</View>
        );
    }
}
