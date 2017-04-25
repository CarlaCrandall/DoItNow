import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AddEditTask extends Component {

	static navigationOptions = {
		title: 'Add Task'
	};

    render() {
        return <View><Text>Add / Edit Task</Text></View>;
    }
}
