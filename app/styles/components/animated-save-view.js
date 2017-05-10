import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const AnimatedTextInputStyles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: -(margins.small),
		right: -(margins.small),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary
	},

	icon: {
		marginBottom: margins.medium,
		color: colors.white
	},

	text: {
		position: 'relative',
		color: colors.white,
		fontSize: fontSizes.medium
	},
	'text--bold': {
		fontWeight: fontWeights.bold
	}
});

export default AnimatedTextInputStyles;
