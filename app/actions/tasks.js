export const ADD_TASK = (task) => {
    return {
        type: 'ADD_TASK',
        task
    };
};

export const SET_ACTIVE_LIST = (listId) => {
    return {
        type: 'SET_ACTIVE_LIST',
        listId
    };
};
