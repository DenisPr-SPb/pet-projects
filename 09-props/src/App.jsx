import "./App.css";
import PetInfo from "./components/PetInfo.jsx";

function App() {
  return (
      <div className="App">
        <PetInfo animal='cat' age='5'/>
        <PetInfo animal='dog' age='7'/>
        <PetInfo animal='duck' age='2'/>
      </div>
  );
}

export default App;
