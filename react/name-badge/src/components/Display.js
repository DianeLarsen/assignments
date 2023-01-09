export default function Display(props) {
  // console.log("Display: props.fname: "+ props.fName)
  const styles = {
    Active: {
      backgroundColor: "#00008b",
      border: "2px solid #00008b",
    },
    Inactive: {
      backgroundColor: "rgb(87, 87, 87)",
    },
  };
  console.log(props.id % 2);
  return (
    <div className="display">
      <div
        className="heading"
        style={props.id % 2 ? styles.Active : styles.Inactive}
      >
        <h3>Badge:</h3>
      </div>
      <ul>
        <h4>
          Name: {props.fName} {props.lName}{" "}
        </h4>

        <h4>Phone: {props.phone}</h4>
        <h4>Place of birth: {props.birthPlace}</h4>
        <h4>Favorite food: {props.favFood}</h4>
        <h4>Email: {props.email}</h4>
        <p>{props.aboutSelf}</p>
      </ul>
    </div>
  );
}
