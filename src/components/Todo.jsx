import React from 'react'
import '../stylesheets/Todo.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Todo({id, text, completed, completeTodo, deleteTodo}) {
  
  return (
    <div 
          className= {
          completed? 
          'todo-container fade-in-top completed' : 'todo-container fade-in-top' } >
          <div 
                className= 'todo-text' 
                onClick={ ()=> completeTodo(id) }>
                {text}
          </div>
          <div  
                className= 'todo-icon_container' 
                onClick={ ()=>deleteTodo(id)}>
                <AiOutlineCloseCircle 
                className= 'todo-icon'/>
          </div>
    </div>
  )
}


export default Todo;
