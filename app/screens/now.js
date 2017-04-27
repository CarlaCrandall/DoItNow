import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Now extends Component {
    render() {
        const
			{ list, ...props } = this.props.screenProps,
			category = 'now'
        	listData = list.filter(task => task.list === category);

        return <TaskCategory navigation={this.props.navigation} category={category} data={listData} {...props} />;
    }
}
