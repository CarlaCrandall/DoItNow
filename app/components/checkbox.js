import React, { PureComponent } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckboxStyles } from '../styles/components';
import { iconSizes } from '../styles/vars';


export default class Checkbox extends PureComponent {
    render() {
    	const boxStyles = [
    		CheckboxStyles.box,
    		this.props.checked && CheckboxStyles['box--checked']
    	];

        return (
			<View style={boxStyles}>
				{this.props.checked && <Icon name="check" size={iconSizes.medium} style={CheckboxStyles.icon} />}
			</View>
        );
    }
}
