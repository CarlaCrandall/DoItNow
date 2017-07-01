import React from 'react';
import { Animated, LayoutAnimation } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { AnimatedTextInput } from '../';

describe('AnimatedTextInput', () => {
    let globalProps;

    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<AnimatedTextInput {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            label: 'An animated text input',
            value: '',
            touched: false,
            error: false,
            onChange: jest.fn()
        };
    });

    describe('Basic functionality', () => {
        let output,
            instance;

        beforeAll(() => {
            Animated.timing = jest.fn();
            Animated.start = jest.fn();
            Animated.timing.mockImplementation(() => Animated);
            LayoutAnimation.easeInEaseOut = jest.fn();

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        afterEach(() => {
            instance.state = {
                focused: false,
                hasValue: false
            };

            jest.clearAllMocks();
        });

        it('renders the TextInput and Animated.View components', () => {
            const
                TextInput = Utils.findAllWithType(output, 'TextInput'),
                AnimatedView = Utils.findAllWithType(output, 'AnimatedComponent');

            expect(TextInput.length).toEqual(1);
            expect(AnimatedView.length).toEqual(1);
        });

        it('sets the state when onLayout is called', () => {
            expect(instance.state.animatedValue).not.toBeDefined();
            instance.onLayout({ width: '100' });
            expect(instance.state.animatedValue).toBeDefined();
        });

        it('sets the state when toggleFocus is called', () => {
            expect(instance.state.focused).toEqual(false);
            instance.toggleFocus(true);
            expect(instance.state.focused).toEqual(true);
        });

        it('does not animate the border when toggleFocus is called and hasValue equals true', () => {
            instance.setState({ hasValue: true });
            instance.toggleFocus(true);
            expect(Animated.start).not.toHaveBeenCalled();
        });

        it('animates the border when toggleFocus is called and hasValue equals false', () => {
            instance.toggleFocus(false);
            expect(Animated.start).toHaveBeenCalled();
        });

        it('sets the state when the component receives new props', () => {
            expect(instance.state.hasValue).toEqual(false);
            instance.componentWillReceiveProps({ value: 'Test value' });
            expect(instance.state.hasValue).toEqual(true);
        });
    });

    describe('With default value', () => {
        let output;

        beforeAll(() => {
            globalProps.value = 'Test default value';

            const component = shallowRender(globalProps);
            output = component.output;
        });

        it('renders the TextInput with a default value', () => {
            const TextInput = Utils.findAllWithType(output, 'TextInput')[0];
            expect(TextInput.props.value).toEqual(globalProps.value);
        });
    });

    describe('With error', () => {
        let output;

        beforeAll(() => {
            globalProps.touched = true;
            globalProps.error = 'Test error message';

            const component = shallowRender(globalProps);
            output = component.output;
        });

        it('renders the error message', () => {
            const Text = Utils.findAllWithType(output, 'Text')[1];
            expect(Text.props.children).toEqual(globalProps.error);
        });
    });
});
