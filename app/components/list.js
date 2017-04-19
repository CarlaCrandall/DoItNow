import React, { PureComponent } from 'react';
import { FlatList, Text } from 'react-native';

export default class List extends PureComponent {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                removeClippedSubviews={false}
                keyExtractor={(item, index) => `${item.name}_${index}`}
                renderItem={({item}) => <Text>{item.name}</Text>}
            />
        );
    }
}
