import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, iconSizes, margins } from '../vars';

const initialHeight = 42;

const ExpandableListStyles = StyleSheet.create({
    view: {
        height: initialHeight,
        marginVertical: margins.large
    },
    'view--expanded': {
        height: null
    },
    button: {
        padding: margins.small,
        backgroundColor: colors.white,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.lightGray
    },
    icon: {
        width: iconSizes.small
    },
    title: {
        flex: 1,
        color: colors.darkGray,
        fontSize: fontSizes.medium,
        fontWeight: fontWeights.bold
    },

    // Badge Styles
    badge: {
        alignSelf: 'flex-end',
        marginLeft: margins.small,
        paddingVertical: margins.xsmall / 2,
        paddingHorizontal: margins.small,
        backgroundColor: colors.mediumGray,
        borderRadius: initialHeight / 2
    },
    badgeText: {
        backgroundColor: 'transparent',
        color: colors.white,
        fontSize: fontSizes.medium
    }
});

export default ExpandableListStyles;
