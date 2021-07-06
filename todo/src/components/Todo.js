import React from 'react';
import moment from 'moment';

export default function Todo({ todo, dispatch }) {
    const handleChanges = (id) => {
        // console.log(id, todo);
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: id
        })
    }

    

    return (
        <>
        <div className={`todo ${todo.completed ? "completed" : ""}`}
        onClick={() => handleChanges(todo.id)}>
            <p>{todo.item}</p>
        </div>

        {todo.due && (
            <p className="due-date">Due Date: {todo.due}</p>
        )}

        {moment(todo.raw).isBefore(moment()) && !todo.completed && (
        <p className="overdue">Overdue!</p>
        )}

        <p className="time-completed" style={{textDecoration: "none"}}>Completed: {todo.timeCompleted}</p>
        
       

        </>
    )
}
