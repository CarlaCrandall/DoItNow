import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';

const TaskCardStyles = StyleSheet.create({
	swipeBtn: {
		flex: 1,
		flexWrap: 'wrap',
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
	},

	// TEXT STYLES
	swipeText: {
		fontSize: fontSizes.medium
	},
	'swipeText--cancel': {
		color: colors.mediumGray
	},
	'swipeText--edit': {
		color: colors.darkGray
	},
	'swipeText--delete': {
		color: colors.red
	},

	// ICON STYLES
	swipeIcon: {
		marginRight: margins.xsmall
	},
	'swipeIcon--cancel': {
		color: colors.mediumGray
	},
	'swipeIcon--edit': {
		color: colors.darkGray
	},
	'swipeIcon--delete': {
		color: colors.red
	}
});

export default TaskCardStyles;
