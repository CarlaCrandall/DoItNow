import React, { PureComponent } from 'react';
import { Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Task, SwipeButton, SwipeoutExtended } from './';
import { TaskRowStyles } from '../styles/components';


export default class TaskRow extends PureComponent {

	onDelete() {
		const
			title = 'Delete Task',
			message = 'Are you sure you want to permanently delete this task?',
			cancelButton = { text: 'Cancel', style: 'cancel' },
			deleteButton = {
				text: 'Delete',
				style: 'destructive',
				onPress: () => this.props.DELETE_TASK(this.props.task.id)
			};

		Alert.alert(title, message, [cancelButton, deleteButton]);
	}

	onEdit() {
		const params = {
			...this.props.task,
			mode: 'edit'
		};

		this.props.navigation.navigate('AddEditTask', params);
	}

	renderButton(btnType, btnIcon) {
		const btnText = btnType.charAt(0).toUpperCase() + btnType.slice(1);

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
			<SwipeoutExtended
				rowID={this.props.task.id}
				right={swipeButtons}
				style={TaskRowStyles.swipeout}
				buttonWidth={Dimensions.get('window').width / 3}
				close={this.props.task.id !== this.props.swipeoutTask}
				autoClose={true}
				onOpen={(sectionID, rowID) => this.props.SWIPEOUT_TASK(rowID)}
			>
				<Task
					{...this.props.task}
					completed={this.props.task.status === 'complete'}
					style={TaskRowStyles.row}
					TOGGLE_TASK={this.props.TOGGLE_TASK}
				/>
			</SwipeoutExtended>
        );
    }
}
