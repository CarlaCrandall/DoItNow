import React, { Component } from 'react';
import { List } from '../components';

export default class Someday extends Component {

    render() {
        const
			list = this.props.screenProps.list,
        	listData = list.filter(task => task.list === 'someday');

        return <List data={listData} />;
    }
}
