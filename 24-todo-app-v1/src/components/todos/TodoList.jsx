import Todo from "./Todo.jsx";

export default function TodoList(props) {
  const {todos, deleteTodo} = props;
  return (
      <div>
        {!todos.length && <h2>No todos</h2>}
        {todos.map((todo, index) => <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>)}
      </div>
  )
}