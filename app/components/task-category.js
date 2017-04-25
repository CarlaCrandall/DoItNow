import React, { Component } from 'react';
import { View } from 'react-native';
import { ExpandableList, TaskList } from './';

export default class TaskCategory extends Component {

    render() {
        const
            active = this.props.data.filter(task => task.status === 'active'),
            completed = this.props.data.filter(task => task.status === 'complete');

        return (
            <View>
                <TaskList
                    data={active}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                />
                <ExpandableList
                    data={completed}
                    title="Completed Tasks"
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                />
            </View>

        );
    }
}
