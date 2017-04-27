import { StyleSheet } from 'react-native';
import { colors, fontSizes, iconSizes, margins } from '../vars';

const borderWidth = 2;

const CheckboxStyles = StyleSheet.create({
	icon: {
		color: colors.white
	},

	// Box Styles
	box: {
		width: iconSizes.medium + (borderWidth * 2),
		height: iconSizes.medium + (borderWidth * 2),
		marginRight: margins.small,
		borderWidth: borderWidth,
		borderRadius: iconSizes.medium / 4
	},
	'box--now': {
		borderColor: colors.red
	},
	'box--now--checked': {
		backgroundColor: colors.red
	},
	'box--later': {
		borderColor: colors.orange
	},
	'box--later--checked': {
		backgroundColor: colors.orange
	},
	'box--someday': {
		borderColor: colors.blue
	},
	'box--someday--checked': {
		backgroundColor: colors.blue
	},

	// Text Styles
	text: {
		fontSize: fontSizes.medium
	},
	'text--now': {
		color: colors.red
	},
	'text--later': {
		color: colors.orange
	},
	'text--someday': {
		color: colors.blue
	},
	'text--checked': {
		textDecorationLine: 'line-through'
	}
});

export default CheckboxStyles;
