import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { TaskCard } from './';

export default class List extends PureComponent {

    shouldComponentUpdate() {
        return false;
    }

    renderItem({item}) {
        return <TaskCard {...item} />
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                removeClippedSubviews={false}
                keyExtractor={(item, index) => `${item.name}_${index}`}
                renderItem={item => this.renderItem(item)}
            />
        );
    }
}
