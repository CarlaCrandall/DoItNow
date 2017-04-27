import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '../vars';

const AppNavigatorStyles = StyleSheet.create({
	header: {
		backgroundColor: colors.red
	},
	headerTitle: {
		color: colors.white,
		fontSize: fontSizes.large,
		fontWeight: fontWeights.light
	},
	headerButton: {
		backgroundColor: colors.red
	},
	card: {
		backgroundColor: colors.white
	}
});

export default AppNavigatorStyles;
