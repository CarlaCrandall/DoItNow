import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const AppTabNavigatorStyles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        elevation: 0,
        shadowOpacity: 0
    },
    indicator: {
        opacity: 0
    },

    // Tab Styles
    tab: {
        marginVertical: margins.xsmall,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.white
    },
    'tab--now': {
        borderBottomColor: colors.now
    },
    'tab--later': {
        borderBottomColor: colors.later
    },
    'tab--someday': {
        borderBottomColor: colors.someday
    },

    // Label Styles
    label: {
        paddingVertical: margins.xsmall / 2,
        color: colors.mediumGray,
        fontSize: fontSizes.small,
        fontWeight: fontWeights.bold
    },
    'label--now': {
        color: colors.now
    },
    'label--later': {
        color: colors.later
    },
    'label--someday': {
        color: colors.someday
    }
});

export default AppTabNavigatorStyles;
