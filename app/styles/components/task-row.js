import { StyleSheet } from 'react-native';
import { colors, margins } from '../vars';

const TaskRowStyles = StyleSheet.create({
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
	}
});

export default TaskRowStyles;
