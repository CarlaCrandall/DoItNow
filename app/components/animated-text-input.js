import React, { Component } from 'react';
import { Animated, LayoutAnimation, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { AnimatedTextInputStyles } from '../styles/components';
import { colors, iconSizes } from '../styles/vars';

export default class AnimatedTextInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			focused: false,
			hasValue: !!props.value
		};
	}

	toggleFocus() {
		LayoutAnimation.easeInEaseOut();
		this.setState({ focused: !this.state.focused })
	};

    render() {
    	const
    		hasError = this.props.touched && this.props.error,
    		isActive = this.state.focused || this.state.hasValue,
    		inputStyles = [
    			AnimatedTextInputStyles.input,
    			hasError && AnimatedTextInputStyles['input--error']
    		],
    		labelContainerStyles = [
				AnimatedTextInputStyles.labelContainer,
				isActive && AnimatedTextInputStyles['labelContainer--active']
    		],
    		labelStyles = [
				AnimatedTextInputStyles.label,
				isActive && AnimatedTextInputStyles['label--active'],
				hasError && AnimatedTextInputStyles['label--error']
    		];

        return (
			<View>
				<View style={AnimatedTextInputStyles.inputContainer}>
					<TextInput
						style={inputStyles}
						underlineColorAndroid="transparent"
						value={this.props.value}
						onFocus={() => this.toggleFocus()}
						onBlur={() => this.toggleFocus()}
						onChangeText={this.props.onChange}
					/>
					<View pointerEvents="none" style={labelContainerStyles}>
						<Text style={labelStyles}>{this.props.label}</Text>
					</View>
				</View>
				{hasError && <Text style={AnimatedTextInputStyles.error}>{this.props.error}</Text>}
			</View>
        );
    }
}
