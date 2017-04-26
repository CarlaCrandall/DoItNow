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
		color: colors.lightGray
	},
	'swipeText--delete': {
		color: colors.red
	},
	'swipeText--complete': {
		color: colors.green
	},
	'swipeText--uncheck': {
		color: colors.green
	},

	// ICON STYLES
	swipeIcon: {
		marginRight: margins.xsmall
	},
	'swipeIcon--cancel': {
		color: colors.lightGray
	},
	'swipeIcon--delete': {
		color: colors.red
	},
	'swipeIcon--complete': {
		color: colors.green
	},
	'swipeIcon--uncheck': {
		color: colors.green
	}
});

export default TaskCardStyles;
