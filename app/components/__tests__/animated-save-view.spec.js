import React from 'react';
import { Animated } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { AnimatedSaveView } from '../';

describe('AnimatedSaveView', () => {
    let globalProps,
        output,
        instance;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<AnimatedSaveView {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        Animated.parallel = jest.fn();
        Animated.timing = jest.fn();
        Animated.stagger = jest.fn();
        Animated.delay = jest.fn();
        Animated.sequence = jest.fn();
        Animated.start = jest.fn();
        Animated.sequence.mockImplementation(() => Animated);

        globalProps = {
            saving: false,
            listType: 'now',
            taskName: 'Test task',
            goBack: jest.fn()
        };

        const component = shallowRender(globalProps);
        output = component.output;
        instance = component.instance;
    });

    it('renders the required components', () => {
        const Animated = Utils.findAllWithType(output, 'AnimatedComponent');
        expect(Animated.length).toEqual(3);
    });

    it('animates the view when saving is in progress', () => {
        instance.componentWillReceiveProps({ saving: true });
        expect(Animated.start).toHaveBeenCalled();
    });
});
