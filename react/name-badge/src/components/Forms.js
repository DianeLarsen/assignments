import React from "react"

export default function Forms(props) {

  return (
    <form className="form">
      <input
        type="text"
        id="first-name"
        name="fName"
        className="input"
        placeholder="First Name"
        onChange={props.handleChange}
        value={props.fName}
      />
      <br />

      <input
        type="text"
        id="last-name"
        name="lName"
        className="input"
        placeholder="Last Name"
        onChange={props.handleChange}
        value={props.lName}
      />
      <input
        type="email"
        id="email"
        name="email"
        className="input"
        placeholder="First Name"
        onChange={props.handleChange}
        value={props.email}
      />
      <input
        type="text"
        id="birth-place"
        name="birthPlace"
        className="input"
        placeholder="Place of Birth"
        onChange={props.handleChange}
        value={props.birthPlace}
      />
      <input
        type="number"
        id="phone-number"
        name="phone"
        className="input"
        placeholder="Phone"
        onChange={props.handleChange}
        value={props.phone}
      />
      <input
        type="text"
        id="fav-food"
        name="favFood"
        className="input"
        placeholder="Favorite Food"
        onChange={props.handleChange}
        value={props.favFood}
      />
      <textarea
        type="text"
        id="about"
        name="aboutSelf"
        className="input"
        placeholder="Tell us about yourself"
        onChange={props.handleChange}
        value={props.aboutSelf}
      />

      <button className="form--submit">Submit</button>
    </form>
  )
}
