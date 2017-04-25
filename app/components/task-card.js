import React, { PureComponent } from 'react';
import { Dimensions, TouchableHighlight, Text, View } from 'react-native';
import { SwipeButton, SwipeoutExtended } from './';
import { TaskCardStyles } from '../styles/components';
import { colors } from '../styles/vars';


export default class TaskCard extends PureComponent {

	renderButton(btnType = 'cancel', btnIcon = 'ban') {
		const btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

		return (
			<SwipeButton type={btnType} icon={btnIcon} />
		);
	}

    render() {
    	const cardStyles = [
    		TaskCardStyles.taskCard,
    		TaskCardStyles[`taskCard--${this.props.list}`],
    		TaskCardStyles[`taskCard--${this.props.status}`]
    	];

        return (
			<SwipeoutExtended
				left={[
					{
						component: this.renderButton('complete', 'check'),
						onPress: () => this.props.TOGGLE_TASK(this.props.id)
					},
					{ component: this.renderButton() }
				]}
				right={[
					{ component: this.renderButton() },
					{
						component: this.renderButton('delete', 'trash'),
						onPress: () => this.props.DELETE_TASK(this.props.id)
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
