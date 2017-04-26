import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, iconSizes, margins } from '../vars';

const borderWidth = 2;

const CheckboxStyles = StyleSheet.create({
	box: {
		width: iconSizes.medium + (borderWidth * 2),
		height: iconSizes.medium + (borderWidth * 2),
		marginRight: margins.small,
		borderWidth: borderWidth,
		borderColor: colors.darkGray,
		borderRadius: iconSizes.medium / 4
	},
	'box--checked': {
		backgroundColor: colors.darkGray
	},
	icon: {
		color: colors.white
	}
});

export default CheckboxStyles;
