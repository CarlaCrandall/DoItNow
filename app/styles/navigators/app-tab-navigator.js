import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const styles = StyleSheet.create({
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
		padding: margins.xsmall / 2,
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.normal
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

export default styles;
