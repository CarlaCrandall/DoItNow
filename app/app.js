import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as actions from './actions';
import { AppContainerStyles } from './styles/containers';
import { Tabs } from './router';

class App extends Component {
    render() {
    	const { tasks, ...actionProps } = this.props;
        return (
            <View style={AppContainerStyles.container}>
            	<Tabs screenProps={{...tasks, ...actionProps}} />
            </View>
        );
    }
}

const
    mapStateToProps = state => ({ tasks: state.tasks });
    mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
