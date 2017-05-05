import * as actions from '../tasks';

describe('Task Actions', () => {
    let defaultId,
        defaultTask;

    beforeEach(() => {
        defaultId = 'someUniqueId';
        defaultTask = {
            id: 'someIdString',
            name: 'Some task name'
        };
    });

    it('ADD_TASK should return the object with the passed in task', () => {
        const result = actions.ADD_TASK(defaultTask);
        expect(result).toEqual({
            type: 'ADD_TASK',
            task: defaultTask
        });
    });

    it('EDIT_TASK should return the object with the passed in ID and task', () => {
        const result = actions.EDIT_TASK(defaultId, defaultTask);
        expect(result).toEqual({
            type: 'EDIT_TASK',
            id: defaultId,
            task: defaultTask
        });
    });

    it('DELETE_TASK should return the object with the passed in ID', () => {
        const result = actions.DELETE_TASK(defaultId);
        expect(result).toEqual({
            type: 'DELETE_TASK',
            id: defaultId
        });
    });

    it('TOGGLE_TASK should return the object with the passed in ID', () => {
        const result = actions.TOGGLE_TASK(defaultId);
        expect(result).toEqual({
            type: 'TOGGLE_TASK',
            id: defaultId
        });
    });

    it('SWIPEOUT_TASK should return the object with the passed in ID', () => {
        const result = actions.SWIPEOUT_TASK(defaultId);
        expect(result).toEqual({
            type: 'SWIPEOUT_TASK',
            id: defaultId
        });
    });

});
