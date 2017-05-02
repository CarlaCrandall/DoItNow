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

	renderCheckbox(checkbox, index) {
		return (
			<Checkbox
				key={index}
				checked={this.state.value.indexOf(checkbox.name) > -1}
				onChange={(name, checked) => this.onChange(name, checked)}
				{...checkbox}
			/>
		);
	}

	renderError() {
		return <Text>{this.props.error}</Text>
	}

    render() {
        return (
        	<View>
				{this.props.checkboxes.map((checkbox, index) => this.renderCheckbox(checkbox, index))}
				{this.props.touched && this.props.error && this.renderError()}
        	</View>
        );
    }
}
