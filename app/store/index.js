import { createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(reducers, autoRehydrate());

// Persist redux state with redux-persist
persistStore(store, {
    storage: AsyncStorage,
    whitelist: ['tasks']
});

export default store;
