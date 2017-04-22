import React, { Component } from 'react';
import { List } from '../components';

export default class Now extends Component {

    render() {
        const
			list = this.props.screenProps.list,
        	listData = list.filter(task => task.list === 'now');

        return <List data={listData} />;
    }
}
