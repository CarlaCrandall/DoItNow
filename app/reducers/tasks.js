const initialState = {
    list: [
        { name: 'Task1', list: 'now' },
        { name: 'Task4', list: 'now' },
        { name: 'Task2', list: 'later' },
        { name: 'Task3', list: 'someday' },
        { name: 'Task5', list: 'later' },
    ],
    listId: 0
};

const tasks = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TASK': {
            return {
                ...state,
                list: [...state.list, action.task]
            };
        }

        case 'SET_ACTIVE_LIST': {
            return {
                ...state,
                listId: action.listId
            };
        }

        default: {
            return state;
        }
    }
};

export default tasks;
