import { combineReducers } from 'redux';
import tasks from './tasks';
import navigation from './navigation';

const reducers = combineReducers({ navigation, tasks });

export default reducers;
