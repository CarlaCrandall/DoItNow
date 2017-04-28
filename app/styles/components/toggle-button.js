import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';

const ToggleButtonStyles = StyleSheet.create({
	// BUTTON STYLES
	btn: {
		alignSelf: 'flex-start',
		paddingVertical: margins.xsmall,
		paddingHorizontal: margins.small,
		flexWrap: 'wrap',
        flexDirection: 'row',
		backgroundColor: colors.white,
		borderColor: colors.mediumGray,
		borderRadius: 50,
		borderWidth: 1
	},
	'btn--toggled': {
		backgroundColor: colors.red,
		borderColor: colors.red
	},

	// TEXT STYLES
	text: {
		fontSize: fontSizes.medium,
		color: colors.mediumGray
	},
	'text--toggled': {
		color: colors.white
	},

	// ICON STYLES
	icon: {
		marginRight: margins.xsmall,
		color: colors.mediumGray
	},
	'icon--toggled': {
		color: colors.white
	}
});

export default ToggleButtonStyles;
