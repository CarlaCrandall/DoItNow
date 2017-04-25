import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeButtonStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class SwipeButton extends PureComponent {
    render() {
        const
			type = this.props.type,
        	btnText = type.charAt(0).toUpperCase() + type.slice(1),
        	iconStyles = [SwipeButtonStyles.swipeIcon, SwipeButtonStyles[`swipeIcon--${type}`]],
        	textStyles = [SwipeButtonStyles.swipeText, SwipeButtonStyles[`swipeText--${type}`]];

		return (
			<View style={SwipeButtonStyles.swipeBtn}>
				<Icon name={this.props.icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{btnText}</Text>
			</View>
		);
    }
}
