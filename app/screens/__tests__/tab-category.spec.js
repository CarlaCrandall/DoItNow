import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { TabCategory } from '../';

describe('TabCategory', () => {
    let output,
        globalProps;

    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<TabCategory {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            navigation: {
                state: {
                    routeName: 'Now'
                }
            },
            screenProps: {
                list: [{
                    list: 'now',
                    name: 'Test task 1'
                }, {
                    list: 'later',
                    name: 'Test task 2'
                }, {
                    list: 'someday',
                    name: 'Test task 3'
                }, {
                    list: 'now',
                    name: 'Test task 4'
                }]
            }
        };

        output = shallowRender(globalProps).output;
    });

    it('renders the TaskCategory component', () => {
        const result = Utils.findAllWithType(output, 'TaskCategory');
        expect(result.length).toEqual(1);
    });

    it('filters the list data', () => {
        const
            TaskCategory = Utils.findAllWithType(output, 'TaskCategory')[0],
            listData = TaskCategory.props.data;

        expect(listData.length).toEqual(2);
        expect(listData[0]).toEqual(globalProps.screenProps.list[0]);
        expect(listData[1]).toEqual(globalProps.screenProps.list[3]);
    });
});
