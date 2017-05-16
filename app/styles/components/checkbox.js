import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';

const CheckboxStyles = StyleSheet.create({
	// BUTTON STYLES
	box: {
		alignSelf: 'flex-start',
		marginRight: margins.xsmall,
		paddingVertical: margins.xsmall,
		paddingHorizontal: margins.small,
		flexWrap: 'wrap',
        flexDirection: 'row',
		backgroundColor: colors.white,
		borderColor: colors.mediumGray,
		borderRadius: 50,
		borderWidth: 1
	},
	'box--checked': {
		backgroundColor: colors.primary,
		borderColor: colors.primary
	},
	'box--error': {
		borderColor: colors.important
	},

	// TEXT STYLES
	text: {
		fontSize: fontSizes.medium,
		color: colors.mediumGray
	},
	'text--checked': {
		color: colors.white
	},
	'text--error': {
		color: colors.important
	},

	// ICON STYLES
	icon: {
		marginRight: margins.xsmall,
		color: colors.mediumGray
	},
	'icon--checked': {
		color: colors.white
	},
	'icon--error': {
		color: colors.important
	}
});

export default CheckboxStyles;
