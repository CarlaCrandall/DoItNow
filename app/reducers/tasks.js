const initialState = {
    list: [
        { id: 0, name: 'Pay electric bill', list: 'now', status: 'complete' },
        { id: 1, name: 'Call plumber regarding leak', list: 'now', status: 'active'  },
        { id: 2, name: 'Schedule appointment with dentist', list: 'later', status: 'active'  },
        { id: 3, name: 'Clean out fridge', list: 'someday', status: 'active'  },
        { id: 4, name: 'Buy birthday present for mom', list: 'later', status: 'active'  },
    ]
};

const tasks = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TASK': {
            return {
                ...state,
                list: [...state.list, action.task]
            };
        }

        case 'DELETE_TASK': {
            return {
                ...state,
                list: state.list.filter(task => task.id !== action.id)
            }
        }

        case 'TOGGLE_TASK': {
            return {
                ...state,
                list: state.list.map(task => {
                    let status = task.status;

                    if (task.id === action.id) {
                        status = (task.status === 'active') ? 'complete' : 'active';
                    }

                    return { ...task, status: status }
                })
            }
        }

        default: {
            return state;
        }
    }
};

export default tasks;
