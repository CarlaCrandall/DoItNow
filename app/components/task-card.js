import React, { PureComponent } from 'react';
import { Dimensions, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox, SwipeButton, SwipeoutExtended } from './';
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
    	const
	    	textStyles = [
	    		TaskCardStyles.text,
	    		TaskCardStyles[`text--${this.props.list}`],
	    		TaskCardStyles[`text--${this.props.status}`]
	    	],
	    	toggleAction = this.props.status === 'active' ? 'complete' : 'uncheck',
			toggleIcon = this.props.status === 'active' ? 'check' : 'check-circle-o';

        return (
			<SwipeoutExtended
				right={[
					{
						component: this.renderButton()
					},
					{
						component: this.renderButton('edit', 'pencil'),
						onPress: () => console.log('edit event')
					},
					{
						component: this.renderButton('delete', 'trash'),
						onPress: () => this.props.DELETE_TASK(this.props.id)
					}
				]}
				style={TaskCardStyles.swipeout}
				buttonWidth={Dimensions.get('window').width / 3}
				autoClose={true}
				onOpen={() => console.log('open event')}
				scroll={() => console.log('scroll event')}
			>
				<View style={TaskCardStyles.taskCard}>
					<Checkbox id={this.props.id} checked={this.props.status === 'complete'} TOGGLE_TASK={this.props.TOGGLE_TASK} />
				    <Text style={textStyles}>{this.props.name}</Text>
				</View>
			</SwipeoutExtended>
        );
    }
}
