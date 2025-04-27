import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/13')
    //     .then(response => response.json())
    //     .then(json => setTodo(json))

    (async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/13");
        const result = await response.json();
        setTodo(result);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (todo) {
    console.log({todo})
  }

  return (
      <div className="App">
        APP
        {!!todo && (
            <h1>{todo.title}</h1>
        )}
      </div>
  );
}

export default App;
