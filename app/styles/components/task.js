import { StyleSheet } from 'react-native';
import { colors, fontSizes, iconSizes, margins } from '../vars';

const borderWidth = 2;

const TaskStyles = StyleSheet.create({
    icon: {
        color: colors.white
    },

    // Box Styles
    box: {
        width: iconSizes.medium + (borderWidth * 2),
        height: iconSizes.medium + (borderWidth * 2),
        marginRight: margins.small,
        borderRadius: iconSizes.medium / 4,
        borderWidth
    },
    'box--now': {
        borderColor: colors.now
    },
    'box--now--completed': {
        backgroundColor: colors.now
    },
    'box--later': {
        borderColor: colors.later
    },
    'box--later--completed': {
        backgroundColor: colors.later
    },
    'box--someday': {
        borderColor: colors.someday
    },
    'box--someday--completed': {
        backgroundColor: colors.someday
    },

    // Text Styles
    text: {
        fontSize: fontSizes.medium
    },
    'text--now': {
        color: colors.now
    },
    'text--later': {
        color: colors.later
    },
    'text--someday': {
        color: colors.someday
    },
    'text--completed': {
        textDecorationLine: 'line-through'
    }
});

export default TaskStyles;
