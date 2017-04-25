import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Someday extends Component {
    render() {
        const
			{ list, ...actionProps } = this.props.screenProps,
        	listData = list.filter(task => task.list === 'someday');

        return <TaskCategory data={listData} {...actionProps} />;
    }
}
