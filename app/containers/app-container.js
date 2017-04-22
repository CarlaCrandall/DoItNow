import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { ListContainer } from './';
import * as actions from '../actions';
import { AppContainerStyles } from '../styles/containers';

class AppContainer extends Component {
    render() {
    	const { tasks, ...actionProps } = this.props;
        return (
            <View style={AppContainerStyles.container}>
            	<ListContainer {...tasks} {...actionProps} />
            </View>
        );
    }
}

const
    mapStateToProps = state => ({ tasks: state.tasks });
    mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
