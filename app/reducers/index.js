import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import navigation from './navigation';

const reducers = combineReducers({
	navigation,
	tasks,
	form: formReducer
});

export default reducers;
