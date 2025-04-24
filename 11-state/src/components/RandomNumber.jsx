import {useState} from "react";
import {generateRandomNumber} from "../utils/generateRandomNumber.js";

export default function RandomNumber({maxNum}) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const changeNum = () => {
    setRandomNumber(generateRandomNumber(maxNum));
  }

  return (
      <div>
        <h1>{randomNumber}</h1>
        <button className="button" onClick={changeNum}>Generate</button>
      </div>
  );
}