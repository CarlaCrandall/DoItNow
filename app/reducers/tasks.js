const initialState = {
    swipeoutTask: null,
    list: []
};

const tasks = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TASK': {
            return {
                ...state,
                list: [...state.list, action.task]
            };
        }

        case 'EDIT_TASK': {
            return {
                ...state,
                list: state.list.map((task) => {
                    if (task.id === action.id) {
                        task = action.task;
                    }

                    return task;
                })
            };
        }

        case 'DELETE_TASK': {
            return {
                ...state,
                list: state.list.filter(task => task.id !== action.id)
            };
        }

        case 'TOGGLE_TASK': {
            return {
                ...state,
                list: state.list.map((task) => {
                    let status = task.status;

                    if (task.id === action.id) {
                        status = (task.status === 'active') ? 'complete' : 'active';
                    }

                    return { ...task, status };
                })
            };
        }

        case 'SWIPEOUT_TASK': {
            return {
                ...state,
                swipeoutTask: action.id
            };
        }

        default: {
            return state;
        }
    }
};

export default tasks;
