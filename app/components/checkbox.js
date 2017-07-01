import React, { Component } from 'react';
import { Keyboard, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Utilities from '../utils';
import { CheckboxStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked
        };
    }

    handlePress() {
        const checked = !this.state.checked;

        Keyboard.dismiss();
        this.setState({ checked });
        this.props.onChange && this.props.onChange(this.props.name, checked);
    }

    render() {
        const
            boxStyles = [
                CheckboxStyles.box,
                this.state.checked && CheckboxStyles['box--checked'],
                this.props.hasError && CheckboxStyles['box--error']
            ],
            textStyles = [
                CheckboxStyles.text,
                this.state.checked && CheckboxStyles['text--checked'],
                this.props.hasError && CheckboxStyles['text--error']
            ],
            iconStyles = [
                CheckboxStyles.icon,
                this.state.checked && CheckboxStyles['icon--checked'],
                this.props.hasError && CheckboxStyles['icon--error']
            ];

        return (
            <TouchableOpacity style={boxStyles} onPress={() => this.handlePress()}>
                <Icon name={this.props.icon} size={iconSizes.medium} style={iconStyles} />
                <Text style={textStyles}>{Utilities.capitalize(this.props.name)}</Text>
            </TouchableOpacity>
        );
    }
}
