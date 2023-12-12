import React, {useState} from 'react'


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Quelle est la tache du jour ?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Ajouter une tâche</button>
        </form>
  )
}

export default TodoForm