import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils';
import { TaskList } from '../';

describe('TaskList', () => {
    const shallowRender = (props) => {
        const renderer = new ShallowRenderer();
        renderer.render(<TaskList {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    describe('List with data', () => {
        let globalProps,
            output,
            instance;

        beforeAll(() => {
            globalProps = {
                category: 'someday',
                data: [{
                    id: '1234',
                    name: 'Test task 1',
                    status: 'active'
                }, {
                    id: 'abcd',
                    name: 'Test task 2',
                    status: 'active'
                }]
            };

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('renders the list when data is present', () => {
            const
                FlatList = Utils.findAllWithType(output, 'FlatList'),
                message = Utils.findAllWithType(output, 'View');

            expect(FlatList.length).toEqual(1);
            expect(message.length).toEqual(0);
        });

        it('renderItem returns a TaskRow component', () => {
            const
                data = { item: globalProps.data[0] },
                result = instance.renderItem(data);

            expect(result.type.name).toEqual('TaskRow');
        });
    });

    describe('Empty list', () => {
        let globalProps,
            output;

        beforeAll(() => {
            globalProps = {
                category: 'someday',
                data: []
            };

            const component = shallowRender(globalProps);
            output = component.output;
        });

        it('renders the message when no data is present', () => {
            const
                FlatList = Utils.findAllWithType(output, 'FlatList'),
                message = Utils.findAllWithType(output, 'View');

            expect(FlatList.length).toEqual(0);
            expect(message.length).toEqual(1);
        });
    });
});
