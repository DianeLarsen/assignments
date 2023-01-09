import React from "react";

export default function Forms(props) {
  function restrictSym(evt) {
    if (
      (evt.which != 8 && evt.which != 0 && evt.which != 46 && evt.which < 48) ||
      (evt.which > 57 && evt.which < 96) ||
      evt.which > 105
    ) {
      evt.preventDefault();
    }
  }

  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="first-name"
        minLength="3"
        name="fName"
        className="input"
        placeholder="First Name"
        onChange={props.handleChange}
        value={props.fName}
        required
      />
      <br />

      <input
        type="text"
        id="last-name"
        minLength="3"
        name="lName"
        className="input"
        placeholder="Last Name"
        onChange={props.handleChange}
        value={props.lName}
        required
      />
      <input
        type="email"
        id="email"
        minLength="3"
        name="email"
        className="input"
        placeholder="Email"
        onChange={props.handleChange}
        value={props.email}
        required
      />
      <input
        type="text"
        id="birth-place"
        minLength="3"
        name="birthPlace"
        className="input"
        placeholder="Place of Birth"
        onChange={props.handleChange}
        value={props.birthPlace}
        required
      />
      <input
        type="tel"
        id="phone-number"
        name="phone"
        min={0}
        minLength="10"
        maxLength="10"
        className="input"
        placeholder="Phone"
        onKeyDown={restrictSym}
        onChange={props.handleChange}
        value={props.phone}
        required
      />
      <input
        type="text"
        id="fav-food"
        name="favFood"
        minLength="3"
        className="input"
        placeholder="Favorite Food"
        onChange={props.handleChange}
        value={props.favFood}
        required
      />
      <textarea
        type="text"
        id="about"
        name="aboutSelf"
        minLength="3"
        className="input"
        placeholder="Tell us about yourself"
        onChange={props.handleChange}
        value={props.aboutSelf}
        required
      />

      <button className="form--submit">Submit</button>
    </form>
  );
}
