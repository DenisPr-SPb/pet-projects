export default function PetInfo(props) {
  console.log(props);
  const {animal, age} = props;
  return (
      <div>
        <p>My {animal} is {age} years old</p>
      </div>
  );
}