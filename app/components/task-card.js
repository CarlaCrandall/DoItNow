import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox, SwipeButton, SwipeoutExtended } from './';
import { TaskCardStyles } from '../styles/components';


export default class TaskCard extends PureComponent {

	renderButton(btnType, btnIcon) {
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
			toggleIcon = this.props.status === 'active' ? 'check' : 'check-circle-o',
			swipeButtons = [{
				component: this.renderButton('cancel', 'ban')
			}, {
				component: this.renderButton('edit', 'pencil'),
				onPress: () => this.props.navigate('AddEditTask', { mode: 'edit' })
			}, {
				component: this.renderButton('delete', 'trash'),
				onPress: () => this.props.DELETE_TASK(this.props.id)
			}];

        return (
			<SwipeoutExtended
				right={swipeButtons}
				style={TaskCardStyles.swipeout}
				buttonWidth={Dimensions.get('window').width / 3}
				autoClose={true}
				onOpen={() => console.log('open event')}
				scroll={() => console.log('scroll event')}
			>
				<Checkbox
					{...this.props}
					checked={this.props.status === 'complete'}
					style={TaskCardStyles.row}
					textStyle={textStyles}
				/>
			</SwipeoutExtended>
        );
    }
}
