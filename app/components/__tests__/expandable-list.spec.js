import React from 'react';
import { LayoutAnimation } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { ExpandableList } from '../';

describe('ExpandableList', () => {
    let globalProps,
        output,
        instance;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<ExpandableList {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        LayoutAnimation.easeInEaseOut = jest.fn();

        globalProps = {
            title: 'Completed',
            data: [{
                id: '1234',
                name: 'Test task 1',
                status: 'complete'
            }, {
                id: 'abcd',
                name: 'Test task 2',
                status: 'complete'
            }]
        };

        const component = shallowRender(globalProps);
        output = component.output;
        instance = component.instance;
    });

    it('renders the required components', () => {
        const
            IconButton = Utils.findAllWithType(output, 'IconButton'),
            Text = Utils.findAllWithType(output, 'Text'),
            TaskList = Utils.findAllWithType(output, 'TaskList');

        expect(IconButton.length).toEqual(1);
        expect(Text.length).toEqual(2);
        expect(TaskList.length).toEqual(1);
    });

    it('updates the state when toggleList is called', () => {
        const IconButton = Utils.findAllWithType(output, 'IconButton')[0];

        expect(instance.state.expanded).toEqual(false);
        instance.toggleList();
        expect(instance.state.expanded).toEqual(true);
    });
});
