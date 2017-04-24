import React, { PureComponent } from 'react';
import { Dimensions, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeButton, SwipeoutExtended } from './';
import { TaskCardStyles } from '../styles/components';
import { colors } from '../styles/vars';


export default class TaskCard extends PureComponent {

	renderButton(btnType, btnIcon) {
		const btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

		return (
			<SwipeButton type={btnType} icon={btnIcon} />
		);
	}

    render() {
    	const cardStyles = [TaskCardStyles.taskCard, TaskCardStyles[`taskCard--${this.props.list}`]];

        return (
			<SwipeoutExtended
				left={[
					{
						component: this.renderButton('complete', 'check'),
						onPress: () => console.log('press event')
					},
					{
						component: this.renderButton('cancel', 'ban'),
						onPress: () => console.log('press event')
					}
				]}
				right={[
					{
						component: this.renderButton('cancel', 'ban'),
					},
					{
						component: this.renderButton('delete', 'trash'),
					}
				]}
				style={TaskCardStyles.swipeout}
				buttonWidth={Dimensions.get('window').width * .5}
				autoClose={true}
				onOpen={() => console.log('open event')}
				scroll={() => console.log('scroll event')}
			>
				<TouchableHighlight style={cardStyles}>
				    <Text style={TaskCardStyles.text}>{this.props.name}</Text>
				</TouchableHighlight>
			</SwipeoutExtended>
        );
    }
}
