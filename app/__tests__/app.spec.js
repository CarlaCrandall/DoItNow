import React from 'react';
import { NavigationActions } from 'react-navigation';
import { BackAndroid } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../jest/utils.js';
import { App } from '../app';

describe('App', () => {
    let globalProps;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<App {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        BackAndroid.addEventListener = jest.fn();
        BackAndroid.removeEventListener = jest.fn();
        NavigationActions.back = jest.fn();

        globalProps = {
            navigation: { currentRoute: 'now' },
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Swipeout task open', () => {
        let output,
            instance;

        beforeAll(() => {
            globalProps.tasks = { swipeoutTask: '1234' };

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('renders the navigator component', () => {
            const AppNavigator = Utils.findAllWithType(output, 'NavigationContainer');
            expect(AppNavigator.length).toEqual(1);
        });

        it('componentDidMount adds the event listener for the Android back button', () => {
            expect(BackAndroid.addEventListener).not.toHaveBeenCalled();
            instance.componentDidMount();
            expect(BackAndroid.addEventListener).toHaveBeenCalled();
        });

        it('componentWillUnmount removes the event listener for the Android back button', () => {
            expect(BackAndroid.removeEventListener).not.toHaveBeenCalled();
            instance.componentWillUnmount();
            expect(BackAndroid.removeEventListener).toHaveBeenCalled();
        });

        it('handleBackPress returns false when navigation.index is 0', () => {
            const
                dispatch = jest.fn(),
                navigation = { index: 0 },
                result = instance.handleBackPress({ dispatch, navigation });

            expect(result).toEqual(false);
        });

        it('handleBackPress dispatches an action when navigation.index is not 0', () => {
            const
                dispatch = jest.fn(),
                navigation = { index: 2 },
                result = instance.handleBackPress({ dispatch, navigation });

            expect(dispatch).toHaveBeenCalled();
            expect(NavigationActions.back).toHaveBeenCalled();
            expect(result).toEqual(true);
        });

        it('componentWillReceiveProps calls SWIPEOUT_TASK when the route has changed', () => {
            const
                navigation = { currentRoute: 'later' },
                SWIPEOUT_TASK = jest.fn();

            expect(SWIPEOUT_TASK).not.toHaveBeenCalled();
            instance.componentWillReceiveProps({ navigation, SWIPEOUT_TASK });
            expect(SWIPEOUT_TASK).toHaveBeenCalledWith(null);
        });

        it('componentWillReceiveProps does not call SWIPEOUT_TASK when the route has not changed', () => {
            const
                navigation = { currentRoute: 'now' },
                SWIPEOUT_TASK = jest.fn();

            expect(SWIPEOUT_TASK).not.toHaveBeenCalled();
            instance.componentWillReceiveProps({ navigation, SWIPEOUT_TASK });
            expect(SWIPEOUT_TASK).not.toHaveBeenCalled();
        });
    });

    describe('Swipeout task closed', () => {
        let output,
            instance;

        beforeAll(() => {
            globalProps.tasks = { swipeoutTask: null };

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('componentWillReceiveProps does not call SWIPEOUT_TASK when the route has changed', () => {
            const
                navigation = { currentRoute: 'later' },
                SWIPEOUT_TASK = jest.fn();

            expect(SWIPEOUT_TASK).not.toHaveBeenCalled();
            instance.componentWillReceiveProps({ navigation, SWIPEOUT_TASK });
            expect(SWIPEOUT_TASK).not.toHaveBeenCalled();
        });
    });

});
