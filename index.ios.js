import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import ConnectedApp from './app/app';
import store from './app/store';


const DoItNow = () => (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
);

export default AppRegistry.registerComponent('DoItNow', () => DoItNow);
