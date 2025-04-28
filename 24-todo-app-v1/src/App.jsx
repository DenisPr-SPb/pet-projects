import "./App.css";
import TodoForm from "./components/todos/TodoForm.jsx";
import TodoList from "./components/todos/TodoList.jsx";
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const removeTodoHandler = (inde) => {
    setTodos(todos.filter((_,idx) => idx !== inde));
  };

  return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler}/>
        <TodoList todos={todos} deleteTodo={removeTodoHandler}/>
      </div>
  );
}

export default App;
