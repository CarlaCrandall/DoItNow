import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

		this.setState({ checked });
		this.props.onChange && this.props.onChange(this.props.name, checked);
	}

    render() {
    	const
    		text = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1),
    		boxStyles = [
    			CheckboxStyles.box,
    			this.state.checked && CheckboxStyles['box--checked']
    		],
    		textStyles = [
				CheckboxStyles.text,
				this.state.checked && CheckboxStyles['text--checked']
    		],
    		iconStyles = [
				CheckboxStyles.icon,
				this.state.checked && CheckboxStyles['icon--checked']
    		];

		return (
			<TouchableOpacity style={boxStyles} onPress={() => this.handlePress()}>
				<Icon name={this.props.icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{text}</Text>
			</TouchableOpacity>
		);
    }
}
