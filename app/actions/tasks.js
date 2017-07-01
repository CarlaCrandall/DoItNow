export const ADD_TASK = task => ({
    type: 'ADD_TASK',
    task
});

export const EDIT_TASK = (id, task) => ({
    type: 'EDIT_TASK',
    id,
    task
});

export const DELETE_TASK = id => ({
    type: 'DELETE_TASK',
    id
});

export const TOGGLE_TASK = id => ({
    type: 'TOGGLE_TASK',
    id
});

export const SWIPEOUT_TASK = id => ({
    type: 'SWIPEOUT_TASK',
    id
});
