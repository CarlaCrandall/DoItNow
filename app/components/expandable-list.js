import React, { Component } from 'react';
import { LayoutAnimation, Text, TouchableHighlight, UIManager, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TaskList } from './';
import { ExpandableListStyles } from '../styles/components';
import { colors, iconSizes } from '../styles/vars';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ExpandableList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    toggleList() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const
            viewStyles = [
                ExpandableListStyles.view,
                this.state.expanded && ExpandableListStyles['view--expanded']
            ],
            iconName = this.state.expanded ? 'chevron-down' : 'chevron-right';

        return (
            <View style={viewStyles} ref={comp => {this.comp = comp;}}>
                <Icon.Button
                    name={iconName}
                    size={iconSizes.small}
                    color={colors.darkGray}
                    iconStyle={ExpandableListStyles.icon}
                    style={ExpandableListStyles.button}
                    onPress={() => this.toggleList()}
                >
                    <Text style={ExpandableListStyles.title}>{this.props.title} ({this.props.data.length})</Text>
                </Icon.Button>
                <TaskList
                    data={this.props.data}
                    DELETE_TASK={this.props.DELETE_TASK}
                    TOGGLE_TASK={this.props.TOGGLE_TASK}
                />
            </View>

        );
    }
}
