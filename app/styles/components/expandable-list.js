import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, iconSizes, margins } from '../vars';

const ExpandableListStyles = StyleSheet.create({
	view: {
		height: 52,
		marginVertical: margins.medium
	},
	'view--expanded': {
		height: null
	},
	button: {
		padding: margins.small,
		backgroundColor: colors.white
	},
	icon: {
		width: iconSizes.small
	},
	title: {
		color: colors.darkGray,
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.bold
	}
});

export default ExpandableListStyles;
