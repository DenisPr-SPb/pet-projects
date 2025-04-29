import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoForm from './components/todos/TodoForm.jsx';
import TodoList from './components/todos/TodoList.jsx';
import {useState} from 'react';
import TodosActions from './components/todos/TodosActions.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {

    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}));
  };

  const resetTodosHandler = () => {
    setTodos([]);
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  }

  const completedTodosCount = todos.filter(todo => todo.isCompleted).length;

  return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler}/>
        {!!todos.length && (<TodosActions resetTodos={resetTodosHandler}
                                          deleteCompletedTodos={deleteCompletedTodosHandler}
                                          completedTodo={!!completedTodosCount}
        />)}
        <TodoList todos={todos} deleteTodo={removeTodoHandler} toggleTodo={toggleTodoHandler}/>

        {!!completedTodosCount && (
            completedTodosCount === 1 ? `You have 1 completed todo` : `You have ${completedTodosCount} completed todos`
        )}
      </div>
  );
}

export default App;
