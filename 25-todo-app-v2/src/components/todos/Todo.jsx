import {RiDeleteBin2Line, RiTodoFill} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';
import style from './Todo.module.css';

export default function Todo(props) {
  const {todo, deleteTodo, id, toggleTodo} = props;

  return (
      <div className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}>
        <RiTodoFill className={style.todoIcon}/>
        <p className={style.todoText}>{todo.text}</p>
        <RiDeleteBin2Line className={style.deleteIcon}
                          onClick={() => deleteTodo(id)}
        />
        <FaCheck className={style.checkIcon}
                 onClick={() => toggleTodo(id)}
        />
      </div>
  );
}