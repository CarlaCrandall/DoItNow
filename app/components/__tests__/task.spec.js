import React from 'react';
import { LayoutAnimation } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { Task } from '../';

describe('Task', () => {
    let globalProps;

    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<Task {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        jest.useFakeTimers();
        LayoutAnimation.easeInEaseOut = jest.fn();

        globalProps = {
            list: 'now',
            name: 'Test task',
            TOGGLE_TASK: jest.fn()
        };
    });

    describe('Incomplete Task', () => {
        let output,
            instance,
            callback;

        beforeAll(() => {
            globalProps.completed = false;

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;

            instance.setState = jest.fn();
        });

        it('renders the task name', () => {
            const Text = Utils.findAllWithType(output, 'Text');
            expect(Text[0].props.children).toEqual(globalProps.name);
        });

        it('updates the state when pressed', () => {
            instance.handlePress();

            expect(instance.setState).toHaveBeenCalled();
            expect(instance.setState.mock.calls[0][0]).toEqual({ completed: true });
        });

        it('toggles the task when the setState callback is called', () => {
            callback = instance.setState.mock.calls[0][1];
            callback();

            jest.runAllTimers();
            expect(globalProps.TOGGLE_TASK).toHaveBeenCalled();
        });
    });

    describe('Complete Task', () => {
        let output,
            instance,
            callback;

        beforeAll(() => {
            globalProps.completed = true;

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;

            instance.setState = jest.fn();
        });

        it('renders the checked icon', () => {
            const Icon = Utils.findAllWithType(output, 'Icon');
            expect(Icon.length).toEqual(1);
            expect(Icon[0].props.name).toEqual('check');
        });

        it('updates the state when pressed', () => {
            instance.handlePress();

            expect(instance.setState).toHaveBeenCalled();
            expect(instance.setState.mock.calls[0][0]).toEqual({ completed: false });
        });

        it('toggles the task when the setState callback is called', () => {
            callback = instance.setState.mock.calls[0][1];
            callback();

            jest.runAllTimers();
            expect(globalProps.TOGGLE_TASK).toHaveBeenCalled();
        });
    });
});
