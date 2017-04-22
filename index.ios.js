import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './app/app';
import store from './app/store';


const DoItNow = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('DoItNow', () => DoItNow);
