import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import { DeleteConfirmation, SwipeButton, Task } from './';
import { TaskRowStyles } from '../styles/components';
import * as Utilities from '../utils';


export default class TaskRow extends PureComponent {

	onDelete() {
		const deleteOnPress = () => this.props.DELETE_TASK(this.props.task.id)
		DeleteConfirmation.alert(deleteOnPress);
	}

	onEdit() {
		const params = {
			...this.props.task,
			mode: 'edit'
		};

		this.props.navigation.navigate('AddEditTask', params);
	}

	renderButton(btnType, btnIcon) {
		return (
			<SwipeButton type={btnType} icon={btnIcon} />
		);
	}

    render() {
    	const
	    	toggleAction = this.props.task.status === 'active' ? 'complete' : 'uncheck',
			toggleIcon = this.props.task.status === 'active' ? 'check' : 'check-circle-o',
			swipeButtons = [{
				component: this.renderButton('cancel', 'ban')
			}, {
				component: this.renderButton('edit', 'pencil'),
				onPress: () => this.onEdit()
			}, {
				component: this.renderButton('delete', 'trash'),
				onPress: () => this.onDelete()
			}];

        return (
			<Swipeout
				rowID={this.props.task.id}
				right={swipeButtons}
				style={TaskRowStyles.swipeout}
				buttonWidth={Dimensions.get('window').width / 3}
				close={this.props.task.id !== this.props.swipeoutTask}
				autoClose={true}
				sensitivity={100}
				onOpen={(sectionID, rowID) => this.props.SWIPEOUT_TASK(rowID)}
			>
				<Task
					{...this.props.task}
					completed={this.props.task.status === 'complete'}
					style={TaskRowStyles.row}
					TOGGLE_TASK={this.props.TOGGLE_TASK}
				/>
			</Swipeout>
        );
    }
}
