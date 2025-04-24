import {persons} from "../data/persons.js";
import Person from "./Person.jsx";

export default function Persons() {
  return (
      <>
        {persons.map((person) => (
            <Person key={person.id} {...person}/>
        ))}
      </>
  )
}