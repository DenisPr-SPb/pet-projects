export default function PetInfo(props) {
  console.log(props);
  const {animal, age, hasPet} = props;
  return (
      <div>
        <p>
          {
            hasPet ?
                `My ${animal} is ${age} years old` :
                `I don\'t have a ${animal}`
          }
        </p>
      </div>
  );
}