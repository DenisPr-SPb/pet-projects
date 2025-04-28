import Button from "../ui/Button.jsx";
import style from "./TodoForm.module.css";
import {useState} from "react";

export default function TodoForm({addTodo}) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
      <div className={style.todoForm}>
        <form onSubmit={onSubmitHandler}>
          <input type="text"
                 placeholder="Enter new todo"
                 value={text}
                 onChange={(e)=> setText(e.target.value)}
          />
          <Button/>
        </form>
      </div>
  );
}