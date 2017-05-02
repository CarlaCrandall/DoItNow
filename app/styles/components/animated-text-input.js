import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const
	inputBaseHeight = 50,
	inputContainerHeight = inputBaseHeight * 1.5,
	errorHeight = 35,
	borderWidth = 3;

const AnimatedTextInputStyles = StyleSheet.create({
	container: {
		height: inputContainerHeight + errorHeight,
		marginBottom: inputBaseHeight / 2
	},
	inputContainer: {
		position: 'relative',
		height: inputContainerHeight,
		marginVertical: margins.small,
		borderBottomWidth: borderWidth,
		borderBottomColor: colors.lightGray
	},
	'inputContainer--error': {
		borderBottomColor: colors.fadedRed
	},

	// Input Styles
	input: {
		height: inputBaseHeight,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		color: colors.darkGray,
		fontSize: fontSizes.large
	},
	'input--error': {
		color: colors.red
	},

	// Label Styles
	labelContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: inputBaseHeight,
		justifyContent: 'center'
	},
	'labelContainer--active': {
		top: 0,
		height: inputBaseHeight / 2
	},
	label: {
		backgroundColor: 'transparent',
		color: colors.mediumGray,
		fontSize: fontSizes.large
	},
	'label--active': {
		backgroundColor: 'transparent',
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.bold
	},
	'label--error': {
		color: colors.red
	},

	// Border Styles
	border: {
		position: 'absolute',
		bottom: -3,
		left: 0,
		height: 3,
		backgroundColor: colors.blue
	},
	'border--error': {
		backgroundColor: colors.red
	},

	// Error Styles
	error: {
		height: errorHeight,
		color: colors.red,
		fontSize: fontSizes.medium
	}
});

export default AnimatedTextInputStyles;
