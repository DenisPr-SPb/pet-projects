import {useState} from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";
import ResetButton from "./components/ResetButton.jsx";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
      <div className="App">
        <Counter counter={count}/>
        <Button onClick={incrementCount}/>
        <Button onClick={incrementCount}/>
        <Button onClick={incrementCount}/>
        <Button onClick={incrementCount}/>
        {count > 0 && (<ResetButton onclick={resetCount}/>)}
      </div>
  );
}

export default App;
