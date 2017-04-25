import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Later extends Component {
    render() {
        const
			{ list, ...actionProps } = this.props.screenProps,
        	listData = list.filter(task => task.list === 'later');

        return <TaskCategory data={listData} {...actionProps} />;
    }
}
