import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { TaskCategory } from '../';

describe('TaskCategory', () => {
    let globalProps,
        component;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<TaskCategory {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            data: [{
                name: 'Test Task 1',
                status: 'active'
            }, {
                name: 'Test Task 2',
                status: 'complete'
            }, {
                name: 'Test Task 3',
                status: 'active'
            }]
        };

        component = shallowRender(globalProps).output;
    });

    it('renders the TaskList with the active tasks', () => {
        const TaskList = Utils.findAllWithType(component, 'TaskList');
        expect(TaskList.length).toEqual(1);
        expect(TaskList[0].props.data).toEqual([ globalProps.data[0], globalProps.data[2] ]);
    });

    it('renders the ExpandableList with the completed tasks', () => {
        const ExpandableList = Utils.findAllWithType(component, 'ExpandableList');
        expect(ExpandableList.length).toEqual(1);
        expect(ExpandableList[0].props.data).toEqual([ globalProps.data[1] ])
    });
});
