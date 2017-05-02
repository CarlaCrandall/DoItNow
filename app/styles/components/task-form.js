import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';


const TaskFormStyles = StyleSheet.create({
	toggleContainer: {
		flexWrap: 'wrap',
        flexDirection: 'row'
	},

	// Button Styles
	buttonContainer: {
		marginVertical: margins.small
	},
	button: {
		flexWrap: 'wrap',
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: margins.small,
		padding: margins.xsmall,
		borderColor: colors.red,
		borderRadius: 6,
		borderWidth: 1
	},
	buttonText: {
		fontSize: fontSizes.medium
	},
	buttonIcon: {
		marginRight: margins.xsmall
	},

	saveButton: {
		backgroundColor: colors.red
	},
	saveButtonIcon: {
		color: colors.white
	},
	saveButtonText: {
		color: colors.white
	},

	deleteButton: {
		backgroundColor: colors.white
	},
	deleteButtonIcon: {
		color: colors.red
	},
	deleteButtonText: {
		color: colors.red
	}
});

export default TaskFormStyles;
