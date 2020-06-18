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

        <p className="time-completed" style={{textDecoration: "none"}}>{todo.timeCompleted}</p>
        {moment(todo.raw).isBefore(moment()) && !todo.completed && (
            <p>Overdue!</p>
        )}
        {todo.due && (
            <p>Due Date is: {todo.due}</p>
        )}

        </>
    )
}
