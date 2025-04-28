import {RiTodoFill} from "react-icons/ri";
import style from "./Todo.module.css";

export default function Todo(props) {
  const {todo, deleteTodo, index} = props;

  return (
      <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
        <RiTodoFill className={style.todoIcon} />
        <p className={style.todoText}>{todo}</p>
      </div>
  )
}