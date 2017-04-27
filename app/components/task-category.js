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
                    category={this.props.category}
                    swipeoutTask={this.props.swipeoutTask}
                    navigation={this.props.navigation}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                    SWIPEOUT_TASK={this.props.SWIPEOUT_TASK}
                />
                <ExpandableList
                    data={completed}
                    category="completed"
                    title="Completed Tasks"
                    swipeoutTask={this.props.swipeoutTask}
                    navigation={this.props.navigation}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                    SWIPEOUT_TASK={this.props.SWIPEOUT_TASK}
                />
            </ScrollView>
        );
    }
}
