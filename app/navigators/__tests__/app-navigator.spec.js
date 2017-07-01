import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { AppNavigator } from '../';

describe('AppNavigator', () => {
    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<AppNavigator {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };


    it('creates a Navigator', () => {
        const component = shallowRender().output;
        expect(Utils.isComponentOfType(component, 'Navigator')).toEqual(true);
    });

    describe('Home Route', () => {
        let component,
            navigation,
            homeOptions;

        beforeAll(() => {
            navigation = { navigate: jest.fn() };
            component = shallowRender().output;
            homeOptions = component.type.routeConfigs.Home.navigationOptions({ navigation });
        });

        it('creates the title', () => {
            expect(homeOptions.headerTitle).toEqual('Do It Now');
        });

        it('creates the add task button', () => {
            expect(Utils.isComponentOfType(homeOptions.headerRight, 'IconButton')).toEqual(true);
        });

        it('calls navigation.navigate() when the add task button is pressed', () => {
            homeOptions.headerRight.props.onPress();
            expect(navigation.navigate).toHaveBeenCalledWith('AddEditTask', { mode: 'add' });
        });
    });

    describe('Add Task Route', () => {
        let component,
            navigation,
            addTaskOptions;

        beforeAll(() => {
            navigation = {
                goBack: jest.fn(),
                state: { params: { mode: 'add' } }
            };

            component = shallowRender().output;
            addTaskOptions = component.type.routeConfigs.AddEditTask.navigationOptions({ navigation });
        });

        it('creates the title', () => {
            expect(addTaskOptions.headerTitle).toEqual('Add Task');
        });

        it('creates the back button', () => {
            expect(Utils.isComponentOfType(addTaskOptions.headerLeft, 'IconButton')).toEqual(true);
        });

        it('calls navigation.goBack() when the back button is pressed', () => {
            addTaskOptions.headerLeft.props.onPress();
            expect(navigation.goBack).toHaveBeenCalled();
        });
    });

    describe('Edit Task Route', () => {
        let component,
            navigation,
            editTaskOptions;

        beforeAll(() => {
            navigation = {
                goBack: jest.fn(),
                state: { params: { mode: 'edit' } }
            };

            component = shallowRender().output;
            editTaskOptions = component.type.routeConfigs.AddEditTask.navigationOptions({ navigation });
        });

        it('creates the title', () => {
            expect(editTaskOptions.headerTitle).toEqual('Edit Task');
        });

        it('creates the back button', () => {
            expect(Utils.isComponentOfType(editTaskOptions.headerLeft, 'IconButton')).toEqual(true);
        });

        it('calls navigation.goBack() when the back button is pressed', () => {
            editTaskOptions.headerLeft.props.onPress();
            expect(navigation.goBack).toHaveBeenCalled();
        });
    });
});
