import style from './TodoForm.module.css';
import btnStyle from '../ui/Button.module.css';
import {useState} from 'react';
import Button from '../ui/Button.jsx';

export default function TodoForm({addTodo}) {
  const [text, setText] = useState('');

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
                 onChange={(e) => setText(e.target.value)}
          />
          <Button className={btnStyle.button} title="submit" type="submit" onClick={onSubmitHandler}>Submit</Button>
        </form>
      </div>
  );
}