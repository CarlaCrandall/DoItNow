import { StyleSheet } from 'react-native';
import { colors, fontWeights, margins } from '../vars';

const styles = StyleSheet.create({
	tabbar: {
		backgroundColor: colors.white
	},
	indicator: {
		backgroundColor: colors.darkGray
	},
	label: {
		fontWeight: fontWeights.bold
	}
});

export default styles;
