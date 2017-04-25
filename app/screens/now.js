import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class Now extends Component {
    render() {
        const
			{ list, ...actionProps } = this.props.screenProps,
        	listData = list.filter(task => task.list === 'now');

        return <TaskCategory data={listData} {...actionProps} />;
    }
}
