export const ADD_TASK = (task) => {
    return {
        type: 'ADD_TASK',
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
