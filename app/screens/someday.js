import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Someday extends Component {
    render() {
        const
			{ list, ...props } = this.props.screenProps,
        	listData = list.filter(task => task.list === 'someday');

        return <TaskCategory data={listData} navigate={this.props.navigation.navigate} {...props} />;
    }
}
