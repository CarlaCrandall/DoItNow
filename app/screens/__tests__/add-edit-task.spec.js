import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { AddEditTask } from '../';

describe('AddEditTask', () => {
    let component;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<AddEditTask {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        const globalProps = {
            navigation: {
                state: {
                    params: { mode: 'add' }
                }
            },
            screenProps: {
                DELETE_TASK: jest.fn(),
                ADD_TASK: jest.fn(),
                EDIT_TASK: jest.fn()
            }
        };

        component = shallowRender(globalProps);
    });

    describe('Render', () => {
        it('renders the form component', () => {
            const result = Utils.findAllWithType(component.output, 'Connect(ReduxForm)');
            expect(result.length).toEqual(1);
        });
    });

    describe('getValuesFromListType', () => {
        it('returns values when listType is now', () => {
            const result = component.instance.getValuesFromListType('now');
            expect(result).toEqual(['urgent', 'important']);
        });

        it('returns values when listType is later', () => {
            const result = component.instance.getValuesFromListType('later');
            expect(result).toEqual(['urgent']);
        });

        it('returns values when listType is someday', () => {
            const result = component.instance.getValuesFromListType('someday');
            expect(result).toEqual(['important']);
        });
    });
});
