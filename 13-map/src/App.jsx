import {useState} from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }

  const textArr = ['Click me!', 'Click again', 'Hit me!', 'Press me!', '.', 'La-la'];
  return (
      <div className="App">
        <Counter counter={count}/>
        {textArr.map(text => (
            <Button onClick={incrementCount} key={text} text={text}/>
        ))}
      </div>
  );
}

export default App;
