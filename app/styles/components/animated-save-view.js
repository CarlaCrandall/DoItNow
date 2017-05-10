import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const { height, width } = Dimensions.get('window');

const AnimatedTextInputStyles = StyleSheet.create({
	container: {
		height: height,
		width: width,
		position: 'absolute',
		top: 0,
		left: -(margins.small),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.black
	},

	icon: {
		marginBottom: margins.medium,
		color: colors.primary
	},

	text: {
		position: 'relative',
		color: colors.white,
		fontSize: fontSizes.medium
	}
});

export default AnimatedTextInputStyles;
