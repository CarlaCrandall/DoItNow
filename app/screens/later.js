import React, { Component } from 'react';
import { List } from '../components';

export default class Later extends Component {

    render() {
        const
			list = this.props.screenProps.list,
        	listData = list.filter(task => task.list === 'later');

        return <List data={listData} />;
    }
}
