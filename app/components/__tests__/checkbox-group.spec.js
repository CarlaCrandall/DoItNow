import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { CheckboxGroup } from '../';

describe('CheckboxGroup', () => {
    let globalProps;

    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<CheckboxGroup {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            label: 'A group of checkboxes',
            value: [],
            checkboxes: [
                { name: 'Test checkbox 1' },
                { name: 'Test checkbox 2' }
            ],
            onChange: jest.fn()
        };
    });

    describe('Without error', () => {
        let output,
            instance;

        beforeAll(() => {
            globalProps.touched = false;
            globalProps.error = false;

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('renders the one Checkbox for each object the props.checkboxes array', () => {
            const Checkbox = Utils.findAllWithType(output, 'Checkbox');
            expect(Checkbox.length).toEqual(globalProps.checkboxes.length);
        });

        it('updates the state when a checkbox is checked', () => {
            expect(instance.state.value).toEqual([]);
            instance.onChange('Test checkbox 1', true);
            expect(instance.state.value).toEqual(['Test checkbox 1']);
        });

        it('updates the state when a checkbox is unchecked', () => {
            expect(instance.state.value).toEqual(['Test checkbox 1']);
            instance.onChange('Test checkbox 1', false);
            expect(instance.state.value).toEqual([]);
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
