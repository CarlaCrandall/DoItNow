import { StyleSheet } from 'react-native';
import { colors, fontSizes, margins } from '../vars';

const height = 50;

const CheckboxGroupStyles = StyleSheet.create({
    container: {
        position: 'relative',
        height: height * 1.5,
        marginVertical: margins.small
    },
    row: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },

    // Label Styles
    label: {
        paddingVertical: margins.small,
        color: colors.mediumGray,
        fontSize: fontSizes.large
    },
    'label--error': {
        color: colors.important
    },

    // Error Styles
    error: {
        paddingTop: margins.small,
        color: colors.important,
        fontSize: fontSizes.medium
    }
});

export default CheckboxGroupStyles;
