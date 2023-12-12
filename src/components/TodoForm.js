import React, { useState } from 'react'


export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value) // addTodo est une fonction qui a été passée en props, elle est définie dans TodoWrapper.js

        setValue("") // permet de vider le champ input après avoir cliqué sur le bouton
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Quelle est la tache du jour ?' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Ajouter une tâche</button>
        </form>
    )
}

export default TodoForm