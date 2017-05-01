export const ADD_TASK = (task) => {
    return {
        type: 'ADD_TASK',
        task
    };
};

export const EDIT_TASK = (id, task) => {
    return {
        type: 'EDIT_TASK',
        id,
        task
    };
};

export const DELETE_TASK = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    };
};

export const TOGGLE_TASK = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    };
};

export const SWIPEOUT_TASK = (id) => {
    return {
        type: 'SWIPEOUT_TASK',
        id
    };
};
