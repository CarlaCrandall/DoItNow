import React from 'react';
import { LayoutAnimation } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { DeleteConfirmation } from '../';
import { TaskForm } from '../task-form.js';

describe('TaskForm', () => {
    let globalProps;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<TaskForm {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            handleSubmit: jest.fn(),
            ADD_TASK: jest.fn(),
            EDIT_TASK: jest.fn(),
            DELETE_TASK: jest.fn(),
            navigation: {
                goBack: jest.fn()
            }
        };
    });

    describe('Add mode', () => {
        let output,
            instance;

        beforeAll(() => {
            globalProps.mode = 'add';

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('renders the reduxForm Field components', () => {
            const Field = Utils.findAllWithType(output, 'Field');
            expect(Field.length).toEqual(2);
        });

        it('reduxForm renders the AnimatedTextInput component', () => {
            const
                Field = Utils.findAllWithType(output, 'Field')[0],
                result = Field.props.component({});

            expect(result.type.name).toEqual('AnimatedTextInput');
        });

        it('reduxForm renders the AnimatedTextInput component', () => {
            const
                Field = Utils.findAllWithType(output, 'Field')[1],
                result = Field.props.component({}, 'Test label', []);

            expect(result.type.name).toEqual('CheckboxGroup');
        });

        it('editOrAddTask calls ADD_TASK', () => {
            instance.editOrAddTask({ name: 'Test task' });
            expect(globalProps.ADD_TASK).toHaveBeenCalledWith({ name: 'Test task' });
        });

        it('getId returns a randomized string', () => {
            const result = instance.getId();

            expect(typeof result).toEqual('string');
            expect(result.charAt(0)).toEqual('_');
            expect(result.length).toEqual(10);
        });

        it('getListTypeFromValues returns the correct list for the corresponding descriptors', () => {
            const
                result1 = instance.getListTypeFromValues(['urgent', 'important']),
                result2 = instance.getListTypeFromValues(['urgent']),
                result3 = instance.getListTypeFromValues(['important']),
                result4 = instance.getListTypeFromValues([]);

            expect(result1).toEqual('now');
            expect(result2).toEqual('later');
            expect(result3).toEqual('someday');
            expect(result4).toEqual(false);
        });

        it('handleSave should set the state', () => {
            expect(instance.state).toEqual({
                saving: false,
                listType: '',
                taskName: ''
            });

            instance.handleSave({
                taskName: 'Test task',
                descriptors: ['urgent']
            });

            expect(instance.state).toEqual({
                saving: true,
                listType: 'later',
                taskName: 'Test task'
            })
        });
    });

    describe('Edit mode', () => {
        let output,
            instance;

        beforeAll(() => {
            DeleteConfirmation.alert = jest.fn();

            globalProps.mode = 'edit';
            globalProps.id = '1234';
            globalProps.task = {
                name: 'Test task 1',
                listType: 'now',
                status: 'complete'
            };

            const component = shallowRender(globalProps);
            output = component.output;
            instance = component.instance;
        });

        it('editOrAddTask calls EDIT_TASK', () => {
            instance.editOrAddTask({ name: 'Test task' });
            expect(globalProps.EDIT_TASK).toHaveBeenCalledWith(globalProps.id, { name: 'Test task' });
        });

        it('getId returns props.id', () => {
            const result = instance.getId();
            expect(result).toEqual(globalProps.id);
        });

        it('handleDelete calls DeleteConfirmation.alert', () => {
            instance.handleDelete();
            expect(DeleteConfirmation.alert).toHaveBeenCalled();
        });

        it('deleteTask calls DELETE_TASK and goBack', () => {
            instance.deleteTask();
            expect(globalProps.DELETE_TASK).toHaveBeenCalled();
            expect(globalProps.navigation.goBack).toHaveBeenCalled();
        });
    });
});
