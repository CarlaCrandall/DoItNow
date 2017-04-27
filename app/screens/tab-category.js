import React, { Component } from 'react';
import { TaskCategory } from '../components';

export default class TabCategory extends Component {
    render() {
        const
			{ list, ...props } = this.props.screenProps,
			category = this.props.navigation.state.routeName.toLowerCase(),
        	listData = list.filter(task => task.list === category);

        return <TaskCategory navigation={this.props.navigation} category={category} data={listData} {...props} />;
    }
}
