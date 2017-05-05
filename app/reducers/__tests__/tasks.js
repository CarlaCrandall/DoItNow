import tasks from '../tasks';

describe('Task Reducers', () => {
    let state;

    beforeEach(() => {
        state = {
            swipeoutTask: null,
            list: [{
                id: 'firstTaskInList',
                name: 'First Task',
                status: 'active'
            }]
        };
    });

    it('should return the state for actions that are not defined', () => {
        const
            action = { type: 'TEST_ACTION' },
            result = tasks(state, action);

        expect(result).toEqual(state);
    });

    it('should return the state for ADD_TASK', () => {
        const
            payloadTask = {
                id: 'someUniqueIdString',
                name: 'A task to add'
            },
            action = {
                type: 'ADD_TASK',
                task: payloadTask
            },
            result = tasks(state, action);

        expect(result.list.length).toEqual(2);
        expect(result.list[1]).toEqual(payloadTask);
    });

    it('should return the state for EDIT_TASK', () => {
        const
            payloadTask = {
                id: 'firstTaskInList',
                name: 'A task to edit'
            },
            action = {
                type: 'EDIT_TASK',
                id: 'firstTaskInList',
                task: payloadTask
            },
            result = tasks(state, action);

        expect(result.list[0]).toEqual(payloadTask);
    });

    it('should return the state for DELETE_TASK', () => {
        const
            action = {
                type: 'DELETE_TASK',
                id: 'firstTaskInList'
            },
            result = tasks(state, action);

        expect(result.list.length).toEqual(0);
    });

    it('should return the state for TOGGLE_TASK', () => {
        const
            action = {
                type: 'TOGGLE_TASK',
                id: 'firstTaskInList'
            },
            result = tasks(state, action);

        expect(result.list[0].status).toEqual('complete');
    });

    it('should return the state for SWIPEOUT_TASK', () => {
        const
            action = {
                type: 'SWIPEOUT_TASK',
                id: 'idOfTaskToSwipeout'
            },
            result = tasks(state, action);

        expect(result.swipeoutTask).toEqual('idOfTaskToSwipeout');
    });
});
