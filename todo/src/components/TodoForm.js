import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
      };

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        const dueDate = moment(selectedDate).format('ddd, MMM Do YYYY');
        setNewTodo('');
        props.dispatch({
            type: "ADD_TODO",
            payload: { 
                item: newTodo, 
                due: dueDate, 
                raw: selectedDate, 
                completed: false, 
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant='inline'
                        format='MM/dd/yyyy'
                        margin='normal'
                        id='date-picker-inline'
                        label='Due Date'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />     
                </MuiPickersUtilsProvider>
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