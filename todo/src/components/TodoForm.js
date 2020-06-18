import React, { useState } from 'react';
import moment from 'moment';


const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        setNewTodo('');
        props.dispatch({
            type: "ADD_TODO",
            payload: { item: newTodo, completed: false, 
            id: Date.now(),
            }
        })
        setNewTodo('');
    }

    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({type: "CLEAR_COMPLETED"})
    }
    
    return (
        <div>
            <form className="todo-form">
                <input
                    className="todo-input"
                    type="text"
                    name="newTodo"
                    placeholder="Enter Task"
                    value={newTodo}
                    onChange={handleChanges}
                    />
            </form>
            <button className="btn"
            onClick={addTodo}>
                Add Task
            </button>
            <button className="btn"
            onClick={clearCompleted}>
                Clear Task
            </button>
        </div>
    )
}

export default TodoForm;