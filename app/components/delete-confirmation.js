import { Alert } from 'react-native';

export default class DeleteConfirmation {

    static alert = (deleteOnPress) => {
        const
            title = 'Delete Task',
            message = 'Are you sure you want to permanently delete this task?',
            cancelButton = { text: 'Cancel', style: 'cancel' },
            deleteButton = {
                text: 'Delete',
                style: 'destructive',
                onPress: deleteOnPress
            };

        Alert.alert(title, message, [cancelButton, deleteButton]);
    }

}
