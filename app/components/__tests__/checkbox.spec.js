import React from 'react';
import { Keyboard } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { Checkbox } from '../';

describe('Checkbox', () => {
    let globalProps,
        output,
        instance;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<Checkbox {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        Keyboard.dismiss = jest.fn();

        globalProps = {
            checked: false,
            icon: 'check-square-o',
            name: 'Test Task',
            onChange: jest.fn()
        };

        const component = shallowRender(globalProps);
        output = component.output;
        instance = component.instance;
    });

    it('renders the required components', () => {
        const
            TouchableOpacity = Utils.findAllWithType(output, 'TouchableOpacity'),
            Icon = Utils.findAllWithType(output, 'Icon')
            Text = Utils.findAllWithType(output, 'Text');

        expect(TouchableOpacity.length).toEqual(1);
        expect(Icon.length).toEqual(1);
        expect(Text.length).toEqual(1);
    });

    it('updates the state and calls props.onChange when handlePress is called', () => {
        const TouchableOpacity = Utils.findAllWithType(output, 'TouchableOpacity')[0];

        expect(instance.state.checked).toEqual(false);
        instance.handlePress();

        expect(instance.state.checked).toEqual(true);
        expect(globalProps.onChange).toHaveBeenCalledWith(globalProps.name, true);
    });
});
