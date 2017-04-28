import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { ToggleButton } from '../components';
import { AddEditTaskStyles } from '../styles/containers';
import { colors } from '../styles/vars';

export default class AddEditTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: '',
			urgent: false,
			important: false,
			list: false
		};
	}

	getId() {
		return '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
	}

	// Logic loosely based on / inspired by Eisenhower Matrix
	getTaskType(urgent, important) {
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

	handleSave() {
		const
			{ ADD_TASK } = this.props.screenProps,
			taskType = this.getTaskType(this.state.urgent, this.state.important);

		if (taskType) {
			ADD_TASK({
				id: this.getId(),
				name: this.state.taskName,
				urgent: this.state.urgent,
				important: this.state.important,
				list: taskType,
				status: 'active'
			});
		} else {
			// SHOW MESSAGE
			console.log('do not add');
		}
	}

    render() {
        return (
        	<View style={AddEditTaskStyles.container}>
				<TextInput
					style={AddEditTaskStyles.textInput}
					placeholder="Task Name"
					placeholderTextColor={colors.mediumGray}
					value={this.state.taskName}
					onChangeText={taskName => this.setState({ taskName })}
				/>
				<View>
					<ToggleButton
						fieldKey="urgent"
						icon="clock-o"
						text="Urgent"
						onToggle={(key, value) => this.handleToggle(key, value)}
					/>
					<ToggleButton
						fieldKey="important"
						icon="exclamation-circle"
						text="Important"
						onToggle={(key, value) => this.handleToggle(key, value)}
					/>
				</View>
				<Button title="Save" onPress={() => this.handleSave()} />
        	</View>);
    }
}
