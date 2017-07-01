import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, margins } from '../vars';

const TaskListStyles = StyleSheet.create({
    view: {
        marginVertical: margins.medium,
        marginHorizontal: margins.small
    },
    message: {
        fontSize: fontSizes.medium
    },
    'message--bold': {
        fontWeight: fontWeights.bold
    },
    'message--now': {
        color: colors.now
    },
    'message--later': {
        color: colors.later
    },
    'message--someday': {
        color: colors.someday
    }
});

export default TaskListStyles;
