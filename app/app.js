import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import * as actions from './actions';
import { AppContainerStyles } from './styles/containers';
import { Stack } from './router';

class App extends Component {
    render() {
    	const { tasks, ...actionProps } = this.props;
        return (
            <View style={AppContainerStyles.container}>
            	<Stack screenProps={{...tasks, ...actionProps}} />
            </View>
        );
    }
}

const
    mapStateToProps = state => ({ tasks: state.tasks });
    mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
