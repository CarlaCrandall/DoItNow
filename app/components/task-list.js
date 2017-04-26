import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { TaskCard } from './';

export default class TaskList extends Component {

    renderItem({item}) {
        return (
            <TaskCard
                {...item}
                swipeoutTask={this.props.swipeoutTask}
                navigate={this.props.navigate}
                DELETE_TASK={this.props.DELETE_TASK}
                TOGGLE_TASK={this.props.TOGGLE_TASK}
                SWIPEOUT_TASK={this.props.SWIPEOUT_TASK}
            />
        );
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                removeClippedSubviews={false}
                keyExtractor={(item, index) => `${item.name}_${index}`}
                renderItem={item => this.renderItem(item)}
            />
        );
    }
}
