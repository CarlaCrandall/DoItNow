import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.white
	},
	indicator: {
		backgroundColor: colors.darkGray
	},
	label: {
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.normal
	}
});

export default styles;
