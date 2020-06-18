import moment from 'moment';


export const initialState = {
    todos: [
        {
            item: "Make a javascript",
            completed: false,
            id: "",
            due: moment().format('ddd, MMM Do YYYY'),
            raw: ""
        }
    ]
}

export const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case "TOGGLE_COMPLETED":
            let timeCompleted = moment().format('MMM Do YYYY, h:mm:ss a')
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {

                            ...todo,
                            completed: !todo.completed,
                            timeCompleted: todo.completed === false && timeCompleted
                        }
                    } else {
                        return todo;
                    }
                })
            }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
            default:
                return state;
    }
}