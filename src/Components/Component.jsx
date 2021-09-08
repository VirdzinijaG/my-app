// import person from '../Data/person';

// Komponentas
function Component(props) {
  return (
    <>
      <h1>Hello, Barsukas!</h1>
      <small>{props.name}{props.surname} per{props.per}</small>
    </>
  );
}

export default Component;