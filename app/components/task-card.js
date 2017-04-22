import React, { PureComponent } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { TaskCardStyles } from '../styles/components';

export default class TaskCard extends PureComponent {
    render() {


        return (
            <TouchableHighlight style={[TaskCardStyles.taskCard, TaskCardStyles[`taskCard--${this.props.list}`]]}>
                <Text style={TaskCardStyles.text}>{this.props.name}</Text>
            </TouchableHighlight>
        );
    }
}
