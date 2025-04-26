import "./App.css";
import Wrapper from "./components/Wrapper.jsx";

function App() {
  return (
      <div className="App">
        <Wrapper color={'green'}>
          <div><h2>Hi</h2></div>
        </Wrapper>
        <Wrapper color={'lightgreen'}>
          <div><h2>Hi 2</h2></div>
        </Wrapper>
      </div>
  );
}

export default App;
