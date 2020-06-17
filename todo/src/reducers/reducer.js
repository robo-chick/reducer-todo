export const initialState = {
    todos: [
        {
            item: "work on todo project",
            completed: false,
            id: 1
        },
        {
            item: "go to the gym",
            completed: false,
            id: 2
        }
    ]
}

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map((e) => {
                    if (e.id === action.payload) {
                        return {

                            ...e,
                            completed: !e.completed
                        }
                    } else {
                        return e;
                    }
                })
            }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }
    }
}