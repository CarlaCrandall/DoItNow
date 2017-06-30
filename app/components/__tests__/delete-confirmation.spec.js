import React from 'react';
import { Alert } from 'react-native';
import { DeleteConfirmation } from '../';

describe('DeleteConfirmation', () => {

    beforeAll(() => {
        Alert.alert = jest.fn();
    });

    it('calls Alert.alert', () => {
        DeleteConfirmation.alert(() => false);
        expect(Alert.alert).toHaveBeenCalled();
    });
});
