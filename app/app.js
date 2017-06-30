import React, { Component } from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BackAndroid, View } from 'react-native';
import * as actions from './actions';
import { AppContainerStyles } from './styles/containers';
import { AppNavigator } from './navigators';

export class App extends Component {
    componentDidMount() {
        BackAndroid.addEventListener('backPress', () => this.handleBackPress(this.props));
    }

    componentWillReceiveProps({ navigation, SWIPEOUT_TASK }) {
        const
            currentRoute = this.props.navigation.currentRoute,
            nextRoute = navigation.currentRoute;

        // Close any open swipeout tasks when navigating
        if (currentRoute !== nextRoute && this.props.tasks.swipeoutTask) {
            SWIPEOUT_TASK(null);
        }
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('backPress');
    }

    handleBackPress({dispatch, navigation}) {
        // Close the app if no route to go back to
        if (navigation.index === 0) return false;

        dispatch(NavigationActions.back());
        return true;
    }

    render() {
    	const
            { dispatch, navigation, tasks, ...actionProps } = this.props,
            navigationHelpers = addNavigationHelpers({ state: navigation, dispatch });

        return (
            <View style={AppContainerStyles.container}>
            	<AppNavigator
                    screenProps={{...tasks, ...actionProps}}
                    navigation={navigationHelpers}
                />
            </View>
        );
    }
}

const
    mapStateToProps = state => ({
        navigation: state.navigation,
        tasks: state.tasks
    }),
    mapDispatchToProps = dispatch => ({
        ...bindActionCreators(actions, dispatch),
        dispatch
    });

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
