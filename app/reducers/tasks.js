const initialState = {
    list: [
        { name: 'Pay electric bill', list: 'now' },
        { name: 'Call plumber regarding leak', list: 'now' },
        { name: 'Schedule appointment with dentist', list: 'later' },
        { name: 'Clean out fridge', list: 'someday' },
        { name: 'Buy birthday present for mom', list: 'later' },
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
