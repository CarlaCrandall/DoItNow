import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, iconSizes, margins } from '../vars';

const
	height = 50,
	borderWidth = 3;

const AnimatedTextInputStyles = StyleSheet.create({
	inputContainer: {
		position: 'relative',
		height: height * 1.5,
		marginVertical: margins.small,
		borderBottomWidth: borderWidth,
		borderBottomColor: colors.lightGray
	},

	// Input Styles
	input: {
		height: height,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		color: colors.darkGray
	},
	'input--error': {
		color: colors.red
	},

	// Label Styles
	labelContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: height,
		justifyContent: 'center',
	},
	'labelContainer--active': {
		top: 0,
		height: height / 2,
	},
	label: {
		backgroundColor: 'transparent',
		color: colors.mediumGray,
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.bold
	},
	'label--active': {
		backgroundColor: 'transparent',
		fontSize: fontSizes.small
	},
	'label--error': {
		color: colors.red
	},

	// Error Styles
	error: {
		paddingTop: margins.xsmall,
		color: colors.red,
		fontSize: fontSizes.medium
	}
});

export default AnimatedTextInputStyles;
