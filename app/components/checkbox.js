import React, { PureComponent } from 'react';
import { LayoutAnimation, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckboxStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class Checkbox extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };
    }

    handlePress() {
        LayoutAnimation.easeInEaseOut();

        this.setState({
            checked: !this.state.checked
        }, () => {
            setTimeout(() => this.props.TOGGLE_TASK(this.props.id), 300);
        });
    }

    renderBox() {
        const boxStyles = [
            CheckboxStyles.box,
            this.state.checked && CheckboxStyles['box--checked']
        ];

        return (
            <View style={boxStyles}>
                {this.state.checked && <Icon name="check" size={iconSizes.medium} style={CheckboxStyles.icon} />}
            </View>
        );
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.handlePress()}>
                <View style={this.props.style}>
                    {this.renderBox()}
                    <Text style={this.props.textStyle}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
