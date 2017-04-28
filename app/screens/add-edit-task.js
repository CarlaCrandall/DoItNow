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
			important: false
		};
	}

	handleToggle(key, value) {
		this.setState({
			[key]: value
		});
	}

	handleSave() {

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
