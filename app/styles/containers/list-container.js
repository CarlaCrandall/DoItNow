import { StyleSheet } from 'react-native';
import { colors, fontWeights, margins } from '../vars';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tabbar: {
		backgroundColor: colors.white
	},
	indicator: {
		backgroundColor: colors.darkGray
	},
	label: {
		padding: margins.xsmall,
		fontWeight: fontWeights.bold,
		color: '#7f8c8d'
	},
	'label--active': {
		color: colors.darkGray
	}
});

export default styles;
