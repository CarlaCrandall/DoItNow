import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/app-container';
import store from './app/store';


const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('DoItNow', () => App);
