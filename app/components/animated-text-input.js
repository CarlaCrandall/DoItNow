import React, { Component } from 'react';
import { Animated, Easing, LayoutAnimation, Text, TextInput, View } from 'react-native';
import { AnimatedTextInputStyles } from '../styles/components';


export default class AnimatedTextInput extends Component {

	constructor(props) {
		super(props);

		this.width = 0;

		this.state = {
			focused: false,
			hasValue: !!props.value
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ hasValue: !!nextProps.value });
	}

	animateBorder(isFocused) {
		const toValue = isFocused ? 0 : this.width;

		Animated.timing(this.state.animatedValue, {
			toValue: toValue,
			duration: 500,
			easing: Easing.ease.inOut
		}).start();
	}

	onLayout({ width }) {
		this.width = width;
		this.setState({ animatedValue: new Animated.Value(width) });
	}

	toggleFocus(isFocused) {
		// Only animate the bottom border if input is empty
		if (!this.state.hasValue) {
			this.animateBorder(isFocused);
		}

		LayoutAnimation.easeInEaseOut();
		this.setState({ focused: isFocused });
	}

    render() {
    	const
    		hasError = this.props.touched && this.props.error,
    		isActive = this.state.focused || this.state.hasValue,
    		inputContainerStyles = [
    			AnimatedTextInputStyles.inputContainer,
    			hasError && AnimatedTextInputStyles['inputContainer--error']
    		],
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
    		],
    		borderStyles = [
    			AnimatedTextInputStyles.border,
				{ right: this.state.animatedValue },
				this.state.hasValue && AnimatedTextInputStyles['border--active'],
				hasError && AnimatedTextInputStyles['border--error']
    		];

        return (
			<View style={AnimatedTextInputStyles.container}>
				<View style={inputContainerStyles} onLayout={(event) => this.onLayout(event.nativeEvent.layout)}>
					<TextInput
						style={inputStyles}
						underlineColorAndroid="transparent"
						value={this.props.value}
						onFocus={() => this.toggleFocus(true)}
						onBlur={() => this.toggleFocus(false)}
						onChangeText={this.props.onChange}
					/>
					<View pointerEvents="none" style={labelContainerStyles}>
						<Text style={labelStyles}>{this.props.label}</Text>
					</View>
					<Animated.View style={borderStyles} />
				</View>
				{hasError && <Text style={AnimatedTextInputStyles.error}>{this.props.error}</Text>}
			</View>
        );
    }
}
