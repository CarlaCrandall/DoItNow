import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Now extends Component {
    render() {
        const
			{ list, ...props } = this.props.screenProps,
        	listData = list.filter(task => task.list === 'now');

        return <TaskCategory navigation={this.props.navigation} data={listData} {...props} />;
    }
}
