import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeButtonStyles } from '../styles/components';
import * as Utilities from '../utils';
import { iconSizes } from '../styles/vars';


export default class SwipeButton extends PureComponent {
    render() {
        const
        	iconStyles = [SwipeButtonStyles.swipeIcon, SwipeButtonStyles[`swipeIcon--${this.props.type}`]],
        	textStyles = [SwipeButtonStyles.swipeText, SwipeButtonStyles[`swipeText--${this.props.type}`]];

		return (
			<View style={SwipeButtonStyles.swipeBtn}>
				<Icon name={this.props.icon} size={iconSizes.medium} style={iconStyles} />
				<Text style={textStyles}>{Utilities.capitalize(this.props.type)}</Text>
			</View>
		);
    }
}
