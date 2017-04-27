import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators';

const navigation = (state, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state;
}

export default navigation;
