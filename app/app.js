import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as actions from './actions';
import { AppContainerStyles } from './styles/containers';
import { Stack } from './router';

class App extends Component {
    handleNavigationStateChange({SWIPEOUT_TASK}) {
        SWIPEOUT_TASK(null);
    }

    render() {
    	const
            { dispatch, navigation, tasks, ...actionProps } = this.props,
            navigationHelpers = addNavigationHelpers({ state: navigation, dispatch });

        return (
            <View style={AppContainerStyles.container}>
            	<Stack
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
