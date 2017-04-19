import React, { PureComponent } from 'react';
import { FlatList, Text } from 'react-native';
import { TabBar, TabViewAnimated, TabViewPagerPan } from 'react-native-tab-view';
import { List } from '../components';
import styles from '../styles/list-container';

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

    renderHeader(props) {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                labelStyle={styles.label}
                style={styles.tabbar}
            />
        );
    }

    renderScene({ route }) {
        const listData = this.props.list.filter(task => task.list === route.key);
        return <List data={listData} />;
    }

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderPager={this.renderPager}
                renderScene={(route) => this.renderScene(route)}
                renderHeader={this.renderHeader}
                onRequestChangeTab={(index) => this.handleChangeTab(index)}
            />
        );
    }
}
