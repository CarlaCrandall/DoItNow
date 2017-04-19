import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styles from '../styles/app-container';

class AppContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
				<Text>{this.props.tasks.list.length}</Text>
                <TouchableHighlight onPress={() => this.props.ADD_TASK('some task')}>
                	<Text>Add Task</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const
    mapStateToProps = state => ({ tasks: state.tasks });
    mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
