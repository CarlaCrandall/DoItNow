import React, { PureComponent } from 'react';
import { LayoutAnimation, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TaskStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class Task extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            completed: props.completed
        };
    }

    handlePress() {
        LayoutAnimation.easeInEaseOut();

        this.setState({
            completed: !this.state.completed
        }, () => {
            setTimeout(() => this.props.TOGGLE_TASK(this.props.id), 300);
        });
    }

    renderBox() {
        const boxStyles = [
            TaskStyles.box,
            TaskStyles[`box--${this.props.list}`],
            this.state.completed && TaskStyles[`box--${this.props.list}--completed`]
        ];

        return (
            <View style={boxStyles}>
                {this.state.completed && <Icon name="check" size={iconSizes.medium} style={TaskStyles.icon} />}
            </View>
        );
    }

    render() {
        const textStyles = [
            TaskStyles.text,
            TaskStyles[`text--${this.props.list}`],
            this.state.completed && TaskStyles['text--completed']
        ];

        return (
            <TouchableHighlight onPress={() => this.handlePress()}>
                <View style={this.props.style}>
                    {this.renderBox()}
                    <Text style={textStyles}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
