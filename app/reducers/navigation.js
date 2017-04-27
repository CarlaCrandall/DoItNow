import { NavigationActions } from 'react-navigation';
import { Stack } from '../router';

const navigation = (state, action) => {
    return Stack.router.getStateForAction(action, state) || state;
}

export default navigation;
