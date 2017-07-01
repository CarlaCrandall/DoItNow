import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { DeleteConfirmation, TaskRow } from '../';

describe('TaskRow', () => {
    let globalProps,
        output,
        instance;

    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<TaskRow {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        DeleteConfirmation.alert = jest.fn();

        globalProps = {
            swipeoutTask: 'ABCD',
            task: {
                id: '1234',
                list: 'later',
                name: 'Test task',
                status: 'active'
            },
            navigation: { navigate: jest.fn() },
            DELETE_TASK: jest.fn(),
            TOGGLE_TASK: jest.fn(),
            SWIPEOUT_TASK: jest.fn()
        };

        const component = shallowRender(globalProps);
        output = component.output;
        instance = component.instance;
    });

    it('renders the Swipeout and Task components', () => {
        const
            Swipeout = Utils.findAllWithType(output, 'Swipeout'),
            Task = Utils.findAllWithType(output, 'Task');

        expect(Swipeout.length).toEqual(1);
        expect(Task.length).toEqual(1);
    });

    it('calls DeleteConfirmation.alert when onDelete is called', () => {
        instance.onDelete();
        expect(DeleteConfirmation.alert).toHaveBeenCalled();
    });

    it('calls DELETE_TASK when the DeleteConfirmation is confirmed', () => {
        const onPress = DeleteConfirmation.alert.mock.calls[0][0];
        onPress();
        expect(globalProps.DELETE_TASK).toHaveBeenCalledWith(globalProps.task.id);
    });

    it('calls navigate when onEdit is called', () => {
        instance.onEdit();
        expect(globalProps.navigation.navigate).toHaveBeenCalled();
        expect(globalProps.navigation.navigate.mock.calls[0][0]).toEqual('AddEditTask');
        expect(globalProps.navigation.navigate.mock.calls[0][1]).toEqual({ ...globalProps.task, mode: 'edit' });
    });

    it('calls SWIPEOUT_TASK when Swipeout is opened', () => {
        const Swipeout = Utils.findAllWithType(output, 'Swipeout')[0];
        Swipeout.props.onOpen('123', 'ABC');
        expect(globalProps.SWIPEOUT_TASK).toHaveBeenCalledWith('ABC');
    });
});
