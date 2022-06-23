import './App.css';
import freeCodeCampLogo from '../src/img/freecodecamp-logo.png'
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="Todo-app">
      <div className='freecodecamp-logo-container' >
        <img src={freeCodeCampLogo} className='freecodecamp-logo'  alt='log de Freecodecamp'/>
      </div>
      
      <div className='main-todo-list' >
        <h1>Mis tareas</h1>
            <TodoList/>
        
      </div>


    </div>
  );
}

export default App;
