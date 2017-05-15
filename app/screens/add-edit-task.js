import React, { Component } from 'react';
import { View } from 'react-native';
import { TaskForm } from '../components';
import { AddEditTaskStyles } from '../styles/containers';

export default class AddEditTask extends Component {

	getValuesFromListType(list) {
		switch (list) {
			case 'now': {
				return ['urgent', 'important'];
			}
			case 'later': {
				return ['urgent'];
			}
			case 'someday': {
				return ['important'];
			}
			default: {
				return [];
			}
		}
	}

    render() {
    	const
			{ id, name, list, mode } = this.props.navigation.state.params,
    		{ DELETE_TASK, ADD_TASK, EDIT_TASK } = this.props.screenProps,
    		initialValues = {
    			taskName: name || '',
    			descriptors: this.getValuesFromListType(list)
    		};

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
