import Todo from './Todo.jsx';

export default function TodoList(props) {
  const {todos, deleteTodo, toggleTodo} = props;

  return (
      <div>
        {!todos.length && <h2>No todos</h2>}
        {todos.map((todo) => (
            <Todo key={todo.id}
                  todo={todo}
                  id={todo.id}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
            />
        ))}
      </div>
  );
}