import "./App.css";
import PetInfo from "./components/PetInfo.jsx";

function App() {
  return (
      <div className="App">
        <PetInfo animal='cat' age='5' hasPet={true}/>
        <PetInfo animal='dog' age='7' hasPet={false}/>
        <PetInfo animal='duck' age='2' hasPet={true}/>
      </div>
  );
}

export default App;
