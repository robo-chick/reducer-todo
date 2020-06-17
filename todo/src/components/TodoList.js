import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(state);

    return (
        <div className="todo-list">
            {state.todos.map(todo => {
                console.log(todo)
                return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })}

            <TodoForm dispatch={dispatch} />
        </div>
    )
}

export default TodoList;