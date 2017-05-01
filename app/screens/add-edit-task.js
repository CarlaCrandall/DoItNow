import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { ToggleButton } from '../components';
import { AddEditTaskStyles } from '../styles/containers';
import { colors } from '../styles/vars';

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
		return '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
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

	handleSave() {
		const
			{ goBack } = this.props.navigation,
			{ ADD_TASK } = this.props.screenProps,
			listType = this.getListTypeFromValues(this.state.urgent, this.state.important);

		if (listType) {
			ADD_TASK({
				id: this.getId(),
				name: this.state.taskName,
				urgent: this.state.urgent,
				important: this.state.important,
				list: listType,
				status: 'active'
			});

			goBack();
		} else {
			// SHOW MESSAGE
			console.log('do not add');
		}
	}

	handleDelete() {
		const
			{ id } = this.props.navigation.state.params,
			{ goBack } = this.props.navigation,
			{ DELETE_TASK } = this.props.screenProps;

		DELETE_TASK(id);
		goBack();
	}

    render() {
    	const { mode } = this.props.navigation.state.params;

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
				<Button title="Save" onPress={() => this.handleSave()} />
				{mode === 'edit' && <Button title="Delete" onPress={() => this.handleDelete()} />}
        	</View>);
    }
}
