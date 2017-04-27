import React, { Component } from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BackAndroid, View } from 'react-native';
import * as actions from './actions';
import { AppContainerStyles } from './styles/containers';
import { AppNavigator } from './navigators';

class App extends Component {
    componentDidMount() {
        BackAndroid.addEventListener('backPress', () => this.handleBackPress(this.props));
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('backPress');
    }

    handleBackPress({dispatch, navigation}) {
        // Close the app if no route to go back to
        if (navigation.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    }

    handleNavigationStateChange({SWIPEOUT_TASK}) {
        SWIPEOUT_TASK(null);
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
                    onNavigationStateChange={(prevState, currentState) => this.handleNavigationStateChange(actionProps) }
                />
            </View>
        );
    }
}

const
    mapStateToProps = state => ({
        navigation: state.navigation,
        tasks: state.tasks
    });
    mapDispatchToProps = dispatch => ({
        ...bindActionCreators(actions, dispatch),
        dispatch
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);
