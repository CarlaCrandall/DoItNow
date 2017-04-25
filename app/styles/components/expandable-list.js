import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, iconSizes, margins } from '../vars';

const ExpandableListStyles = StyleSheet.create({
	view: {
		height: 52,
		marginTop: margins.medium,
		marginBottom: margins.medium,
		marginLeft: margins.small,
		marginRight: margins.small
	},
	'view--expanded': {
		height: null
	},
	button: {
		paddingTop: margins.small,
		paddingBottom: margins.small,
		backgroundColor: colors.white
	},
	icon: {
		width: iconSizes.small
	},
	title: {
		color: colors.darkGray,
		fontSize: fontSizes.small,
		fontWeight: fontWeights.bold
	}
});

export default ExpandableListStyles;
