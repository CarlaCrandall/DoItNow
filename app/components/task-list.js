import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TaskRow } from './';
import { TaskListStyles } from '../styles/components';

export default class TaskList extends PureComponent {

    renderItem({item}) {
        return (
            <TaskRow
                task={item}
                swipeoutTask={this.props.swipeoutTask}
                navigation={this.props.navigation}
                DELETE_TASK={this.props.DELETE_TASK}
                TOGGLE_TASK={this.props.TOGGLE_TASK}
                SWIPEOUT_TASK={this.props.SWIPEOUT_TASK}
            />
        );
    }

    renderList() {
        return (
            <FlatList
                data={this.props.data}
                removeClippedSubviews={false}
                keyExtractor={(item, index) => `${item.name}_${item.id}`}
                renderItem={item => this.renderItem(item)}
            />
        );
    }

    renderMessage() {
        const
            listName = this.props.category.toUpperCase(),
            textStyles = [
                TaskListStyles['message--bold'],
                TaskListStyles[`message--${this.props.category}`]
            ];

        return (
            <View style={TaskListStyles.view}>
                <Text style={TaskListStyles.message}>
                    There are no tasks in your <Text style={textStyles}>{listName}</Text> list
                </Text>
            </View>
        );
    }

    render() {
        if (this.props.data.length > 0) {
            return this.renderList();
        }

        return this.renderMessage();
    }
}
