import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const AppTabNavigatorStyles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.white
	},
	indicator: {
		opacity: 0
	},

	// Tab Styles
	tab: {
		marginVertical: margins.xsmall,
		borderBottomWidth: 2,
		borderBottomColor: colors.mediumGray
	},
	'tab--now': {
		borderBottomColor: colors.red
	},
	'tab--later': {
		borderBottomColor: colors.orange
	},
	'tab--someday': {
		borderBottomColor: colors.blue
	},

	// Label Styles
	label: {
		paddingVertical: margins.xsmall / 2,
		color: colors.mediumGray,
		fontSize: fontSizes.small,
		fontWeight: fontWeights.bold
	},
	'label--now': {
		color: colors.red
	},
	'label--later': {
		color: colors.orange
	},
	'label--someday': {
		color: colors.blue
	}
});

export default AppTabNavigatorStyles;
