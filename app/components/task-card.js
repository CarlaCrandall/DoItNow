import React, { PureComponent } from 'react';
import { Dimensions, TouchableHighlight, Text, View } from 'react-native';
import { SwipeoutExtended } from './';
import { TaskCardStyles } from '../styles/components';
import { colors } from '../styles/vars';

export default class TaskCard extends PureComponent {

	renderButton(btnText) {
		const styles = {
			rowContainer: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}
		};

		return (
			<View style={styles.rowContainer}>
				<Text>{btnText}</Text>
			</View>
		);
	}

    render() {
        return (
			<SwipeoutExtended
				left={[{
					component: this.renderButton('Complete'),
					backgroundColor: colors.white,
					color: colors.darkGray
				}]}
				right={[{
					component: this.renderButton('Delete'),
					backgroundColor: colors.white,
					color: colors.darkGray
				}]}
				buttonWidth={Dimensions.get('window').width}
				backgroundColor={colors.white}
				autoClose={true}
				onOpen={() => console.log('open event')}
				scroll={() => console.log('scroll event')}
			>
				<TouchableHighlight style={[TaskCardStyles.taskCard, TaskCardStyles[`taskCard--${this.props.list}`]]}>
				    <Text style={TaskCardStyles.text}>{this.props.name}</Text>
				</TouchableHighlight>
			</SwipeoutExtended>
        );
    }
}
