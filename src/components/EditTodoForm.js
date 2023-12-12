import React, { useState } from 'react'
import TodoForm from './TodoForm'


export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id) // addTodo est une fonction qui a été passée en props, elle est définie dans TodoWrapper.js

        setValue("") // permet de vider le champ input après avoir cliqué sur le bouton
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Modifier la tâche' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Modifier la tâche</button>
        </form>
    )
}

export default TodoForm 