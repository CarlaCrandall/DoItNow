import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';


const TaskFormStyles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative'
	},

	// Button Styles
	buttonContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		paddingVertical: margins.small
	},
	button: {
		flexWrap: 'wrap',
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: margins.small,
		padding: margins.xsmall,
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
		backgroundColor: colors.blue,
		borderColor: colors.blue
	},
	saveButtonIcon: {
		color: colors.white
	},
	saveButtonText: {
		color: colors.white
	},

	deleteButton: {
		backgroundColor: colors.white,
		borderColor: colors.red
	},
	deleteButtonIcon: {
		color: colors.red
	},
	deleteButtonText: {
		color: colors.red
	}
});

export default TaskFormStyles;
