import "./App.css";
import MyComponent from "./components/MyComponent.jsx";
import SomeComponent from "./components/SomeComponent.jsx";

function App() {
  return (
      <div className="App">
        <MyComponent/>
        <SomeComponent/>
        <MyComponent/>
        <SomeComponent/>
        <MyComponent/>
      </div>
  );
}

export default App;
