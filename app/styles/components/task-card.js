import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';

const TaskCardStyles = StyleSheet.create({
	taskCard: {
		flex: 1,
		margin: margins.small,
		marginBottom: 0,
		padding: margins.small,
		paddingBottom: margins.large,
		borderRadius: 10
	},
	'taskCard--now': {
		backgroundColor: colors.red
	},
	'taskCard--later': {
		backgroundColor: colors.orange
	},
	'taskCard--someday': {
		backgroundColor: colors.blue
	},
	text: {
		fontSize: fontSizes.medium,
		color: colors.white
	}
});

export default TaskCardStyles;
