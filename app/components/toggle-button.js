import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ToggleButtonStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class ToggleButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggled: this.props.toggled
		};
	}

	handlePress() {
		const toggled = !this.state.toggled;

		this.setState({ toggled });
		this.props.onToggle && this.props.onToggle(toggled);
	}

    render() {
    	const
    		btnStyles = [
    			ToggleButtonStyles.btn,
    			this.state.toggled && ToggleButtonStyles['btn--toggled']
    		],
    		textStyles = [
				ToggleButtonStyles.text,
				this.state.toggled && ToggleButtonStyles['text--toggled']
    		],
    		iconStyles = [
				ToggleButtonStyles.icon,
				this.state.toggled && ToggleButtonStyles['icon--toggled']
    		];

		return (
			<TouchableOpacity style={btnStyles} onPress={() => this.handlePress()}>
				<Icon name={this.props.icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{this.props.text}</Text>
			</TouchableOpacity>
		);
    }
}
