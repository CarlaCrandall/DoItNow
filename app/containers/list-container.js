import React, { PureComponent } from 'react';
import { Animated, FlatList, Text } from 'react-native';
import { TabBar, TabViewAnimated, TabViewPagerPan } from 'react-native-tab-view';
import { List } from '../components';
import { ListContainerStyles } from '../styles/containers';

export default class ListContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            index: props.listId,
            routes: [
                { key: 'now', title: 'Now' },
                { key: 'later', title: 'Later' },
                { key: 'someday', title: 'Someday' }
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.listId !== this.props.listId) {
            this.setState({ index: nextProps.listId });
        }
    }

    handleChangeTab(index) {
        this.props.SET_ACTIVE_LIST(index);
    }

    renderPager(props) {
        return <TabViewPagerPan {...props} swipeEnabled={false} />;
    }

    renderScene({ route }) {
        const listData = this.props.list.filter(task => task.list === route.key);
        return <List data={listData} />;
    }

    renderHeader(props) {
        return (
            <TabBar
                {...props}
                indicatorStyle={ListContainerStyles.indicator}
                labelStyle={ListContainerStyles.label}
                style={ListContainerStyles.tabbar}
            />
        );
    }

    render() {
        return (
            <TabViewAnimated
                style={ListContainerStyles.container}
                navigationState={this.state}
                renderPager={this.renderPager}
                renderScene={(route) => this.renderScene(route)}
                renderHeader={(props) => this.renderHeader(props)}
                onRequestChangeTab={(index) => this.handleChangeTab(index)}
            />
        );
    }
}
