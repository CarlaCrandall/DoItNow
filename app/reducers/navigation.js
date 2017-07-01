import { AppNavigator } from '../navigators';

const getCurrentRoute = (state) => {
    if (state.routes) {
        return getCurrentRoute(state.routes[state.index]);
    }

    return state;
};

const navigation = (state, action) => {
    // Track route name to detect tab changes
    const nextState = AppNavigator.router.getStateForAction(action, state) || state;
    nextState.currentRoute = getCurrentRoute(nextState).routeName;

    return nextState;
};

export default navigation;
