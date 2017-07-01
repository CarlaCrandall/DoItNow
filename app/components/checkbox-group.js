import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Checkbox } from './index';
import { CheckboxGroupStyles } from '../styles/components';

export default class CheckboxGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    onChange(name, checked) {
        let value = this.state.value;

        if (checked) {
            value = [...value, name];
        }
        else {
            value = value.filter((checkbox) => checkbox !== name);
        }

        this.setState({ value });
        this.props.onChange && this.props.onChange(value);
    }

    renderCheckbox(checkbox, index, hasError) {
        return (
            <Checkbox
                key={index}
                checked={this.state.value.indexOf(checkbox.name) > -1}
                hasError={hasError}
                onChange={(name, checked) => this.onChange(name, checked)}
                {...checkbox}
            />
        );
    }

    renderError() {
        return <Text style={CheckboxGroupStyles.error}>{this.props.error}</Text>;
    }

    render() {
        const
            hasError = this.props.touched && this.props.error,
            labelStyles = [
                CheckboxGroupStyles.label,
                hasError && CheckboxGroupStyles['label--error']
            ];

        return (
            <View style={CheckboxGroupStyles.container}>
                <Text style={labelStyles}>{this.props.label}</Text>
                <View style={CheckboxGroupStyles.row}>
                    {this.props.checkboxes.map((checkbox, index) => this.renderCheckbox(checkbox, index, hasError))}
                </View>
                {hasError && this.renderError()}
            </View>
        );
    }
}
