import React, {useState} from 'react'
import FormTodo from './FormTodo '
import Todo from './Todo'
import '../stylesheets/TodoList.css'


const TodoList = props => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        console.log(todo);
        if (todo.text.trim()) {
            todo.text = todo.text.trim();
            const updatedTodos = [todo, ...todos];
            setTodos(updatedTodos);
            };
        };

    const deleteTodo = id =>{
        const updatedTodos = todos.filter(tarea => tarea.id !== id)
        setTodos(updatedTodos);
        }

    const completeTodo = id =>{
        const updatedTodos = todos.map( todo =>{
            if (todo.id ===id) {
                todo.completed = !todo.completed;
            }
            return todo
        });
        setTodos(updatedTodos)
    }
    return (
    <>
        <FormTodo onSubmit= { addTodo } />
            <div className='todo-list-container' >
                {
                    todos.map(( todo )=>
                    <Todo 
                    key={ todo.id }
                    id={ todo.id }
                    text={ todo.text } 
                    completeTodo = { completeTodo }
                    completed={ todo.completed }
                    deleteTodo={ deleteTodo }/>
                )}    

            </div>
    </>
  )
}

export default TodoList