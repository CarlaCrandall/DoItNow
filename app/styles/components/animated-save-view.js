import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const AnimatedTextInputStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: -(margins.small),
        right: -(margins.small),
        paddingHorizontal: margins.large,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },

    icon: {
        marginBottom: margins.medium,
        color: colors.primary
    },

    text: {
        color: colors.darkGray,
        fontSize: fontSizes.medium,
        lineHeight: fontSizes.large,
        textAlign: 'center'
    },
    'text--bold': {
        fontWeight: fontWeights.bold
    },
    'text--now': {
        color: colors.now
    },
    'text--later': {
        color: colors.later
    },
    'text--someday': {
        color: colors.someday
    }
});

export default AnimatedTextInputStyles;
