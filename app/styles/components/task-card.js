import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const TaskCardStyles = StyleSheet.create({
	row: {
		flex: 1,
		flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
		paddingHorizontal: margins.small,
		paddingVertical: margins.medium,
		backgroundColor: colors.white,
		borderBottomWidth: 0.5,
		borderBottomColor: colors.lightGray
	},
	swipeout: {
		backgroundColor: colors.white
	},

	// Text Styles
	text: {
		fontSize: fontSizes.medium
	},
	'text--now': {
		color: colors.red
	},
	'text--later': {
		color: colors.orange
	},
	'text--someday': {
		color: colors.blue
	},
	'text--complete': {
		color: colors.mediumGray,
		textDecorationLine: 'line-through'
	}
});

export default TaskCardStyles;
