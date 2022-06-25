import React, {useState} from 'react'
import '../stylesheets/FormTodo.css'
import {v4 as uuidv4} from 'uuid'

const FormTodo  = (props) => {
  const [input, setInput] = useState('')
  
  const handleChange = e =>{
    setInput(e.target.value);
    
  }
  
  const handleSending = e => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTodo)
  }

  return (
    <form className='todo-form' 
    onSubmit={handleSending}>
        <input type="text" 
        className='todo-input'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}/>

        <button className='todo-button'>
            Add Task
        </button>

    </form>


  )
}

//FormTodo .propTypes = {}

export default FormTodo 