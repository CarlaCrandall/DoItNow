import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, UIManager } from 'react-native';
import App from './app/app';
import store from './app/store';

// Enable animation for Android
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const DoItNow = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('DoItNow', () => DoItNow);
