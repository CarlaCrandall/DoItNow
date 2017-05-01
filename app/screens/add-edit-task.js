import React, { Component } from 'react';
import { View } from 'react-native';
import { TaskForm } from '../components';
import { AddEditTaskStyles } from '../styles/containers';

export default class AddEditTask extends Component {
    render() {
    	const
			{ id, mode } = this.props.navigation.state.params,
    		{ DELETE_TASK, ADD_TASK, EDIT_TASK } = this.props.screenProps;

        return (
        	<View style={AddEditTaskStyles.container}>
				<TaskForm
					id={id}
					mode={mode}
					ADD_TASK={ADD_TASK}
					EDIT_TASK={EDIT_TASK}
					DELETE_TASK={DELETE_TASK}
					navigation={this.props.navigation}
				/>
        	</View>
        );
    }
}
