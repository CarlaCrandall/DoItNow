import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ExpandableList, TaskList } from './';

export default class TaskCategory extends Component {

    render() {
        const
            active = this.props.data.filter(task => task.status === 'active'),
            completed = this.props.data.filter(task => task.status === 'complete');

        return (
            <ScrollView>
                <TaskList
                    data={active}
                    navigate={this.props.navigate}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                />
                <ExpandableList
                    data={completed}
                    title="Completed Tasks"
                    navigate={this.props.navigate}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                />
            </ScrollView>
        );
    }
}
