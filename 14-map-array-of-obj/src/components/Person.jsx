export default function Person(props) {
  const {id, firstName, lastName, email, image} = props;
  return (
      <div className="person">
        <img className="img" src={image} alt={id}/>
        <p className="name">{`${firstName} ${lastName}`}</p>
        <p className="email">{email}</p>
      </div>
  );
}