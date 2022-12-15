export default function Display(props) {
    // console.log("Display: props.fname: "+ props.fName)
  return (
    <div className="display">
      <div className="heading">
        <h3>Badge:</h3>
      </div>
      <ul>
        <h4>Name: {props.fName} {props.lName} </h4>

        <h4>Phone: {props.phone}</h4>
        <h4>Place of birth: {props.birthPlace}</h4>
        <h4>Favorite food: {props.favFood}</h4>
        <h4>Email: {props.email}</h4>
        <p>{props.aboutSelf}</p>
      </ul>
    </div>
  );
}
