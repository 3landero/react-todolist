import './App.css';
// import freeCodeCampLogo from '../src/img/freecodecamp-logo.png'
import TodoList from './components/TodoList';

/*<div className='freecodecamp-logo-container' >
        <img src={freeCodeCampLogo} className='freecodecamp-logo'  alt='log de Freecodecamp'/>
</div>*/

function App() {
  return (
    <>
    <div className="Todo-app">
      <h1 className='todo-list-title tracking-in-expand' > TO DO LIST      </h1>
      
      <div className='main-todo-list' >
        <h1>My Tasks</h1>
            <TodoList/>
        
      </div>

    </div>
    <footer className='footer' >Made with React by Ramses Landero</footer>
    </>
  );
}

export default App;
