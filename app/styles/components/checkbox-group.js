import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const height = 50;

const CheckboxGroupStyles = StyleSheet.create({
	container: {
		position: 'relative',
		height: height * 1.5,
		marginVertical: margins.small
	},
	row: {
		flexWrap: 'wrap',
        flexDirection: 'row'
	},

	// Label Styles
	label: {
		paddingVertical: margins.small,
		color: colors.mediumGray,
		fontSize: fontSizes.large
	},
	'label--error': {
		color: colors.red
	},

	// Error Styles
	error: {
		paddingTop: margins.small,
		color: colors.red,
		fontSize: fontSizes.medium
	}
});

export default CheckboxGroupStyles;
